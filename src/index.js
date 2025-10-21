import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v2";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(1);
  return (
    <>
      <StarRating
        setMovieRating={setMovieRating}
        maxRating={10}
        color={"yellow"}
      />
      <p>this movie has {movieRating} rating</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>{/* <Test /> */}</App>
  </React.StrictMode>
);
