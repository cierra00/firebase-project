import React from 'react';
import {NavLink} from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
export default function SearchHeader() {
  return (
    <div>
      <NavLink to="/search"><BsSearch /></NavLink>
    </div>
  )
}


