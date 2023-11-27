import Display from "../componet/Orderdisplay";
import Sidebar from "../componet/Sidebar";
import AlertNotification from "../componet/Alerts";

function Home({ closed, setclosed }) {
  return (
    <>
      {closed && <AlertNotification setclosed={setclosed} />}
      <div className="grid grid-cols-[0.3fr,1fr]">
        <Sidebar />
        <Display setcloseds={setclosed} />
      </div>
    </>
  );
}

export default Home;
