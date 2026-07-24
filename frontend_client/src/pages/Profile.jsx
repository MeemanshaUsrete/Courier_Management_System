import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Upload,
  Pencil,
  Save,
} from "lucide-react";
import bgImage from "../assets/images/bg.png"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Riya",
    email: "riya@gmail.com",
    mobile: "+91 9876543210",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
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
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center p-6"
      style={{
        backgroundImage:`url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8">

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          MY PROFILE
        </h1>

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

          <label className="font-semibold text-gray-700">
            Name
          </label>

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
              className={`w-full pl-10 pr-4 py-3 rounded-lg border
              ${
                isEditing
                  ? "bg-white border-blue-500"
                  : "bg-gray-100"
              }
              focus:outline-none`}
            />

          </div>

        </div>

        {/* Email */}

        <div className="mb-4">

          <label className="font-semibold text-gray-700">
            Email
          </label>

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
              className={`w-full pl-10 pr-4 py-3 rounded-lg border
              ${
                isEditing
                  ? "bg-white border-blue-500"
                  : "bg-gray-100"
              }
              focus:outline-none`}
            />

          </div>

        </div>

        {/* Mobile */}

        <div className="mb-6">

          <label className="font-semibold text-gray-700">
            Mobile Number
          </label>

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
              className={`w-full pl-10 pr-4 py-3 rounded-lg border
              ${
                isEditing
                  ? "bg-white border-blue-500"
                  : "bg-gray-100"
              }
              focus:outline-none`}
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="flex-1 flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
            >
              <Pencil size={18} />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex-1 flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
            >
              <Save size={18} />
              Save
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default Profile;