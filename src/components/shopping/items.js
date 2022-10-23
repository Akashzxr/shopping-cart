import React, { useEffect, useState } from "react";
import ProductCard from "./productcard";


const Items=()=>{

const[data,setdata] = useState([]);

const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/men\'s clothing')
        setdata(await response.json());
        console.log(data);
  }

  useEffect(()=>{
    fetchProducts();
  },[])

    return(
        <div className="items" >
            {data.map((product)=>{
                return(
                    <ProductCard key={product.id} info={product}/>
                )
            })}
        </div>
    )
}

export default Items;