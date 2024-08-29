import React, { useState } from "react";

const TrackyourId = () => {
  const [select, setSelect] = useState("Tracking_Id");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    console.log(select, inputValue);
  };

  return (
    <div>
      <img
        src="https://www.beyoung.in/api/catalog/new-bb/bb-section-DESKTOP.jpg"
        alt="Track your Order"
        className="w-screen"
      />
      <h1 className="text-center text-xl font-serif font-bold text-sky-500 bg-gray-300 p-2">
        Track your Order or Shipment
      </h1>

      <div className="trackPart ml-8 mr-8 p-4 flex flex-col bg-white shadow-md rounded-lg">
        <p className="mb-4">
          Enter your Tracking ID or Order ID to track the status of your order.
          You can find the Tracking ID and Order ID in the Email/SMS confirming
          that your order has been shipped.
        </p>
        <div className="mb-4">
          <label className="font-semibold">Search By: </label>
          <select
            className="ml-2 p-3 border rounded outline-none"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="Tracking_Id">Tracking ID</option>
            <option value="Order_Id">Order ID</option>
          </select>
        </div>
        <form onSubmit={handleFormSubmit} className="flex flex-col items-start">
          <label className="font-semibold mb-2">
            Enter {select === "Tracking_Id" ? "Tracking ID" : "Order ID"}:
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 border rounded mb-4 w-full outline-none"
            placeholder={`Enter your ${select === "Tracking_Id" ? "Tracking ID" : "Order ID"}`}
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700 "
          >
            Track
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackyourId;
