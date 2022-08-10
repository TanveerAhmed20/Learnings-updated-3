import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss';
const Home = () => {
  return (
    <div className = "button-group">
        <button type = "button"><Link to='/Add'>ADD COURSE</Link></button>
        <button type = "button"><Link to='/Courses'>VIEW COURSE</Link></button>
    </div>
  )
}

export default Home