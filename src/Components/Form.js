import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
   const [quantity, setQuantity] = useState(1);
  // const [items , setitems] = useState([]);

  // function handleAddItems(item){
  //   setitems((items)=>[...items , item])

  // }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description){ 
      alert("write something");
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    // console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}   //e.target.value =>always a string
      > 
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}