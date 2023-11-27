import { useState } from "react";
import axios from "axios";

function Shiporder({ setopen, id, setclosed }) {
  const [shippingmethod, setshippingmethod] = useState("Standard Shipping");
  const [trackingnumber, settrackingnumber] = useState();
  const [deliverytime, setdeliverytime] = useState();

  function submit(e) {
    e.preventDefault();
    let ordernumber = id;
    axios.post("http://localhost:1500/shiporder", {
      ordernumber,
      shippingmethod,
      trackingnumber,
      deliverytime,
    });
    axios.put(`http://localhost:1500/updateorder/${id}`, {
      status: "shiped",
    });
    setclosed(true);
    setopen(true);
  }
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4 text-center">Ship Order</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Order Number
            </label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter Order Number"
              defaultValue={id}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Shipping Method
            </label>
            <select
              onChange={(e) => setshippingmethod(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            >
              <option value="standard Shipping">Standard Shipping</option>
              <option value="express Shipping">Express Shipping</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tracking Number
            </label>
            <input
              type="text"
              onChange={(e) => settrackingnumber(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter Tracking Number"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Delivery Time
            </label>
            <input
              type="text"
              onChange={(e) => setdeliverytime(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={submit}
            >
              Ship Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Shiporder;
