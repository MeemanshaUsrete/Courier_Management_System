import { useState } from "react";
import {API,signupUser} from "../api/signupApi"
import { User, Mail, Phone, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import bg from "../assets/images/bg.png";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Courier Management
        </h1>

        <p className="text-center text-gray-200 mt-2 mb-6">
          Create Your Account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg outline-none bg-white/90"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg outline-none bg-white/90"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg outline-none bg-white/90"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg outline-none bg-white/90"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg outline-none bg-white/90"
            required
          />

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-lg font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-white mt-5">
          Already have an account?
          <Link
            to="/login"
            className="text-yellow-300 font-semibold hover:underline ml-1"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;