import { useState } from "react";
import Status from "./status";

function Track() {
  const [ordernumber, setordernumber] = useState();
  const [closed, setclosed] = useState(true);

  function submit(e) {
    e.preventDefault();
    setclosed(!closed);
  }

  return (
    <>
      {closed ? (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Track Your Order</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Order Number:
              </label>
              <input
                type="number"
                className="form-input border-2 border-gray-900 rounded-md"
                onChange={(e) => setordernumber(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={submit}
              >
                Track Order
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Status ordernumber={ordernumber} setclosed={setclosed} />
      )}
    </>
  );
}

export default Track;
