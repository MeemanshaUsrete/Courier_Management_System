import { ArrowRight } from "lucide-react";

function TrackingCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-4">
        Track Package
      </h2>

      <p className="text-gray-500 mb-3">
        Enter Tracking Number
      </p>

      <div className="flex">

        <input
          type="text"
          placeholder="SC-8932-902"
          className="border rounded-l-lg flex-1 px-4 py-3 outline-none"
        />

        <button className="bg-orange-500 px-5 text-white rounded-r-lg hover:bg-orange-600">

          <ArrowRight />

        </button>

      </div>

      <div className="mt-6 bg-blue-50 rounded-lg p-4">

        <p className="text-orange-500 font-semibold">
          RECENT LOOKUP
        </p>

        <p className="font-semibold mt-2">
          Order #SC-7721
        </p>

        <p className="text-gray-500">
          Estimated Delivery Tomorrow
        </p>

      </div>

      

    </div>
  );
}

export default TrackingCard;