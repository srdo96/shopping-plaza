import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
