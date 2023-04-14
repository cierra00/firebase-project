import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import CartHeader from '../components/shared/CartHeader';
import {UserAuth} from "../components/context/AuthContext"
import SearchHeader from '../components/shared/SearchHeader';

export default function Header() {
  const {logout} = UserAuth();
  const navigate= useNavigate();

  const handelLogout = async () => {
    try {
      await logout();
      navigate("/signIn");
      alert("You are logged out");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <header className="header">
      <h1>Welcome to My Online Shop</h1>
       
    </header>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink onClick={handelLogout}>Logout</NavLink></li>
        
      </ul>
      
      <span>
      <SearchHeader />
      <CartHeader />
      </span>
    </nav>
   
    </>
  )
}
