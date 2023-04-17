import { useEffect, useState } from "react";
import Products from "../components/Product/Products";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function HomePage() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState({});

  useEffect (()=>{
   getProducts();
  },[])

  function getProducts() {
    const productsCollectionRef = collection(db,'productDB')
    getDocs(productsCollectionRef)
    .then(response=>{
      const prods = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
      setProductList(prods)
    }).catch(err => err.message)
    
  }

 
  
  

 
 
  return (
    <div className="container">
      <h1>Luxury Vacations</h1>
      
      
      <Products
        productList={productList}/>
    </div>
  );
}

export default HomePage;