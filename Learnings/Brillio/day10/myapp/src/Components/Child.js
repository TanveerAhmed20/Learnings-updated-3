export default function Child({ callback, name }) {
  return (
    <div>
      <div>Click me to say my name</div>
      <br />
      <br />
      <button onClick ={()=>callback(name)}> Click Me {name}</button>
    </div>
  );
}
