import AlertNotification from "../componet/Alerts";
import Sidebar from "../componet/Sidebar";
import Productform from "../componet/productform";

function Addproduct({ setclosed, closed }) {
  return (
    <>
      {closed && <AlertNotification setclosed={setclosed} />}
      <div className="grid grid-cols-[0.3fr,1fr]">
        <Sidebar />
        <Productform setclosed={setclosed} />
      </div>
    </>
  );
}

export default Addproduct;
