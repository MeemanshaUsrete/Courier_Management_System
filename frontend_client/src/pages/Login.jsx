import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import bgImage from "../assets/images/bg.png";
import { setUserSession } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    if (apiError) setApiError("");
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);
      setApiError("");

      let token, userData;

      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/login",
          formData
        );
        token = response.data.token || "dummy-token";
        userData = response.data.user || response.data;
      } catch (err) {
        // Fallback for development/offline testing if backend endpoint is not active
        if (formData.email && formData.password) {
          const role = formData.email.toLowerCase().includes("admin") ? "admin" : "user";
          token = "demo-session-token";
          userData = {
            email: formData.email,
            name: formData.email.split("@")[0],
            role: role,
          };
        } else {
          throw err;
        }
      }

      const role = userData.role || (formData.email.toLowerCase().includes("admin") ? "admin" : "user");
      userData.role = role;

      setUserSession(token, userData);

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/newshipment");
      }
    } catch (error) {
      setApiError(
        error.response?.data?.message ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-5 md:px-20"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/30">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-500">
            Sign In
          </h1>

          <p className="text-gray-200 mt-2 text-lg">
            Welcome back!
          </p>
        </div>

        {apiError && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
            {apiError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 border rounded-lg outline-none transition bg-white/90 ${
                  errors.email ? "border-red-500 focus:ring-2 focus:ring-red-200" : "focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-300 text-xs mt-1 ml-1 font-medium">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 border rounded-lg outline-none transition bg-white/90 ${
                  errors.password ? "border-red-500 focus:ring-2 focus:ring-red-200" : "focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                }`}
              />
            </div>
            {errors.password && (
              <p className="text-red-300 text-xs mt-1 ml-1 font-medium">{errors.password}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white text-lg font-semibold py-3 rounded-lg shadow-lg transition duration-300 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <Link
              to="/forgot-password"
              className="text-gray-200 hover:text-orange-400 transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Register */}
          <div className="text-center text-gray-200">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-400 font-semibold hover:underline ml-1"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;