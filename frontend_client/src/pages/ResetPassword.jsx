import { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/bg.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    // TODO:
    // Call backend API
    // POST /api/auth/forgot-password
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-white text-center">
          Forgot Password
        </h1>

        <p className="text-gray-200 text-center mt-3">
          Enter your registered email address.
          We'll send you an OTP to reset your password.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <div>
            <label className="block text-white font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 rounded-xl bg-white/80 outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Send OTP
          </button>

        </form>

        <div className="mt-8 text-center">

          <Link
            to="/login"
            className="text-orange-300 hover:text-orange-200"
          >
            ← Back to Login
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;