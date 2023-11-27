import { useState } from "react";
import logo from "../Prayag_Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Head({ setproducts }) {
  const [search, setsearch] = useState();

  const navigate = useNavigate();

  function clicked() {
    if (!search) {
      axios.get("http://localhost:1500/product").then((response) => {
        setproducts(response.data);
      });
    }

    axios.get("http://localhost:1500/product").then((response) => {
      let abc = response.data;
      const filtered = abc.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setproducts(filtered);
      setsearch("");
    });
  }

  return (
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
      <div className="relative">
        <input
          type="text"
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search"
          value={search}
          className="border-2 border-gray-700 bg-gray-900 text-white px-7 py-1 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          className="absolute right-0 top-1.5 mt-1 mr-2.5"
          onClick={clicked}
        >
          <svg
            className="h-4 w-4 text-gray-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 0a9 9 0 0 1 7.154 14.595l5.375 5.373-1.415 1.415-5.373-5.375A9 9 0 1 1 9 0zm0 2a7 7 0 1 0 0 14A7 7 0 0 0 9 2z" />
          </svg>
        </button>
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
          <a href="/Categories" class="hover:underline text-2xl font-semibold">
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
  );
}

export default Head;
