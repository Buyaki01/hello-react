import { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Dave');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count)
  }

  const handleClick2 = () => {
    console.log(count);
  }

  return(
    <main className="mt-8 ml-5 text-center">
      <p onDoubleClick={handleClick}> Hello {name}!</p>
      
      <div className="mt-3">
        <button onClick={handleNameChange}>Change Name</button>
      </div>

      <div className="mt-3">
        <button onClick={handleNameChange}>Hello {name}!</button>
      </div>

      <div className="mt-3">
        <button onClick={handleClick}>Click it</button>
      </div>

      <div className="mt-3">
        <button onClick={handleClick2}>Click it</button>
      </div>
    </main>
  )
}
export default Content;