import { BrowserRouter,Route,Routes } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import App from "./App";
import Home from "./components/home/Home";
import Products from "./components/shopping/products";
import Heading from "./components/Heading";
import Cart from "./components/cart/cart";

const RouteSwitch=()=>{
    return(
        <HashRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/heading" element={<Heading/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;