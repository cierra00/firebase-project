import { useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";


function HomePage() {
  const [productList, setProductList] = useState(ProductData);
  const [cartList, setCartList] = useState({});

 
  
  

 
  const checkCart = (id) => {
    setCartList(
      cartList.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    )
  );
};
  return (
    <div className="container">
      <h1>Luxury Vacations</h1>
      <Products
        productList={productList}/>
    </div>
  );
}

export default HomePage;