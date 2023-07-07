import { FC } from "react";
import { useFavorites } from "./useFavorites";
import { ArtistCard } from "../../components/ArtistCard";
import { Link } from "react-router-dom";

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = () => {
  const { removeFavorite, favorites } = useFavorites();

  return (
    <div>
      <Link to="/">&lt; Back to Search</Link>
      <h1>My List</h1>
      {(!favorites || favorites.length === 0) && <p>No Artist in List</p>}
      {favorites &&
        favorites.map((a) => (
          <ArtistCard
            simple
            key={a.id}
            artist={a}
            isFavorite
            removeFromFavorite={removeFavorite}
          />
        ))}
    </div>
  );
};

export { Favorites };
