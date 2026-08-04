import React, { useState } from "react";
import bgImage from "../../assets/images/bg.png";
import { trackShipment } from "../../api/shipmentApi";
import TrackModal from "./TrackModal";

function LandingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentData, setShipmentData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setLoading(true);
    setErrorMsg("");
    setShipmentData(null);

    try {
      const data = await trackShipment(trackingNumber);
      setShipmentData(data);
    } catch (err) {
      setErrorMsg(err?.message || "Shipment not found with tracking number: " + trackingNumber);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShipmentData(null);
    setErrorMsg("");
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-20">
        <div className="max-w-2xl text-white">
          <p className="text-orange-400 uppercase tracking-[0.3em] font-bold text-sm">
            FAST • RELIABLE • SECURE
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Swift Logistics
            <br />
            <span className="text-orange-400">Made Simple</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed drop-shadow-md">
            Book shipments, track parcels in real time, and manage deliveries
            through one secure and intelligent courier management platform.
          </p>

          {/* Track Parcel Input Box */}
          <form onSubmit={handleTrack} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter Tracking Number (e.g. CMS-123456)..."
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm shadow-inner"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all px-8 py-3.5 rounded-xl font-semibold text-white shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {loading ? "Searching..." : "Track Parcel 🚀"}
            </button>
          </form>
        </div>
      </div>

      {/* Track Result Modal */}
      <TrackModal
        shipment={shipmentData}
        error={errorMsg}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default LandingSection;