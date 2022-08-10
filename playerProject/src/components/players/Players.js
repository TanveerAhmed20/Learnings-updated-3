import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import "./Players.css";
import { getPlayers } from "../../services/index";

const Player = lazy(() => {
  const x = new Promise((resolve) => {setTimeout(() => {return resolve(import("./Player"));}, 1500);});
  return x;
});

const Players = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPlayers().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Suspense
      fallback={
        <div style={{display: "flex",height: "100vh",width: "100%",alignItems: "center",justifyContent: "center",}}>
          <h1>...Loading</h1>
        </div>
      }>
      <div
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        className="container"
      >
        {data && data.map((ele, id) => <Player key={id} player={ele} />)}
      </div>
    </Suspense>
  );
};

export default Players;
