import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [cat,setCat]= useState("Produce")
  const [text,setText]= useState("")

  function handleSubmitV1(event){
    event.preventDefault()
    const formObj = {
      id: uuid(),
      name: text,
      category: cat,
    }
    onItemFormSubmit(formObj)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmitV1}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => setText(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={cat} onChange={e => setCat(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
