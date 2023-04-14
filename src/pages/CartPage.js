import React,{ useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";
//import AddTask from "../components/item/AddTask";


function CartPage() {
  
  const [productList, setProductList] = useState(ProductData);
  
  

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