import React from "react";
import About from "./About";
import Home from "./Home";
import FavList from "./FavList";
import PokeList from "./PokeList";

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <FavList />
      <PokeList />
    </div>
  );
};

export default Main;
