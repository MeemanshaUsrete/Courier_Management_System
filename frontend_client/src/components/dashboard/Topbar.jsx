import {
  Bell,
  Settings,
  UserCircle,
  Truck
} from "lucide-react";

function Topbar() {
  return (
    <div className="bg-white rounded-xl shadow-sm px-6 py-4 flex items-center justify-between">

      {/* Application Logo & Name */}

      <div className="flex items-center gap-3">

        <span className="text-4xl">
            🚚
        </span>

            <div>
                <h1 className="text-2xl font-bold text-orange-500">
                ReMiShift
                </h1>

                <p className="text-sm text-gray-500">
                Courier Management System
                </p>
            </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative hover:text-orange-500 transition">

          <Bell size={22} />

          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

        </button>

        {/* Settings */}
        <button className="hover:text-orange-500 transition">

          <Settings size={22} />

        </button>

        {/* Profile */}

        <div className="flex items-center gap-2 cursor-pointer">

          <UserCircle size={38} className="text-gray-700" />

          <div>

            <p className="font-semibold text-gray-800">
              Trishika Reddy
            </p>

            

          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;