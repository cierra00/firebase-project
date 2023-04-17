import React, { useState, } from "react";
import {useLocation} from 'react-router-dom';
import Product from '../Product/Product';
import SearchProduct from '../Product/SearchProduct';
import ProductData from "./ProductData";



export default function Products({ productList}) {
  const [search, setSearch] = useState({});
 const result = productList;
 
 // const result = productList.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()));
  const cart = result.filter(product => {
    return product.inCart === true;

  });
  const location = useLocation();
  if (location.pathname=== "/search"){
  return (
    <>
    <SearchProduct  setSearch={setSearch}/>
      {result.length ? (
        <div>
            {result.map((product) => (
            <Product
              key={product.data.id}
              id={product.data.id}
              //name={product.name}
              price={product.data.price}
              description={product.data.description}
             imageSRC={product.data.imageSRC}
             alt={product.data.imgAlt}
             result={result}
             inCart={product.data.inCart}
             
             
            />
          ))}
        </div>
      ) : (
        <p>{cart.length} Results have been returned</p>
      )}
    </>
  )}
  // Cart Page
  if (location.pathname === "/cart"){
    return (
      <>
    
      {cart.length ? (
        <div>
          
          {cart.map((product) => (
            <Product
              numberOfItems ={cart.length}
              key={product.data.id}
              id={product.data.id}
              name={product.data.name}
              price={product.data.price}
              description={product.data.description}
             imageSRC={product.data.imageSRC}
             alt={product.data.imgAlt}
             result={result}
             inCart={product.data.inCart}
             
/>
          ))}
         
        </div>
      ) : (
        <p>{cart.length} Results have been returned</p>
      )}
    </>
    )}
  else {
    return (
      <>
       
        {result.length ? (
          <div>
            {result.map((product) => (
              <Product
                key={product.data.id}
                id={product.data.id}
                //name={Product.data.name}
                price={product.data.price}
                description={product.data.description}
               imageSRC={product.data.imageSRC}
               alt={product.data.imgAlt}
               result={result}
              />
            ))}
          </div>
        ) : (
          <p>{cart.length} Results have been returned</p>
        )}
      </>
    );
  }
}
