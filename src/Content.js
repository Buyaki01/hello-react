import { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Dave');
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = () => {
    console.log('You clicked it')
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

  return(
    <main className="mt-8 ml-5 text-center">
      <p onDoubleClick={handleClick}> Hello {handleNameChange()}!</p>
      
      <div className="mt-3">
        <button onClick={handleClick}>Click it</button>
      </div>

      <div className="mt-3">
        <button onClick={() => handleClick2('Dave')}>Click it</button>
      </div>

      <div className="mt-3">
        <button onClick={(e) => handleClick3(e)}>Click it</button>
      </div>
    </main>
  )
}
export default Content;