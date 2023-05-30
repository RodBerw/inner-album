import { useEffect, useState } from "react";
import "./home.css";
import SearchBar from "../components/search-bar/search-bar";
import Title from "../components/title/title";

export default function Home() {
  return (
    <div className="main">
      <div className="container">
        <div>
          <Title />
        </div>
        <div>
          1<SearchBar />
        </div>
      </div>
    </div>
  );
}
