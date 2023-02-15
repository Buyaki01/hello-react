import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({items, handleCheck, handleDelete}) => {
  return(
    <div>
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
    </div>
  )
}

export default ItemList;