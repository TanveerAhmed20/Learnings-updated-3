import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
const App = () => {
  let [searchVal, setSearchValue] = useState("");
  let [robos, setRobos] = useState([]);
  let [filteredMonsters, setFilterMonsters] = useState(robos);
  let [stringVal, setStringValue] = useState("");

  console.log(searchVal);
  console.log(stringVal);
  const comparator = (str) => {
    var exp = new RegExp(searchVal.toLowerCase());
    if (str.name.toLowerCase().match(exp) !== null) return true;
    else return false;
  };

  // this useEffect is to monitor changes in the robos array ,
  // [] means that it is not dependent on any other and will not monitor any other dependencies
  // this this useEffect will only run once

  useEffect(() => {
    console.log("useEffect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobos(users);
      });
  }, []);

  console.log(robos);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const onStringChange = (event) => {
    setStringValue(event.target.value);
  };

  // this use effect is to monitor changes in searchVal
  useEffect(() => {
    console.log('filter called');
    const filtered = robos.filter((x) => comparator(x));
    setFilterMonsters(filtered);
  }, [robos,searchVal]);

  return (
    <div className="App">
      <h1 className="app-title">Robots Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder ="Search Robots"
      />
      {/* <SearchBox
        placeholder = "Search String"
        onChangeHandler={onStringChange}
        className="monsters-search-box"
      /> */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
