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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  //const [isSucces, setIsSucces]=useState('');
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [titleSucces, setTitleSucces] = useState("");
  //const [allMovies, setAllMovies]=useState([]);
  //const [visableMovies, setVisableMovies] = useState([]);

  function searchMovies(arr, query) {
    return arr.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  /*function filterMovies(arr, short) {
    const filter = useCallback(() => {
    return short ? arr.filter((item) => item.duration < 40) : arr;
    }, [arr, short]);
    //return short ? arr.filter((item)=> item.duration < 40) : arr;
    return filter;
  }*/

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
        if (err.status === 11000) {
          return setError("Пользователь с таким email уже зарегистирован");
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
          //console.log(data);
          if (!data) {
            return;
          }
          setCurrentUser(data);
          setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch(() => {
          setLoggedIn(false);
        });
    }
  }
  function goOut() {
    localStorage.removeItem("token");
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
        //console.log(`Ошибка ${err}`);
        if (err.status === 11000) {
          return setError("Пользователь с таким email уже существует");
        }
        setError("Произошла ошибка при сохранении изменений");
      });
  }
  function closePopup() {
    setInfoTooltip(false);
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
                  onSearch={searchMovies}
                                  />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />
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
              element={<Login onSubmit={handleSubmitLogin} error={error} />}
            />
            <Route
              path="/signup"
              element={
                <Register onSubmit={handleSubmitRegister} error={error} />
              }
            />
            <Route path="*" element={<NotFound />} />
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
