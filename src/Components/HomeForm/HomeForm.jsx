import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './home.css';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const username = useSelector((state) => state.username);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return (
    <div className="home">
      <h2>Welcome...</h2>
    </div>
  );
};

export default Home;