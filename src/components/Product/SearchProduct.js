import React from 'react';
import Card from '../shared/Card';



export default function SearchProduct({search, setSearch}) {
  
  return (
    <Card>
      <h2>Search For Products</h2>
      <form onSubmit={(e)=> e.preventDefault()}>
      <input type="text" 
      name="search" id="search" 
      role="searchbox" 
      placeholder="Search Products"
      className="input"
      onChange={(e)=> setSearch(e.target.value)}/>
      </form>
    </Card>
  );
}
