import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Orderform from "../componet/Orderform";
import Categories from "./Categories";
import Shop from "./Shop";
import { useState } from "react";
// import Loging from "../componet/Loging";
function App() {
  const[closed,setclosed]=useState(false);
  // const[open,setopen]=useState(true);
 
  return (<>
  {/* {open ? <Loging setopen={setopen}/>  */}
    <BrowserRouter>
      <Routes>
        <Route index element={<Home closed={closed} setclosed={setclosed}/>} />
        <Route path="Cart" element={<Cart closed={closed} setclosed={setclosed} />} />
        <Route path="order/:id" element={<Orderform setclosed={setclosed} />} />
        <Route path="Categories" element={<Categories closed={closed} setclosed={setclosed} />} />
        <Route path="Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
