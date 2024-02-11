import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeForm from "./Components/HomeForm/HomeForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignupForm from './Components/SignUpForm/SignUpForm';
import { useDispatch } from "react-redux";
import logout from "./actions/userActions";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomeForm /> : <LoginForm />} />
        <Route path="/home" element={<HomeForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/logout"
          element={
            isLoggedIn ? (
              <div>
                <h2>Logging out...</h2>
                {handleLogout()}
              </div>
            ) : (
              <div>
                <h2>Error: You are not logged in.</h2>
                <Link to="/login">Login</Link>
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;