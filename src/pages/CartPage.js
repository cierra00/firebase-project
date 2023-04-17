import React,{ useState, useEffect } from "react";
import Products from "../components/Product/Products";
import {collection, getDocs} from "firebase/firestore"; 
import {db} from '../firebase';


function CartPage() {
  
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
        product.inCart === id ? { ...product, inCart: product.inCart } : product
      )
    );
  };
  return (
    <div className="container">
      <h1>Items In Your Cart</h1>
      
      <Products
        canSearch = {false}
        productList={productList}
        handleChecked={checkProduct}
      />
    </div>
  );
}

export default CartPage;