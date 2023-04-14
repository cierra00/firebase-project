import React from "react";
import Card from '../shared/Card';
import { NavLink } from "react-router-dom";
import Product from '../Product/Product';




export default function ProductCard({
  id,
  name,
  description,
  price,
  imageSRC,
  imgAlt,
  inCart
  
}) {


  return (
   <>
   <NavLink to ='/single/${id}'>
   <Card>
    <Product />
    </Card>
    </NavLink>
    </>
  );
}
