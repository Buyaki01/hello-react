import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {

  return(
    <li className="item">
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
  )
}

export default LineItem;