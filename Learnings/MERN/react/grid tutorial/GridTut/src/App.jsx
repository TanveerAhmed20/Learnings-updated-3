import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="table-body">
      <div className="table-container">

        <div className="course-head">

          <div className="course-head-content">
          <div className="course-details">
            <div className="course-item">Course Id</div>
            <div className="course-title">Course Name</div>
            <div className="course-item">Course Duration</div>
            <div className="course-item">Course Fee</div>
          </div>
          </div>
          <div className="course-head-blank">

          </div>
        </div>
        <div className="course-row">
          <div className="course-details">
            <div className="course-item">1</div>
            <div className="course-title">MERN STACK</div>
            <div className="course-item">100 Hours</div>
            <div className="course-item">20$</div>
          </div>
          <div className="button-group">
            <button className='btn' type="button">Edit</button>
            <button className='btn' type="button">VIEW</button>
            <button className='btn' type="button">DELETE</button>
          </div>
        </div>
        <div className="course-row">
          <div className="course-details">
            <div className="course-item">2</div>
            <div className="course-title">JAVA Full Stack</div>
            <div className="course-item">100Hours</div>
            <div className="course-item">25$</div>
          </div>
          <div className="button-group">
            <button className='btn' type="button">Edit</button>
            <button className='btn' type="button">VIEW</button>
            <button className='btn' type="button">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
