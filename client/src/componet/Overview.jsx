import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewDisplay from "./Review";

function Overview({ data, setopen, setcloseds }) {
  const navigate = useNavigate();
  const [closed, setclosed] = useState(true);
  const [image, setimage] = useState();
  const [name, setname] = useState();
  const [id, setid] = useState();

  function addcart() {
    const { name, image, price } = data[0];
    const qty = 1;

    axios.post("http://localhost:1500/addcart", {
      name,
      image,
      price,
      qty,
    });
    setcloseds(true);
    setopen(true);
  }

  function addorder(id) {
    navigate(`/order/${id}`);
  }

  function getdata(names, images, ids) {
    setname(names);
    setimage(images);
    setid(ids);
    setclosed(!closed);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-end">
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setopen(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {closed ? (
            <>
              {data.map((item) => (
                <div key={item.id}>
                  <div className="mt-4">
                    <img
                      src={require(`../image/${item.image}`)}
                      alt="Product"
                      className="w-full h-64 object-scale-down rounded-lg shadow-md transform transition-transform hover:scale-110"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-semibold text-blue-600">
                      ₹{item.price}
                    </span>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      onClick={() => addorder(item.id)}
                    >
                      Order
                    </button>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      onClick={addcart}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      onClick={() => getdata(item.name, item.image, item.id)}
                    >
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <ReviewDisplay name={name} image={image} id={id} />
          )}
        </div>
      </div>
      :
    </>
  );
}

export default Overview;
