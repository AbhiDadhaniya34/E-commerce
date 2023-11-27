import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./Product";
import Profile from "./Profile";
import Addproduct from "./Addproduct";
import { useState } from "react";

function App() {
  const [closed, setclosed] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home setclosed={setclosed} closed={closed} />} />
        <Route path="Product" element={<Product setclosed={setclosed} closed={closed} />}/>
        <Route path="Profile" element={<Profile />} />
        <Route path="addproduct" element={<Addproduct setclosed={setclosed} closed={closed} />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
