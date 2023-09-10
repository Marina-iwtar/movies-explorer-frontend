import "./App.css";
import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { Routes, Route } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

function App() {
 /* const [loggedIn, setLoggedIn] = useState(false);*/
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path="/" element={<Main  />} />
          <Route path="/movies" element={<Movies  />} />
          <Route
            path="/saved-movies"
            element={<SavedMovies  />}
          />
          <Route path="/profile" element={<Profile  />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
