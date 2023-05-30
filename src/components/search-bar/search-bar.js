import { useEffect, useState, useCallback } from "react";
import "./search-bar.css";
import MagnifyingGlass from "../icons/magnifying-glass";

export default function SearchBar() {
  const [dataT, setDataT] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://api.discogs.com/database/search?q=${q}&key=${process.env.REACT_APP_KEY}`
    )
      .then((resp) => resp.json())
      .then(function (data) {
        setDataT(data.results);
      });
  };

  const handleFetchAgain = () => {
    fetchData();
  };

  return (
    <div className="search-bar">
      <div className="grid-container">
        <div className="search-block">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Digite aqui..."
            onChange={(e) => {
              setQ(e.target.value);
            }}
          ></input>
          <div className="button-container">
            <img
              className="button"
              src="/assets/images/magnifying-glass.svg"
              onClick={handleFetchAgain}
            />
          </div>
        </div>
        <div className="items">
          {dataT.map((item, id) => {
            console.clear();
            console.log(item);
            return (
              <div key={id} className="item">
                <img className="picture" src={item.thumb} alt="None"></img>
                <br></br>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
