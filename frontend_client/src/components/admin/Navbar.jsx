import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-orange-400">CMS Admin</h1>

        <div className="flex items-center gap-6">
          <p className="font-medium">Welcome, Admin</p>

          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition text-white"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;