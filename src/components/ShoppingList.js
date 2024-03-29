import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,handleSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch] = useState("")
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearchChange(event){
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const filteredItemsToDisplay = itemsToDisplay.filter((filteredItem) =>{
    if(search === "") return true
    if(filteredItem.name.toLowerCase().includes(search.toLowerCase())){
      return filteredItem
    }
    
  })
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
