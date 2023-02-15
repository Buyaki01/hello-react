import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa covered almonds unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  return(
    <main className="mt-8 ml-5 text-center">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              type="checkbox" 
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
              className="larger-checkbox"
            />

            <label
              onDoubleClick={() => handleCheck(item.id)}
              className="ml-3"
            >
              {item.item}
            </label>

            <FaTrashAlt 
              onClick={() => handleDelete(item.id)}
              role="button"
              className="trash-icon" 
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
export default Content;