import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharCard from "./components/CharCard";

const App = () => {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);
        setCharList(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {charList.map(e => (
        <CharCard card={e} />
      ))}
    </div>
  );
};

export default App;
