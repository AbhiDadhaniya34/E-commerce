import { useEffect, useState } from "react";
import axios from "axios";
import Shiporder from "./Shiporder";
import Shipped from "./Shipped";

function Display({ setcloseds }) {
  const [data, setdata] = useState([]);
  const [open, setopen] = useState(true);
  const [id, setid] = useState();
  const [closed, setclosed] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:1500/getorder").then((response) => {
      const abd = response.data;
      const unshipdata = abd.filter((items) => items.status === "unshiped");
      setdata(unshipdata);
    });
  }, []);

  function submit(id) {
    setid(id);
    setopen(!open);
  }

  return (
    <div>
      {closed ? (
        <>
          <div className="flex justify-end mr-4 mt-1">
            <button
              onClick={() => setclosed(!closed)}
              className="bg-green-600 text-white p-2 rounded-xl"
            >
              shipped
            </button>
          </div>
          {open ? (
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Unshipped Orders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((items) => (
                  <div className="bg-white p-6 rounded shadow-md">
                    <div className="flex justify-between mb-4">
                      <div className="text-lg font-semibold">
                        Order #{items.id}
                      </div>
                      {/* <div className="text-gray-600">Placed on October 30, 2023</div> */}
                    </div>
                    <div className="mb-4">
                      <div className="bg-gray-100 p-4 rounded h-48">
                        <div className="font-semibold">
                          Customer Information
                        </div>
                        <div className="text-gray-600">
                          Customer Name:{items.customername}
                        </div>
                        <div className="text-gray-600">
                          Email: {items.email}
                        </div>
                        <div className="text-gray-600">
                          Phone: {items.phone}
                        </div>
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
                    <div className="flex justify-between">
                      <div>
                        <div className="font-semibold">Order Total</div>
                        <div className="text-xl font-semibold text-blue-600">
                          ₹{items.price}
                        </div>
                      </div>
                      <button
                        onClick={() => submit(items.id)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Ship Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Shiporder setopen={setopen} id={id} setclosed={setcloseds} />
          )}
        </>
      ) : (
        <Shipped setclosed={setclosed} />
      )}
    </div>
  );
}

export default Display;
