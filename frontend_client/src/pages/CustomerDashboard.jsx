import Topbar from "../components/dashboard/Topbar";
import TrackingCard from "../components/dashboard/TrackingCard";
import ShipmentTable from "../components/dashboard/ShipmentTable";



function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">


    <div className="max-w-7xl mx-auto p-6">

        <Topbar />


    <div className="flex justify-between items-center mb-6">

        <div>

            <h1 className="text-4xl font-bold">

                Welcome back, Trishika

            </h1>

            <p className="text-gray-500">

                Here's what's happening with your deliveries today.

            </p>

        </div>

        <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800">

            + NEW SHIPMENT

        </button>

    </div>

    {/* Cards Row */}

<div className="mt-6">
    <TrackingCard />
</div>

{/* Shipment Table */}

<div className="mt-8">

    <ShipmentTable />

</div>

</div>

</div>

  );
}

export default CustomerDashboard;