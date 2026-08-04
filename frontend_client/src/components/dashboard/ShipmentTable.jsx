const shipments = [
  {
    id: "SC1001",
    sender: "Amazon",
    receiver: "Trishika Reddy",
    date: "20 Jul 2026",
    status: "Delivered",
  },
  {
    id: "SC1002",
    sender: "Flipkart",
    receiver: "Trishika Reddy",
    date: "21 Jul 2026",
    status: "In Transit",
  },
  {
    id: "SC1003",
    sender: "Myntra",
    receiver: "Trishika Reddy",
    date: "22 Jul 2026",
    status: "Pending",
  },
  {
    id: "SC1004",
    sender: "Nykaa",
    receiver: "Trishika Reddy",
    date: "23 Jul 2026",
    status: "Delivered",
  },
];

function ShipmentTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Shipment History
        </h2>

        <button className="text-orange-500 font-semibold hover:underline">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b">

              <th className="px-4 py-3 text-left">Tracking ID</th>
              <th className="px-4 py-3 text-left">Sender</th>
              <th className="px-4 py-3 text-left">Receiver</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {shipments.map((shipment) => (

              <tr
                key={shipment.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="px-4 py-4">
                  {shipment.id}
                </td>

                <td>{shipment.sender}</td>

                <td>{shipment.receiver}</td>

                <td>{shipment.date}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      shipment.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : shipment.status === "In Transit"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {shipment.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ShipmentTable;