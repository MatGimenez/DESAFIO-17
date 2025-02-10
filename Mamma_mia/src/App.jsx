import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Profile from "./components/Profile";
import CartProvider from "./context/CartContext";
import { useContext } from "react";
import { UserContext } from "./context/userContext";


function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <CartProvider>
        {/* <PizzasProvider > */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/Register" element={!token ? <Register /> : <Navigate to="/" />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={token ? <Profile /> : <Navigate to="/Login" />} />
          <Route path="/Logout" element={<Home />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/404" element={<NotFound />} />

          {/* <Login /> */}
          {/* <Register /> */}
          {/* <Home /> */}
          {/* <Pizza /> */}
          {/* <Cart /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </PizzasProvider> */}
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
