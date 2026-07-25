import { Package } from "lucide-react";

function SummaryCard({
  title,
  id,
  status,
  progress,
  location,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between items-center">

        <div className="bg-orange-100 p-3 rounded-lg">

          <Package className="text-orange-500" />

        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

          {status}

        </span>

      </div>

      <h2 className="text-2xl font-bold mt-5">

        {title}

      </h2>

      <p className="text-gray-500">

        Shipment ID: {id}

      </p>

      {progress && (

        <>

          <div className="mt-5 flex justify-between">

            <span>Progress</span>

            <span>{progress}%</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">

            <div
              style={{ width: `${progress}%` }}
              className="bg-orange-500 h-2 rounded-full"
            ></div>

          </div>

        </>

      )}

      <p className="mt-6 text-gray-500">

        {location}

      </p>

    </div>
  );
}

export default SummaryCard;