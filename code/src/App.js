import React, { useState } from "react";
import './App.css';
import first from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import fourth from "./images/4.png";
import fifth from "./images/5.png";

const images = [first, second, third, fourth, fifth];

function App() {
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <div className="bg-transparent w-full h-16 absolute" onClick={() => setIndex(0)}></div>
      <img src={images[index]} alt={"empty"} onClick={() => increaseIndex()} />
    </div>
  );
}

export default App;
