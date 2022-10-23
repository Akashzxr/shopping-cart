import React, { useEffect, useState } from "react";
import ProductCard from "./productcard";
import fetchProducts from "./getproducts";

const Items=()=>{

const[data,setdata] = useState([]);
const[filter,setfilter]=useState(data);

const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/men\'s clothing')
        setdata(await response.clone().json());
        setfilter(await response.json());
        console.log(filter);
  }


  useEffect(()=>{
    fetchProducts();
  },[])

    return(
        <div className="items" >
            {filter.map((product)=>{
                return(
                    <ProductCard key={product.id} info={product}/>
                )
                
            })}
        </div>
    )
}

export default Items;