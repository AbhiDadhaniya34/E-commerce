import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Update({ id, setopen, setclosed }) {
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [description, setdescription] = useState();
  const [categoryid, setcategoryid] = useState();
  const [image, setimage] = useState();

  const images = (e) => {
    const filePath = e.target.value;
    const fileName = filePath.split("\\").pop();
    setimage(fileName);
  };

  useEffect(() => {
    axios.get(`http://localhost:1500/product/${id}`).then((response) => {
      const { name, price, description, categoryid, image } = response.data[0];
      setname(name);
      setprice(price);
      setdescription(description);
      setcategoryid(categoryid);
      setimage(image);
    });
  }, [id]);

  const submit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:1500/update/${id}`, {
      name,
      price,
      description,
      categoryid,
      image,
    });

    setclosed(true);
    setopen(true);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Update {name}</h2>
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name:
          </label>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
            defaultValue={name}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <select
            className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
            onChange={(e) => setcategoryid(e.target.value)}
            defaultValue={categoryid}
          >
            <option value="1">Phone</option>
            <option value="2">Laptop</option>
            <option value="2">Watche</option>
            <option value="2">Headphone</option>
            <option value="2">T.V</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="number"
            className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
            defaultValue={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
            defaultValue={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
            defaultValue={image}
            onChange={images}
          />
        </div>
        <div className="mt-6">
          <button
            onClick={submit}
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
