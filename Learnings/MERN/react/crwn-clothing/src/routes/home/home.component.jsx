import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory-component";

const Home = () => {
  const categories = require("../../categories");
  console.log(categories);
  return <div><Directory categories={categories} /><Outlet/></div>
};

export default Home;
