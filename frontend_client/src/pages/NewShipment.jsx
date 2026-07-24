import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Package,
  Scale,
} from "lucide-react";
import bgImage from "../assets/images/bg.png";

const NewShipment = () => {
  const [shipment, setShipment] = useState({
    senderName: "",
    senderMobile: "",
    senderAddress: "",

    receiverName: "",
    receiverMobile: "",
    receiverAddress: "",

    weight: "",

    packageType: [],
  });

  const handleChange = (e) => {
    setShipment({
      ...shipment,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setShipment({
        ...shipment,
        packageType: [...shipment.packageType, value],
      });
    } else {
      setShipment({
        ...shipment,
        packageType: shipment.packageType.filter(
          (item) => item !== value
        ),
      });
    }
  };

  const handleReset = () => {
    setShipment({
      senderName: "",
      senderMobile: "",
      senderAddress: "",

      receiverName: "",
      receiverMobile: "",
      receiverAddress: "",

      weight: "",

      packageType: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(shipment);

    alert("Shipment Booked Successfully!");
  };

  return (
     <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center p-6"
      style={{
        backgroundImage:
          `url(${bgImage})`,
      }}
     >
      <div className="w-full max-w-5xl bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

        {/* Heading */}

        <div className="flex items-center justify-center gap-3 mb-8">

          <Package className="text-orange-500" size={34} />

          <h1 className="text-4xl font-bold text-gray-800">
            Book New Shipment
          </h1>

        </div>

        <form onSubmit={handleSubmit}>

          {/* ================= Sender Details ================= */}

          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

            <h2 className="text-2xl font-semibold text-orange-500 mb-5">
              Sender Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Sender Name */}

              <div>

                <label className="font-medium text-gray-700">
                  Sender Name
                </label>

                <div className="relative mt-2">

                  <User
                    size={18}
                    className="absolute left-3 top-4 text-gray-500"
                  />

                  <input
                    type="text"
                    name="senderName"
                    value={shipment.senderName}
                    onChange={handleChange}
                    placeholder="Enter sender name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />

                </div>

              </div>

              {/* Sender Mobile */}

              <div>

                <label className="font-medium text-gray-700">
                  Mobile Number
                </label>

                <div className="relative mt-2">

                  <Phone
                    size={18}
                    className="absolute left-3 top-4 text-gray-500"
                  />

                  <input
                    type="tel"
                    name="senderMobile"
                    value={shipment.senderMobile}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />

                </div>

              </div>

            </div>

            {/* Sender Address */}

            <div className="mt-5">

              <label className="font-medium text-gray-700">
                Address
              </label>

              <div className="relative mt-2">

                <MapPin
                  size={18}
                  className="absolute left-3 top-4 text-gray-500"
                />

                <textarea
                  rows="3"
                  name="senderAddress"
                  value={shipment.senderAddress}
                  onChange={handleChange}
                  placeholder="Enter sender address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />

              </div>

            </div>

          </div>

          {/* ================= Receiver Details ================= */}

          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

            <h2 className="text-2xl font-semibold text-blue-600 mb-5">
              Receiver Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Receiver Name */}

              <div>

                <label className="font-medium text-gray-700">
                  Receiver Name
                </label>

                <div className="relative mt-2">

                  <User
                    size={18}
                    className="absolute left-3 top-4 text-gray-500"
                  />

                  <input
                    type="text"
                    name="receiverName"
                    value={shipment.receiverName}
                    onChange={handleChange}
                    placeholder="Enter receiver name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />

                </div>

              </div>

              {/* Receiver Mobile */}

              <div>

                <label className="font-medium text-gray-700">
                  Mobile Number
                </label>

                <div className="relative mt-2">

                  <Phone
                    size={18}
                    className="absolute left-3 top-4 text-gray-500"
                  />

                  <input
                    type="tel"
                    name="receiverMobile"
                    value={shipment.receiverMobile}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />

                </div>

              </div>

            </div>

            {/* Receiver Address */}

            <div className="mt-5">

              <label className="font-medium text-gray-700">
                Address
              </label>

              <div className="relative mt-2">

                <MapPin
                  size={18}
                  className="absolute left-3 top-4 text-gray-500"
                />

                <textarea
                  rows="3"
                  name="receiverAddress"
                  value={shipment.receiverAddress}
                  onChange={handleChange}
                  placeholder="Enter receiver address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />

              </div>

            </div>

          </div>
                    {/* ================= Package Details ================= */}

          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

            <h2 className="text-2xl font-semibold text-green-600 mb-5">
              Package Details
            </h2>

            {/* Weight */}

            <div className="mb-6">

              <label className="font-medium text-gray-700">
                Package Weight (Kg)
              </label>

              <div className="relative mt-2">

                <Scale
                  size={18}
                  className="absolute left-3 top-4 text-gray-500"
                />

                <input
                  type="number"
                  step="0.1"
                  min="0"
                  name="weight"
                  value={shipment.weight}
                  onChange={handleChange}
                  placeholder="Enter package weight"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                />

              </div>

            </div>

            {/* Package Type */}

            <div>

              <label className="font-medium text-gray-700 block mb-4">
                Package Type
              </label>

              <div className="grid md:grid-cols-2 gap-4">

                <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-orange-50 cursor-pointer">

                  <input
                    type="checkbox"
                    value="Fragile"
                    checked={shipment.packageType.includes("Fragile")}
                    onChange={handleCheckbox}
                    className="w-5 h-5 accent-orange-500"
                  />

                  <span className="font-medium">
                    Fragile
                  </span>

                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-blue-50 cursor-pointer">

                  <input
                    type="checkbox"
                    value="Liquid"
                    checked={shipment.packageType.includes("Liquid")}
                    onChange={handleCheckbox}
                    className="w-5 h-5 accent-blue-500"
                  />

                  <span className="font-medium">
                    Liquid
                  </span>

                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-yellow-50 cursor-pointer">

                  <input
                    type="checkbox"
                    value="Valuable"
                    checked={shipment.packageType.includes("Valuable")}
                    onChange={handleCheckbox}
                    className="w-5 h-5 accent-yellow-500"
                  />

                  <span className="font-medium">
                    Valuable
                  </span>

                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-green-50 cursor-pointer">

                  <input
                    type="checkbox"
                    value="Temperature Controlled"
                    checked={shipment.packageType.includes(
                      "Temperature Controlled"
                    )}
                    onChange={handleCheckbox}
                    className="w-5 h-5 accent-green-600"
                  />

                  <span className="font-medium">
                    Temperature Controlled
                  </span>

                </label>

              </div>

            </div>

          </div>

          {/* ================= Buttons ================= */}

          <div className="flex flex-col md:flex-row gap-4 justify-end">

            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold transition duration-300"
            >
              Reset
            </button>

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold shadow-lg transition duration-300"
            >
              Book Shipment
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default NewShipment;