import Counter from "./components/Counter";
import Clock from "./components/Clock";
import RegisterForm from "./components/RegisterForm";
import RegisterSingleState from "./components/RegisterSingleState";
import Weather from "./components/Weather";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Testing from "./components/Testing";

const App = () => {
  return (
    <>
      {/* <Counter/> */}
      {/* <Clock/> */}
      {/* <RegisterForm/> */}
      {/* <Weather/> */}
     
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>

      {/* <Testing/> */}
    </>
  )
}

export default App;