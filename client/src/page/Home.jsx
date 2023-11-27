import { useState } from "react";
import Category from "../componet/Category";
import Head from "../componet/Head";
import Products from "../componet/Product";
import hero from "../image/hero.jpg";
import Footer from "../componet/Footer";
import AlertNotification from "../componet/Alerts";

function Home({ closed, setclosed }) {
  const [products, setproducts] = useState([]);

  return (
    <>
      <Head setproducts={setproducts} />
      {closed && <AlertNotification setclosed={setclosed} />}
      <img src={hero} alt="hot" />
      <Category setproducts={setproducts} />
      <Products
        products={products}
        setproducts={setproducts}
        setclosed={setclosed}
      />
      <Footer />
    </>
  );
}

export default Home;
