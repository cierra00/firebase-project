import React from 'react';
import {NavLink} from 'react-router-dom';
import { BsCartFill } from "react-icons/bs";

export default function CartHeader() {
  return (
    <div>
      <NavLink to="/cart"><BsCartFill />Cart</NavLink>
    </div>
  )
}
