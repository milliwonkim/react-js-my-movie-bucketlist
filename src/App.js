import React from "react";
import { Movies } from "./Movies";
import { MoviesProvider } from "./MoviesContext";
import { NewMovie } from "./NewMovie";
import "./styles.scss";

export const App = () => {
  return (
    <div className="App">
      <MoviesProvider>
        <NewMovie />
        <Movies />
      </MoviesProvider>
    </div>
  );
};
