import Navbar from "../components/admin/Navbar";
import Card from "../components/admin/Card";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>

          <p className="text-gray-500 mt-2">Welcome back, Admin 👋</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">
          <Card title="Total Users" value="125" />

          <Card title="Total Orders" value="356" />

          <Card title="In Transit" value="42" />

          <Card title="Delivered" value="314" />
        </div>

        {/* Quick Actions */}
        <div className="mt-10">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold">
                Add User
              </button>

              <button className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold">
                Add Parcel
              </button>

              <button className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold">
                Manage Orders
              </button>

              <button className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold">
                Manage Delivery
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;