import { useEffect, useState } from "react";
import axios from "axios";
function Category({ setproducts }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1500/category").then((response) => {
      setdata(response.data);
    });
  }, []);

  function click(id) {
    axios.get(`http://localhost:1500/category/${id}`).then((response) => {
      setproducts(response.data);
    });
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data.map((item) => (
        <div
          className="bg-white rounded-lg shadow-md p-4"
          key={item.id}
          onClick={() => click(item.id)}
        >
          <img
            src={require(`../image/${item.image}`)}
            className="w-full h-52 object-scale-cover"
            alt="img"
          />
          <p className="text-center mt-4">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Category;
