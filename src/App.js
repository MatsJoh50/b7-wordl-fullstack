import React from "react";
import "./output.css";

function App() {
  return(
    <div className='w-4/5 m-auto flex justify-center border'>
    <nav className='h-24 w-full flex row border bg-bars'>
      <ul className='row flex h-20 text-white text-3xl '>
        <li className="hover:text-black">Game</li>
        <li>HighScore</li>
        <li>About</li>
      </ul>
    </nav>
    <div>
      <p>testar</p>
    </div>
  </div>
  ) ;
}

export default App;
