import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Item from '../components/item/Item'
import NewItem from '../components/item/NewItem';

export default function ItemRoutes() {
  return (
    <Routes>
      <Route index element={<Item />} />
        <Route path=":id" element={<Item />}/>
        <Route path="newItem" element={<NewItem />}/>
      
    </Routes>
  )
}
