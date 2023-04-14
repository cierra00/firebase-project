import { useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";


function ProductPage() {
  const [productList, setProductList] = useState(ProductData);
  
  

 
  return (
    <div className="container">
      <h1>Book Now</h1>
      <Products
        productList={productList}/>
    </div>
  );
}

export default ProductPage;