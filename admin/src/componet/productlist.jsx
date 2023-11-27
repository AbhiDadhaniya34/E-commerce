import { useEffect, useState } from "react";
import axios from "axios";
import Update from "./Upadteproduct";

function Allproduct({ setclosed }) {
  const [data, setdata] = useState([]);
  const [open, setopen] = useState(true);
  const [id, setid] = useState();

  useEffect(() => {
    axios.get("http://localhost:1500/product").then((response) => {
      setdata(response.data);
    });
  }, []);

  function remove(id) {
    axios.delete(`http://localhost:1500/delete/product/${id}`);
    setclosed(true);
    const filter = data.filter((items) => items.id !== id);
    setdata(filter);
  }

  function edit(ids) {
    setid(ids);
    setopen(!open);
  }

  return (
    <div>
      {open ? (
        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            All Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <div className="bg-white p-4 rounded shadow-md">
                <img
                  src={require(`../image/${item.image}`)}
                  alt="Product"
                  className="w-full h-48 object-scale-down mb-4"
                />
                <div className="font-semibold text-lg">{item.name}</div>
                <div className="text-gray-600 w-52 line-clamp-3">
                  Description:{item.description}
                </div>
                <div className="text-gray-600">Price: ₹{item.price}</div>
                <div className="mt-4">
                  <button
                    onClick={() => edit(item.id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(item.id)}
                    className="ml-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Update id={id} setopen={setopen} setclosed={setclosed} />
      )}
    </div>
  );
}

export default Allproduct;
