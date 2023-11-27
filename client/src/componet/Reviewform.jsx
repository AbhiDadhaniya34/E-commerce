import axios from "axios";
import { useState } from "react";
import ReviewDisplay from "./Review";

function Reviewform({ names, image, id, setreviews }) {
  const [name, setname] = useState();
  const [rating, setrating] = useState(1);
  const [review, setreview] = useState();
  const [closed, setclosed] = useState(true);

  function submit(e) {
    let productid = id;
    e.preventDefault();
    axios.post("http://localhost:1500/review", {
      rating,
      review,
      productid,
      name,
    });
    axios.get(`http://localhost:1500/takereview/${id}`).then((response) => {
      setreviews(response.data);
    });
    setclosed(!closed);
    // alert("You Have add Your Review");
  }

  return (
    <>
      {closed ? (
        <div className="bg-white p-2 rounded-lg shadow-lg h-96 overflow-y-auto scrollbar scrollbar-thumb-indigo-500 scrollbar-track-gray-300">
          <h1 className="text-2xl font-semibold mb-4 text-center">{names}</h1>
          <img
            src={require(`../image/${image}`)}
            alt="Product"
            className="mb-4 h-48 w-48 justify-center mx-auto"
          />
          <label className="block text-sm font-medium text-gray-700">
            Customer Name:
          </label>
          <input
            type="text"
            required
            onChange={(e) => setname(e.target.value)}
            className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
          />
          <div className="mb-2">
            <label>Ratings</label>
            <select
              onChange={(e) => setrating(e.target.value)}
              className="w-full mt-1 py-2 px-3 border border-gray-900 rounded-md"
            >
              <option value={1}>★</option>
              <option value={2}>★★</option>
              <option value={3}>★★★</option>
              <option value={4}>★★★★</option>
              <option value={5}>★★★★★</option>
            </select>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Write a Review</h2>
            <textarea
              className="w-full rounded-md p-2 border border-gray-300"
              rows={4}
              onChange={(e) => setreview(e.target.value)}
              placeholder="Share your thoughts..."
              defaultValue={""}
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            type="submit"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      ) : (
        <ReviewDisplay id={id} names={name} image={image} />
      )}
    </>
  );
}

export default Reviewform;
