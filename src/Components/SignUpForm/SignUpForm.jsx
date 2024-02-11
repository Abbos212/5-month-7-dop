import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";
import { Link } from "react-router-dom";
import './signup.css';

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    }
    setIsButtonDisabled(!username || !password || !passwordConfirm);
  };

  const handleSignup = () => {
    if (password === passwordConfirm && password !== "") {
      const userData = {
        username,
        password,
      };
      dispatch(login(userData));
    } else {
      alert("Password confirmation does not match or passwords are empty.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2> Sign Up</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              placeholder="UserName..."
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password..."
              value={password}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Password..."
              value={passwordConfirm}
              onChange={handleInputChange}
            />
          </label>
          <button
            type="button"
            className="button-50"
            role="button"
            onClick={handleSignup}
            disabled={isButtonDisabled}
          >
            Sign Up
          </button>
          <Link to="/login" className="link-to-login">
            Already have an account? Login here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
