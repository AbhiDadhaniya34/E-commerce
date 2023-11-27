import axios from "axios";
import { useEffect, useState } from "react";
import Overview from "./Overview";

function Products({ products, setproducts,setclosed}) {
  const [open, setopen] = useState(true);
  const [data, setdata] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:1500/product").then((response) => {
      setproducts(response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clicked(id) {
    const data = products.filter((items) => items.id === id);
    setdata(data);
    setopen(!open);
  }

  return (
    <div className="bg-white">
      {open ? (
        <>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7"
                    onClick={() => clicked(product.id)}
                  >
                    <img
                      src={require(`../image/${product.image}`)}
                      alt="hy"
                      className="h-64 w-72 object-scale-down  object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-center text-sm text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1  text-center text-lg font-medium text-gray-900">
                    ₹{product.price}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Overview data={data} setopen={setopen} setcloseds={setclosed}/>
      )}
    </div>
  );
}

export default Products;
