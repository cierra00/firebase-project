import React from 'react';
import {NavLink} from 'react-router-dom';
import { BsCartFill } from "react-icons/bs";
import ProductData from "../Product/ProductData";

export default function CartHeader() {
  const filteredData = ProductData.filter(product=> product.inCart === true);
  return (
    <nav>
      <NavLink to="/cart"><BsCartFill />Cart</NavLink>
      {filteredData.length}
    </nav>
  )
}
