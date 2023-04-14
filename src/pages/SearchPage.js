import React,{ useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";
//import AddTask from "../components/item/AddTask";


function SearchPage() {
  
  const [productList, setProductList] = useState(ProductData);
  
  

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