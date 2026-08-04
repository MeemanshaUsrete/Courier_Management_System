import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, getUserRole, clearUserSession } from "../../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();
  const role = getUserRole();

  const handleLogout = () => {
    clearUserSession();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          🚚 ReMiShift
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>

          {loggedIn && (
            <>
              <li>
                <Link to="/newshipment">Book Shipment</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              {role === "admin" && (
                <li>
                  <Link to="/admin/dashboard" className="text-orange-300 hover:text-orange-200">Admin</Link>
                </li>
              )}
            </>
          )}

          <li>
            <Link to="/">Track</Link>
          </li>

          <li>
            <Link to="/">About Us</Link>
          </li>
          
        </ul>

        {/* Right Side Buttons */}
        <div className="flex gap-4">
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition font-medium"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-blue-600 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;