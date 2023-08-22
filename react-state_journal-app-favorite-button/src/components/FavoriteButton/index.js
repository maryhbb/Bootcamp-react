import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;

  const [favorite, setFavorite] = useState(false);
  console.log("Favorite State:", favorite);
  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
        console.log("Favorite State:", favorite);
        setFavorite(!favorite);
      }}
      aria-label="favorite"
    >
      {favorite ? <StarFilled /> : <Star />}
    </button>
  );
}

