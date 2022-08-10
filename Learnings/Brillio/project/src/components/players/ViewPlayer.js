import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import {getPlayers2} from '../../services/index'
import Player from './Player'
const ViewPlayer = () => {
  let {id } = useParams();
  const [player, setData] = useState([]);
  useEffect(() => {
    getPlayers2(id).then((res) => {
      setData(res.data)
    });
  }, []);
  
  return (
    <div> <Player view player ={player}/></div>
  )
}

export default ViewPlayer