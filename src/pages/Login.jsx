import { useState } from "react";
// import "./Login.css";
// import "../App.css"
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      window.location = "/dashboard";
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="overlay">
        <div className="login-card">
          <h1>Sign In</h1>
          <p className="subtitle">Welcome back!</p>

          <form onSubmit={login}>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Sign In</button>
          </form>

          <div className="divider"></div>

          <a href="#" className="forgot">
            Forgot password?
          </a>

          <p className="signup">
            Don't have an account?
            <a href="/register"> Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;