import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import Products from "./components/shopping/products";
import Heading from "./components/Heading";

const RouteSwitch=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/heading" element={<Heading/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;