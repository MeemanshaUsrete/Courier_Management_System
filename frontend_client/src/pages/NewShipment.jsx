import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Package,
  Scale,
} from "lucide-react";
import bgImage from "../assets/images/bg.png";
import Navbar from "../components/layout/Navbar";

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

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setShipment({
      ...shipment,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    let updatedPackageType = [];

    if (checked) {
      updatedPackageType = [...shipment.packageType, value];
    } else {
      updatedPackageType = shipment.packageType.filter((item) => item !== value);
    }

    setShipment({
      ...shipment,
      packageType: updatedPackageType,
    });

    if (errors.packageType) {
      setErrors({ ...errors, packageType: "" });
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
    setErrors({});
    setSuccessMessage("");
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    // Sender validation
    if (!shipment.senderName.trim()) {
      newErrors.senderName = "Sender name is required";
    }

    const cleanSenderPhone = shipment.senderMobile.replace(/[\s-+()]/g, "");
    if (!shipment.senderMobile.trim()) {
      newErrors.senderMobile = "Sender phone number is required";
    } else if (!phoneRegex.test(cleanSenderPhone)) {
      newErrors.senderMobile = "Please enter a valid 10-digit phone number";
    }

    if (!shipment.senderAddress.trim()) {
      newErrors.senderAddress = "Sender address is required";
    }

    // Receiver validation
    if (!shipment.receiverName.trim()) {
      newErrors.receiverName = "Receiver name is required";
    }

    const cleanReceiverPhone = shipment.receiverMobile.replace(/[\s-+()]/g, "");
    if (!shipment.receiverMobile.trim()) {
      newErrors.receiverMobile = "Receiver phone number is required";
    } else if (!phoneRegex.test(cleanReceiverPhone)) {
      newErrors.receiverMobile = "Please enter a valid 10-digit phone number";
    }

    if (!shipment.receiverAddress.trim()) {
      newErrors.receiverAddress = "Receiver address is required";
    }

    // Package details validation
    if (!shipment.weight) {
      newErrors.weight = "Weight is required";
    } else if (parseFloat(shipment.weight) <= 0) {
      newErrors.weight = "Weight must be greater than 0 kg";
    }

    if (shipment.packageType.length === 0) {
      newErrors.packageType = "Please select at least one package type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    console.log("Submitting shipment:", shipment);
    setSuccessMessage("Shipment Booked Successfully!");
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center p-6 pt-24"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="w-full max-w-5xl bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

          {/* Heading */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Package className="text-orange-500" size={34} />
            <h1 className="text-4xl font-bold text-gray-800">
              Book New Shipment
            </h1>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 font-semibold rounded-xl text-center shadow">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>

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
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none ${
                        errors.senderName ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      }`}
                    />
                  </div>
                  {errors.senderName && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.senderName}</p>
                  )}
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
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none ${
                        errors.senderMobile ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      }`}
                    />
                  </div>
                  {errors.senderMobile && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.senderMobile}</p>
                  )}
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
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border resize-none outline-none ${
                      errors.senderAddress ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    }`}
                  />
                </div>
                {errors.senderAddress && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.senderAddress}</p>
                )}
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
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none ${
                        errors.receiverName ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      }`}
                    />
                  </div>
                  {errors.receiverName && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.receiverName}</p>
                  )}
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
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none ${
                        errors.receiverMobile ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      }`}
                    />
                  </div>
                  {errors.receiverMobile && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.receiverMobile}</p>
                  )}
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
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border resize-none outline-none ${
                      errors.receiverAddress ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    }`}
                  />
                </div>
                {errors.receiverAddress && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.receiverAddress}</p>
                )}
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
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none ${
                      errors.weight ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    }`}
                  />
                </div>
                {errors.weight && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.weight}</p>
                )}
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
                    <span className="font-medium">Fragile</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-blue-50 cursor-pointer">
                    <input
                      type="checkbox"
                      value="Liquid"
                      checked={shipment.packageType.includes("Liquid")}
                      onChange={handleCheckbox}
                      className="w-5 h-5 accent-blue-500"
                    />
                    <span className="font-medium">Liquid</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-yellow-50 cursor-pointer">
                    <input
                      type="checkbox"
                      value="Valuable"
                      checked={shipment.packageType.includes("Valuable")}
                      onChange={handleCheckbox}
                      className="w-5 h-5 accent-yellow-500"
                    />
                    <span className="font-medium">Valuable</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-green-50 cursor-pointer">
                    <input
                      type="checkbox"
                      value="Temperature Controlled"
                      checked={shipment.packageType.includes("Temperature Controlled")}
                      onChange={handleCheckbox}
                      className="w-5 h-5 accent-green-600"
                    />
                    <span className="font-medium">Temperature Controlled</span>
                  </label>
                </div>
                {errors.packageType && (
                  <p className="text-red-500 text-xs mt-2 font-medium">{errors.packageType}</p>
                )}
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
    </>
  );
};

export default NewShipment;