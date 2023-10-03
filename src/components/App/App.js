import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as MoviesApi from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const [infoTooltip, setInfoTooltip] = useState(false);
  const [titleSucces, setTitleSucces] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([]);
  const isSaveMovie = (id) => saveMovies.some((card) => card.movieId === id);
  const [movies, setMovies] = useState([]);
  const [isErrorLoading, setErrorLoading] = useState("");

  function handleMovies(query) {
    if (allMovies.length === 0) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((res) => {
          setAllMovies(res);
          const searchMovies = getSearchMovies(res, query);
          localStorage.setItem("movies", JSON.stringify(searchMovies));
          setErrorLoading("");
          setMovies(searchMovies);
          if (searchMovies.length === 0) {
            setErrorLoading("По вашему запросу ничего не найдено");
          }
        })
        .catch((err) => {
          setErrorLoading(
            "Во время запроса произошла ошибка,пожалуйста подождите"
          );
          console.log(`Ошибка ${err}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const searchMovies = getSearchMovies(allMovies, query);
      localStorage.setItem("movies", JSON.stringify(searchMovies));
      setErrorLoading("");
      setMovies(searchMovies);
      if (searchMovies.length === 0) {
        setErrorLoading("По вашему запросу ничего не найдено");
      }
      console.log(searchMovies, allMovies);
    }
  }
  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");

    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  function getSearchMovies(arr, query) {
    return arr.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
  function handleLikeSave(movies) {
    console.log(movies.image.url);
    MainApi.addSaveCards({
      country: movies.country,
      director: movies.director,
      duration: movies.duration,
      year: movies.year,
      description: movies.description,
      image: "https://api.nomoreparties.co" + movies.image.url,
      trailerLink: movies.trailerLink,
      thumbnail:
        "https://api.nomoreparties.co" + movies.image.formats.thumbnail.url,
      movieId: movies.id,
      nameRU: movies.nameRU,
      nameEN: movies.nameEN,
    })

      .then((newfilm) => {
        setSaveMovies([newfilm, ...saveMovies]);
        localStorage.setItem(
          "saveMovies",
          JSON.stringify([newfilm, ...saveMovies])
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function getMovies() {
    MainApi.getCardsMovies()
      .then((data) => {
        setSaveMovies(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }
  function handleCardDelete(id) {
    const movie = saveMovies.find((card) => card.movieId === id);
    MainApi.removeCard(movie._id)
      .then(() => {
        setSaveMovies((state) =>
          state.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }
  useEffect(() => {
    checkToken();
  }, []);

  function handleSubmitRegister(info) {
    const { email, password, name } = info;
    MainApi.register(name, email, password)
      .then(() => {
        navigate("/signin");
        handleSubmitLogin({ email, password });
        setError("");
      })
      .catch((err) => {
        if (err.status === 409) {
          return setError("Пользователь с таким email уже зарегистирован");
        }
        if (err.status === 400) {
          return setError("Пароль должен содержать 9 знаков");
        }
        setError("Переданы некорректные данные при создании пользователя");
      });
  }
  function handleSubmitLogin(info) {
    const { email, password } = info;
    MainApi.login(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        setError("");
        navigate("/movies");
      })
      .catch((err) => {
        if (err.status === 400) {
          return setError("Вы ввели неправильный логин или пароль");
        }
        setError("При авторизации произошла ошибка");
      });
  }
  function checkToken() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      MainApi.getContent(token)
        .then((data) => {
          if (!data) {
            return;
          }
          setCurrentUser(data);
          setLoggedIn(true);
          navigate(location.pathname);
          getMovies();
        })
        .catch(() => {
          setLoggedIn(false);
        });
    }
  }
  function goOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    localStorage.removeItem("checkbox");
    localStorage.removeItem("saveMovies");
    navigate("/");
    setLoggedIn(false);
  }
  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserData()
        .then((info) => {
          setCurrentUser(info);
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        });
    }
  }, [loggedIn]);

  function handleUserProfile(data) {
    const token = localStorage.getItem("token");
    MainApi.editProfileUser(data, token)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email,
        });
        setInfoTooltip(true);
        setTitleSucces("Данные изменены");
        setError(" ");
      })
      .catch((err) => {
        if (err.status === 11000) {
          return setError("Пользователь с таким email уже существует");
        }
        setError("Произошла ошибка при сохранении изменений");
      });
  }
  function closePopup() {
    setInfoTooltip(false);
  }
  function handlePageBack() {
    navigate(-1);
  }
  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  onSearch={handleMovies}
                  handleSaveFilm={handleLikeSave}
                  handleCardDelete={handleCardDelete}
                  isSaveMovie={isSaveMovie}
                  isLoading={isLoading}
                  isErrorLoading={isErrorLoading}
                  movies={movies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  saveMovies={saveMovies}
                  isSaveMovie={isSaveMovie}
                  onDelete={handleCardDelete}
                  onSearchMovies={getSearchMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  onClick={goOut}
                  onSubmit={handleUserProfile}
                  error={error}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedRoute
                  loggedIn={!loggedIn}
                  element={Login}
                  onSubmit={handleSubmitLogin}
                  error={error}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  loggedIn={!loggedIn}
                  element={Register}
                  onSubmit={handleSubmitRegister}
                  error={error}
                />
              }
            />
            <Route path="*" element={<NotFound onBack={handlePageBack} />} />
          </Routes>
          <InfoTooltip
            onClose={closePopup}
            isOpen={infoTooltip}
            title={titleSucces}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
