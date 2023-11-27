import { useEffect, useState } from "react";
import Reviewform from "./Reviewform";
import axios from "axios";

function ReviewDisplay({ name, image, id }) {
  const [opens, setopens] = useState(true);
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1500/takereview/${id}`).then((response) => {
      setreviews(response.data);
    });
  }, [id]);

  return (
    <>
      {opens ? (
        <div className="p-4 h-96 overflow-y-auto scrollbar scrollbar-thumb-indigo-500 scrollbar-track-gray-300">
          <button
            onClick={() => setopens(!opens)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Your Reviwe
          </button>
          <h1 className="text-2xl font-semibold mb-4">Product Reviews</h1>
          <div className="space-y-4 ">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl text-yellow-400">
                    {Array.from({ length: review.rating }, (index) => (
                      <span key={index}>★</span>
                    ))}
                  </span>
                  <span className="text-gray-600">{review.name} </span>
                </div>
                <p className="text-gray-800">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Reviewform
          names={name}
          image={image}
          id={id}
          setreviews={setreviews}
        />
      )}
    </>
  );
}

export default ReviewDisplay;
