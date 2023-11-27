import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Shipped({ setclosed }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1500/getorder").then((response) => {
      const abd = response.data;
      const shipdata = abd.filter((items) => items.status === "shiped");
      setdata(shipdata);
    });
  }, []);

  return (
    <div>
      <div className="flex justify-end mr-4 mt-1">
        <button
          onClick={() => setclosed(true)}
          className="bg-red-800 text-white p-2 rounded-xl mr-4 mt-1"
        >
          unshiped
        </button>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Shipped Orders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((items) => (
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex justify-between mb-4">
                <div className="text-lg font-semibold">Order #{items.id}</div>
              </div>
              <div className="mb-4">
                <div className="bg-gray-100 p-4 rounded h-48">
                  <div className="font-semibold">Customer Information</div>
                  <div className="text-gray-600">
                    Customer Name:{items.customername}
                  </div>
                  <div className="text-gray-600">Email: {items.email}</div>
                  <div className="text-gray-600">Phone: {items.phone}</div>
                  <div className="text-gray-600">
                    Shipping Address: {items.address}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="bg-gray-100 p-4 rounded h-36">
                  <div className="font-semibold">Product Information</div>
                  <div className="text-gray-600">
                    Product Name: {items.productname}
                  </div>
                  <div className="text-gray-600">
                    Quantity: {items.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shipped;
