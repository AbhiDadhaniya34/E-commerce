import { useEffect, useState } from "react";
import axios from "axios";
function Status({ ordernumber, setclosed }) {
  const [data, setdata] = useState([]);
  const [open, setopen] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:1500/shiporder/${ordernumber}`)
      .then((response) => {
        setdata(response.data);
        if (response.data.length === 0) {
          setopen(!open);
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Order Status</h1>
      {open ? (
        <div className="bg-white p-6 rounded shadow-md">
          {data.map((item) => (
            <>
              <div className="mb-4" key={item.id}>
                <h2 className="text-xl font-semibold">
                  Order Number: #{item.ordernumber}
                </h2>
                <p className="mt-2 text-gray-700">
                  Status:{" "}
                  <span className="font-semibold text-blue-500">Shipped</span>
                </p>
                <p className="mt-2 text-gray-700">
                  shippingmethod:{" "}
                  <span className="font-semibold text-blue-500">
                    {item.shippingmethod}
                  </span>
                </p>
                <p className="mt-2 text-gray-700">
                  Estimated Delivery Date: {item.deliverytime}
                </p>
              </div>
              <button
                onClick={() => setclosed(true)}
                class="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Track Another Order
              </button>
            </>
          ))}
        </div>
      ) : (
        <div class="bg-white p-8 rounded shadow-md text-center">
          <h1 class="text-3xl font-bold mb-4">Order Not Shipped Yet</h1>
          <p class="text-gray-600 mb-4">
            Your order is currently being processed and has not been shipped
            yet.
          </p>
          <div class="mt-4">
            <button
              onClick={() => setclosed(true)}
              class="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Track Another Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Status;
