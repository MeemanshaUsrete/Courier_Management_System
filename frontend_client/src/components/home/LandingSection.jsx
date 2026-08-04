import bgImage from "../../assets/images/bg.png";

function LandingSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10">...</div>

      <div className="w-1/2 text-white mt-3 ml-2">
        <p className="text-orange-300 uppercase tracking-[0.3em] font-semibold">
          FAST • RELIABLE • SECURE
        </p>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight drop-shadow-lg">
          Swift Logistics
          <br />
          Made Simple
        </h1>
        <p className="mt-6 text-lg text-white leading-8 max-w-xl drop-shadow-lg">
          Book shipments, track parcels in real time, and manage deliveries
          through one secure and intelligent courier management platform.
        </p>
        <button className="mt-10 bg-orange-500 hover:bg-orange-600 drop-shadow-lg transition px-7 py-3 rounded-xl font-semibold">
          Track Parcel
        </button>

      </div>
    </section>
  );
}

export default LandingSection;