import React from 'react';
import {NavLink} from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import CartHeader from './CartHeader';
export default function SearchHeader() {
  return (
    <nav>
      <NavLink to="/search"><BsSearch /></NavLink>
      <CartHeader />
    </nav>
  )
}


