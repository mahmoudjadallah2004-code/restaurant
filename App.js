import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {

const [cart,setCart]=useState([]);

const addToCart=(item)=>{
setCart([...cart,item]);
};

return (

<BrowserRouter>

<Navbar />

<Routes>
<Route path="/" element={<Home />} />

<Route
path="/menu"
element={<Menu addToCart={addToCart} />}
/>

<Route
path="/order"
element={<Order cart={cart} />}
/>

<Route path="/contact" element={<Contact />} />

</Routes>

<Footer />

</BrowserRouter>

);

}

export default App;