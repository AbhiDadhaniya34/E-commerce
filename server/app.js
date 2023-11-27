const exp = require("express");
const cors = require("cors");
require('dotenv').config();

const {
  category,
  product,
  categoryproduct,
  cart,
  remove,
  addcart,
  addorder,
  getorder,
  single,
  deleteproduct,
  addproduct,
  update,
  shiporder,
  track,
  updateorder,
  gatereview,
  takereview,
  Login,
  abc,
} = require("./query");

const port = process.env.PORT;
const app = exp();
app.use(cors());
app.use(exp.json());

app.get("/category", category);
app.get("/product", product);
app.get("/product/:id", single);
app.get("/category/:id", categoryproduct);
app.get("/Cart", cart);
app.delete("/delete/:id", remove);
app.post("/addcart", addcart);
app.post("/addorder", addorder);
app.get("/getorder", getorder);
app.delete("/delete/product/:id", deleteproduct);
app.post("/addproduct", addproduct);
app.put("/update/:id", update);
app.post("/shiporder", shiporder);
app.get("/shiporder/:id", track);
app.put("/updateorder/:id", updateorder);
app.post("/review", gatereview);
app.get("/takereview/:id", takereview);
app.post("/login",Login);
app.get('/protected',abc)
app.listen({port}, () => {
  console.log(`server start ${port}`);
});











