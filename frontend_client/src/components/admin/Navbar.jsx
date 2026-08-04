import { useNavigate, Link } from "react-router-dom";
import { getUser, clearUserSession } from "../../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    clearUserSession();
    navigate("/");
  };

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Link to="/" className="text-2xl font-bold text-orange-400">CMS Admin</Link>

        <div className="flex items-center gap-6">
          <p className="font-medium">Welcome, {user?.name || user?.fullName || "Admin"}</p>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition text-white font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;