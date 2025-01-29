import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Profile from "./components/Profile";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Pizza/p001" element={<Pizza />} />
          <Route path="/404" element={<NotFound />} />

          {/* <Login /> */}
          {/* <Register /> */}
          {/* <Home /> */}
          {/* <Pizza /> */}
          {/* <Cart /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
