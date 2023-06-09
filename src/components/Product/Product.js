import React,{useState, useEffect} from "react";
import Card from '../shared/Card';
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import ProductData from "./ProductData";




export default function Product({
  id,
  name,
  description,
  price,
  imageSRC,
  imgAlt,
  inCart,
  
  
}) {

  const [addCart, setAddCart] = useState(ProductData);

  const location = useLocation();
  
  function handleAdd(e) {
    e.preventDefault()
    
   const filteredData = ProductData.filter(product=> product.id == e.target.id);
    filteredData.map((product) => {
      console.log(product.inCart)
      setAddCart(product.inCart === false ? product.inCart = true: false)
      
      console.log(product.inCart)
    })
   
    
   }

   function handleDel(e) {
    e.preventDefault()
    
   const filteredData = ProductData.filter(product=> product.id == e.target.id);
    filteredData.map((product) => {
      console.log(product.inCart)
      setAddCart(product.data.inCart === true ? product.data.inCart = false: true)
       
      
      console.log(product.inCart)
    })
   
    
   }
    
  

  return (
   <>
   
   <Card>
   <NavLink to="/single">
      <div className="product">
        <img src={imageSRC} alt={imgAlt} />
      </div>
{id}
      <div
        >
        <h3>{name}</h3>
      </div>
      <div
        className="text-display">
        {description}
      </div>
      <div
        className="text-display">
        ${price}.00 USD
      </div>
      {inCart}
      </NavLink>
      {location.pathname=== "/cart" ? <form onSubmit={handleDel} id={id}><button type="submit" className="btn" 
      onSubmit={handleAdd}>Delete Item</button>
      </form> :<form onSubmit={handleAdd} id={id}><button type="submit" className="btn" 
      onSubmit={handleAdd}>Add to Cart </button></form> } 
      
      
       
       
    </Card>
    
    </>
  );
}
