import { useEffect, useState } from "react";
import Head from "./Head";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Orderform({setclosed}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useState();
  const [customername, setcustomername] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [quantity, setquantity] = useState();

  useEffect(() => {
    axios.get(`http://localhost:1500/product/${id}`).then((response) => {
      setdata(response.data);
    });
  }, [id]);

  function submit(e) {
    e.preventDefault();
    const { name, price } = data[0];
    let productname = name;
    let status = "unshiped";
    if (
      customername == null &&
      email == null &&
      phone == null &&
      address == null &&
      quantity == null
    ) {
      return;
    }
    axios.post("http://localhost:1500/addorder", {
      customername,
      email,
      phone,
      address,
      productname,
      quantity,
      price,
      status,
    });
    setclosed(true);
    navigate("/");
  }

  return (
    <>
      <Head />
      <div className="container mx-auto p-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Customer Order Form</h2>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Customer Name:
              </label>
              <input
                type="text"
                required
                onChange={(e) => setcustomername(e.target.value)}
                className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                required
                onChange={(e) => setemail(e.target.value)}
                className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone:
              </label>
              <input
                required
                onChange={(e) => setphone(e.target.value)}
                className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Shipping Address:
              </label>
              <textarea
                required
                onChange={(e) => setaddress(e.target.value)}
                className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
                defaultValue={""}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Quantity:
              </label>
              <input
                required
                onChange={(e) => setquantity(e.target.value)}
                className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={submit}
            >
              Place Order
            </button>
            <button
              type="reset"
              className="ml-2 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Orderform;
