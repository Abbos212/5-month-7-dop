import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginAction(username));
    navigate("/");
  };

  const isButtonDisabled = !username || !password;

  return (
    <div className="login-block">
        <div className="login-sign">
          <h2>Login in</h2>
          <h4><Link className="siign" to="/signup">Sign Up</Link></h4>
        </div>
        <form>
          <label>
            Username:
            <input
              type="text"
              placeholder="UserName..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          
          <br />  
          <button
            type="button"
            className="button-30"
            role="button"
            onClick={handleLogin}
            disabled={isButtonDisabled}
          >
            Login
          </button>
         
        
        </form>
      </div>
  );
};

export default Login;