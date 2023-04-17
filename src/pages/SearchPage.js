import React,{ useState, useEffect } from "react";
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


function SearchPage() {
  
  const [productList, setProductList] = useState([]);
  
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

  const checkProduct = (id) => {
    setProductList(
      productList.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };
  return (
    <div className="container">
      <h1>Welcome to Item Manager</h1>
      
      <Products
        canSearch = {false}
        productList={productList}
        handleChecked={checkProduct}
      />
    </div>
  );
}

export default SearchPage;