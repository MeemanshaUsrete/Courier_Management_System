import React from "react";

function TrackModal({ shipment, error, onClose }) {
  if (!shipment && !error) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-500/20 text-green-400 border-green-500/40";
      case "IN_TRANSIT":
        return "bg-blue-500/20 text-blue-400 border-blue-500/40";
      case "BOOKED":
      default:
        return "bg-orange-500/20 text-orange-400 border-orange-500/40";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-gray-900 text-white rounded-2xl border border-gray-800 shadow-2xl overflow-hidden p-6 md:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition"
        >
          ✕
        </button>

        {error ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Shipment Not Found</h3>
            <p className="text-gray-300 max-w-md mx-auto">{error}</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-800">
              <div>
                <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Tracking ID</span>
                <h2 className="text-2xl font-extrabold text-orange-400">{shipment.trackingNumber}</h2>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(shipment.status)}`}>
                {shipment.status ? shipment.status.replace("_", " ") : "UNKNOWN"}
              </span>
            </div>

            {/* Sender & Receiver Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-800">
                <span className="text-xs font-semibold text-gray-400 uppercase">Sender</span>
                <h4 className="font-semibold text-lg text-white mt-1">{shipment.senderName}</h4>
                <p className="text-sm text-gray-400">📞 {shipment.senderMobile}</p>
                <p className="text-xs text-gray-400 mt-2 bg-gray-900/60 p-2 rounded border border-gray-800">
                  📍 {shipment.senderAddress}
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-800">
                <span className="text-xs font-semibold text-gray-400 uppercase">Receiver</span>
                <h4 className="font-semibold text-lg text-white mt-1">{shipment.receiverName}</h4>
                <p className="text-sm text-gray-400">📞 {shipment.receiverMobile}</p>
                <p className="text-xs text-gray-400 mt-2 bg-gray-900/60 p-2 rounded border border-gray-800">
                  📍 {shipment.receiverAddress}
                </p>
              </div>
            </div>

            {/* Package Attributes */}
            <div className="flex flex-wrap items-center justify-between bg-gray-800/30 p-4 rounded-xl border border-gray-800 mb-6 text-sm">
              <div>
                <span className="text-gray-400">Weight: </span>
                <span className="font-semibold text-white">{shipment.weight} kg</span>
              </div>
              <div>
                <span className="text-gray-400">Package Type: </span>
                <span className="font-semibold text-orange-300">
                  {shipment.packageType?.length ? shipment.packageType.join(", ") : "Standard"}
                </span>
              </div>
            </div>

            {/* Tracking History Timeline */}
            <div>
              <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-4">Shipment Timeline</h3>
              {shipment.history && shipment.history.length > 0 ? (
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-orange-500/40">
                  {shipment.history.map((event, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-gray-900 group-first:ring-4 group-first:ring-orange-500/30"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="font-semibold text-white text-sm">
                          {event.status ? event.status.replace("_", " ") : ""}
                        </span>
                        <span className="text-xs text-gray-400">
                          {event.timestamp ? new Date(event.timestamp).toLocaleString() : ""}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">📍 {event.location}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">No tracking history recorded yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackModal;
