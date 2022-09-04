import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    console.log("Comparator");
    super();
    this.state = {
      monster1: { name: "Linda" },
      monster2: { name: "Frank" },
      monster3: { name: "Jacky" },
      searchval: "",
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Frank",
        },
        {
          name: "Jacky",
        },
      ],
      monstersWeb: [],
    };
  }

  componentDidMount() {
    console.log("Inside Component DidMount");
    // we do fetch , fetch returns a promise
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monstersWeb: users };
          },
          () => {
            // console.log(this.state);
          }
        );
      });
  }
  render() {
    const comparator = (str) => {
      var exp = new RegExp(this.state.searchval.toLowerCase());
      if (str.name.toLowerCase().match(exp) !== null) return true;
      else return false;
    };

    const onSearchChange = (event) => {
      this.setState({ searchval: event.target.value });
    };

    const filteredMonsters = this.state.monstersWeb.filter((x) =>
      comparator(x)
    );

    console.log("Inside Render Function");
    return (
      <div className="App">
        <h1 className="app-title">Robots Rolodex</h1>
        {/* <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        /> */}

        {/* {filteredMonsters.map((x)=>{ return ( <div key = {x.id}> <h1>{x.name}</h1> </div>)})} */}
        <SearchBox
          onChangeHandler={onSearchChange}
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
