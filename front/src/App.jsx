import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header.jsx"
import Product from "./pages/Product.jsx"
import Cart from "./pages/Cart.jsx"
import Order from "./pages/Order.jsx"
import Verfy from "./pages/Verfiy.jsx"
import MyOrders from "./pages/MyOrders.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import SignUp from "./components/SignUp.jsx"
export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verfy />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
};
export default App;
