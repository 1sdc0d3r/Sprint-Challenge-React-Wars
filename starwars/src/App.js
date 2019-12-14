import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/StarWars.css";
import axios from "axios";
import CharCard from "./components/CharCard";
import Pagin from "./components/Pagination";

const App = () => {
  const [charList, setCharList] = useState([]);
  const [url, getUrl] = useState("https://swapi.co/api/people/");

  const [urlNext, setNext] = useState("");
  const [urlPrev, setPrev] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        setCharList(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch(err => console.log(err));
  }, [url]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Pagin next={urlNext} prev={urlPrev} getUrl={getUrl} />
      <div className="cardContainer">
        {charList.map(e => (
          <div className="test">
            <CharCard card={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
