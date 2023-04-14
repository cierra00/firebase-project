import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <footer>
      <h2>Stay in Touch</h2>
        <FaFacebook  size={30}/>
        <FaInstagram  size={30}/>
        <FaYoutube  size={30}/>
      </footer>
    </div>
  )
}
