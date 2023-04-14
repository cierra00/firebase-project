import {useState, createContext} from "react";
import ProductData from "../Product/ProductData";
import {v4 as uuidv4} from "uuid";

const ProductContext = createContext();

const ProductProvider = ({ children }) =>{
    const [productList, setProductList] = useState(ProductData);
    
}


  
  

