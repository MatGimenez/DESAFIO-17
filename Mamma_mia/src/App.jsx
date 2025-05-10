import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={!token ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/RegisterPage" element={!token ? <RegisterPage /> : <Navigate to="/" />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={token ? <Profile /> : <Navigate to="/LoginPage" />} />
          <Route path="/Logout" element={<HomePage />} />
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
