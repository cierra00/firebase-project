import React from "react";
import Card from '../shared/Card';
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';




export default function Product({
  id,
  name,
  description,
  price,
  imageSRC,
  imgAlt,
  inCart,
  
  
}) {

  const location = useLocation();

  return (
   <>
   
   <Card>
   <NavLink to="/single">
      <div className="product">
        <img src={imageSRC} alt={imgAlt} />
      </div>

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
      <button   className="btn">{location.pathname=== "/cart" ? "Remove From Cart" : "Add To Cart" }</button>
      
    </Card>
    
    </>
  );
}
