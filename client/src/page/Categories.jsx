import { useState } from "react";
import Category from "../componet/Category";
import Head from "../componet/Head";
import Products from "../componet/Product";
import Footer from "../componet/Footer";
import AlertNotification from "../componet/Alerts";

function Categories({ closed, setclosed }) {
  const [products, setproducts] = useState([]);

  return (
    <>
      <Head setproducts={setproducts} />
      {closed && <AlertNotification setclosed={setclosed} />}
      <div className="mt-16">
        <Category setproducts={setproducts} />
        <Products
          products={products}
          setproducts={setproducts}
          setclosed={setclosed}
        />
        <Footer />
      </div>
    </>
  );
}

export default Categories;
