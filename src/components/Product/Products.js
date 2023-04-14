import React, { useState, } from "react";
import {useLocation} from 'react-router-dom';
import Product from '../Product/Product';
import SearchProduct from '../Product/SearchProduct';


export default function Products({ productList}) {
  const [search, setSearch] = useState("");
 
  const result = productList.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()));
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
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
             imageSRC={product.imageSRC}
             alt={product.imgAlt}
             result={result}
             
             
            />
          ))}
        </div>
      ) : (
        <p>{cart.length} Results have been returned</p>
      )}
    </>
  )}
  // Cart Page
  if (location.pathname=== "/cart"){
    return (
      <>
    
      {cart.length ? (
        <div>
          
          {cart.map((product) => (
            <Product
              numberOfItems ={cart.length}
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
             imageSRC={product.imageSRC}
             alt={product.imgAlt}
             result={result}
             inCart={product.inCart}
             
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
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
               imageSRC={product.imageSRC}
               alt={product.imgAlt}
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
