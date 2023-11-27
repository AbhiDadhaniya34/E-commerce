import AlertNotification from "../componet/Alerts";
import Sidebar from "../componet/Sidebar";
import Allproduct from "../componet/productlist";

function Product({ setclosed, closed }) {
  return (
    <>
      {closed && <AlertNotification setclosed={setclosed} />}
      <div className="grid grid-cols-[0.3fr,1fr]">
        <Sidebar />
        <Allproduct setclosed={setclosed} />
      </div>
    </>
  );
}

export default Product;
