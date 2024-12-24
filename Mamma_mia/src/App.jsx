import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'

function App() {


  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Register />
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
