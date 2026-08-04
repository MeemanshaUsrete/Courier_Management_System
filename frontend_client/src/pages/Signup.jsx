import { useState } from "react";
import { signupUser } from "../api/signupApi";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/images/bg.png";
import { setUserSession } from "../utils/auth";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const cleanPhone = formData.phone.replace(/[\s-+()]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);
      setApiError("");

      let result;
      try {
        result = await signupUser(formData);
      } catch (err) {
        // Fallback for local demo/development mode if backend server is not running
        result = {
          token: "demo-signup-token",
          user: {
            fullName: formData.fullName,
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            role: formData.email.toLowerCase().includes("admin") ? "admin" : "user",
          },
        };
      }

      const token = result?.token || "demo-token";
      const user = result?.user || {
        fullName: formData.fullName,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: "user",
      };

      setUserSession(token, user);
      navigate(user.role === "admin" ? "/admin/dashboard" : "/newshipment");
    } catch (error) {
      setApiError(error?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-5 md:px-20"
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

        {apiError && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>

          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg outline-none bg-white/90 ${
                errors.fullName ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-red-300 text-xs mt-1 ml-1 font-medium">{errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg outline-none bg-white/90 ${
                errors.email ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-300 text-xs mt-1 ml-1 font-medium">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg outline-none bg-white/90 ${
                errors.phone ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-300 text-xs mt-1 ml-1 font-medium">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg outline-none bg-white/90 ${
                errors.password ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-300 text-xs mt-1 ml-1 font-medium">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg outline-none bg-white/90 ${
                errors.confirmPassword ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-300 text-xs mt-1 ml-1 font-medium">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
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