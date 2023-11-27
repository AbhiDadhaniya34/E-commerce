import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Prayag_Logo.png";
import axios from "axios";
import Track from "../componet/Track";
import AlertNotification from "../componet/Alerts";

function Cart({ closed, setclosed }) {
  const [data, setdata] = useState([]);
  const [open, setopen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:1500/cart").then((response) => {
      setdata(response.data);
    });
  }, []);

  function total() {
    const totals = data.reduce((acc, item) => acc + Number(item.price), 0);
    return totals;
  }

  function click(id) {
    axios.delete(`http://localhost:1500/delete/${id}`);
    setclosed(true);
    const datas = data.filter((items) => items.id !== id);
    setdata(datas);
  }

  return (
    <>
      <nav
        className="flex justify-around py-4 bg-white/80
    backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10"
      >
        <div className="flex items-center">
          <div className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">
              <img
                className="h-10 object-cover"
                src={logo}
                alt="Store Logo"
                onClick={() => navigate("/")}
              />
            </h3>
          </div>
        </div>
        <ul class="flex space-x-4">
          <li className="text-center">
            <a href="/" class="hover:underline text-2xl font-semibold">
              Home
            </a>
          </li>
          <li className="text-center">
            <a href="/Shop" class="hover:underline text-2xl font-semibold">
              Shop
            </a>
          </li>
          <li className="text-center">
            <a
              href="/Categories"
              class="hover:underline text-2xl font-semibold"
            >
              Categories
            </a>
          </li>
          <li className="text-center">
            <a href="/cart" class="hover:underline text-2xl font-semibold">
              Cart
            </a>
          </li>
        </ul>
      </nav>
      {closed && <AlertNotification setclosed={setclosed} />}
      <div className="pointer-events-auto w-screen mt-12">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {data.map((items) => (
                    <li className="flex py-6" key={items.id}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={require(`../image/${items.image}`)}
                          alt="Front"
                          className="h-full w-full object-scale-down object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <p>{items.name}</p>
                            </h3>
                            <p className="ml-4">₹{items.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty{items.qty}</p>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => click(items.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>₹{total()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            {open ? (
              <div className="mt-6">
                <button
                  onClick={() => setopen(!open)}
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  TrackOrder
                </button>
              </div>
            ) : (
              <Track />
            )}
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => navigate("/")}
                >
                  Continue Shopping
                  <span aria-hidden="true"> →</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
