import {
  LayoutDashboard,
  Package,
  Truck,
  BarChart3,
  Settings,
  LogOut,
  CircleHelp,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b">

        <h1 className="text-2xl font-bold text-orange-500">
          SwiftCourier
        </h1>

        <p className="text-gray-500 text-sm">
          Logistics Control
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 mt-5">

        <ul className="space-y-2 px-4">

          <li>

            <button className="flex items-center gap-3 bg-orange-100 text-orange-600 w-full px-4 py-3 rounded-lg font-medium">

              <LayoutDashboard size={20} />

              Dashboard

            </button>

          </li>

          <li>

            <button className="flex items-center gap-3 hover:bg-gray-100 w-full px-4 py-3 rounded-lg">

              <Package size={20} />

              Shipments

            </button>

          </li>

          <li>

            <button className="flex items-center gap-3 hover:bg-gray-100 w-full px-4 py-3 rounded-lg">

              <Truck size={20} />

              Couriers

            </button>

          </li>

          <li>

            <button className="flex items-center gap-3 hover:bg-gray-100 w-full px-4 py-3 rounded-lg">

              <BarChart3 size={20} />

              Analytics

            </button>

          </li>

          <li>

            <button className="flex items-center gap-3 hover:bg-gray-100 w-full px-4 py-3 rounded-lg">

              <Settings size={20} />

              Settings

            </button>

          </li>

        </ul>

      </nav>

      {/* Bottom */}

      <div className="border-t p-5 space-y-2">

        <button className="flex items-center gap-3 hover:bg-gray-100 w-full px-4 py-3 rounded-lg">

          <CircleHelp size={20} />

          Help Center

        </button>

        <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-4 py-3 rounded-lg">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Sidebar;