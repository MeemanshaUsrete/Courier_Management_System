import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Upload,
  Pencil,
  Save,
} from "lucide-react";
import bgImage from "../assets/images/bg.png";
import Navbar from "../components/layout/Navbar";
import { getUser, setUserSession, getToken } from "../utils/auth";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const [profile, setProfile] = useState({
    name: "Riya",
    email: "riya@gmail.com",
    mobile: "+91 9876543210",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
  });

  useEffect(() => {
    const user = getUser();
    if (user) {
      setProfile((prev) => ({
        ...prev,
        name: user.name || user.fullName || prev.name,
        email: user.email || prev.email,
        mobile: user.phone || user.mobile || prev.mobile,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!profile.name.trim()) {
      newErrors.name = "Name is required";
    } else if (profile.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!profile.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(profile.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const cleanMobile = profile.mobile.replace(/[\s-+()]/g, "");
    if (!profile.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!phoneRegex.test(cleanMobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEdit = () => {
    setIsEditing(true);
    setSuccessMessage("");
  };

  const handleSave = () => {
    if (!validate()) {
      return;
    }

    const currentToken = getToken() || "demo-token";
    const existingUser = getUser() || {};
    const updatedUser = {
      ...existingUser,
      name: profile.name,
      fullName: profile.name,
      email: profile.email,
      phone: profile.mobile,
      mobile: profile.mobile,
    };

    setUserSession(currentToken, updatedUser);
    setIsEditing(false);
    setSuccessMessage("Profile Updated Successfully!");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfile({
        ...profile,
        image: imageURL,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex justify-center items-center bg-cover bg-center p-6 pt-24"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            MY PROFILE
          </h1>

          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 text-sm font-semibold rounded-lg text-center">
              {successMessage}
            </div>
          )}

          {/* Profile Image */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={profile.image}
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg object-cover"
            />

            <label className="mt-3 flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800">
              <Upload size={18} />
              <span>Upload</span>
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Name</label>
            <div className="relative mt-1">
              <User
                size={18}
                className="absolute left-3 top-3 text-gray-500"
              />
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.name
                    ? "border-red-500 bg-white"
                    : isEditing
                    ? "bg-white border-blue-500"
                    : "bg-gray-100"
                } focus:outline-none`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Email</label>
            <div className="relative mt-1">
              <Mail
                size={18}
                className="absolute left-3 top-3 text-gray-500"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.email
                    ? "border-red-500 bg-white"
                    : isEditing
                    ? "bg-white border-blue-500"
                    : "bg-gray-100"
                } focus:outline-none`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
            )}
          </div>

          {/* Mobile */}
          <div className="mb-6">
            <label className="font-semibold text-gray-700">Mobile Number</label>
            <div className="relative mt-1">
              <Phone
                size={18}
                className="absolute left-3 top-3 text-gray-500"
              />
              <input
                type="text"
                name="mobile"
                value={profile.mobile}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.mobile
                    ? "border-red-500 bg-white"
                    : isEditing
                    ? "bg-white border-blue-500"
                    : "bg-gray-100"
                } focus:outline-none`}
              />
            </div>
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1 font-medium">{errors.mobile}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="flex-1 flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition font-medium"
              >
                <Pencil size={18} />
                Edit Profile
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex-1 flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium"
              >
                <Save size={18} />
                Save
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;