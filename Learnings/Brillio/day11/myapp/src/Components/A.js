import { useEffect, useState, useRef } from "react";
export default function A() {
  const [color, setColor] = useState("blue");
  const colorP = useRef();

  useEffect(() => {
    console.log("runs on 1st render only");
  }, []);

  // runs on every render
  useEffect(() => {
    console.log("changes on every update");
  });

  // runs on every change of color
  useEffect(() => {
    console.count("called when color changes");
    console.log("color" + colorP.current.value);
  }, [color]);

  function handleColorInput(event) {
    setColor(event.target.value);
  }
  function handleChangeColor() {
    color === "blue" ? setColor("red") : setColor("blue");
  }
  return (
    <div>
      <h1>Component A</h1>
      <p style={{color:color}}>this color is : {color}</p>
    <input type="text" value = {color} onChange={handleColorInput} ref={colorP}/>
    <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}
