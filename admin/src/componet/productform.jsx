import { useState } from "react";
import axios from "axios";

function Productform({ setclosed }) {
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [description, setdescription] = useState();
  const [categoryid, setcategoryid] = useState(1);
  const [image, setimage] = useState();

  const images = (e) => {
    const filePath = e.target.value;
    const fileName = filePath.split("\\").pop();
    setimage(fileName);
  };

  function submit(e) {
    e.preventDefault();
    axios.post("http://localhost:1500/addproduct", {
      name,
      price,
      description,
      categoryid,
      image,
    });

    setclosed(true);
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Product</h2>
      <div className="bg-white p-6 rounded shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Name:
            </label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <select
              onChange={(e) => setcategoryid(e.target.value)}
              value={categoryid}
              className="w-full mt-1 py-2 px-3 border border-gray-900 rounded-md"
            >
              <option value="1">Phone</option>
              <option value="2">Laptop</option>
              <option value="3">Watche</option>
              <option value="4">Headphones</option>
              <option value="5">T.V</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="number"
              onChange={(e) => setprice(e.target.value)}
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              onChange={(e) => setdescription(e.target.value)}
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image:
            </label>
            <input
              type="file"
              onChange={images}
              accept="image/*"
              className="w-full mt-1"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              onClick={submit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Productform;
