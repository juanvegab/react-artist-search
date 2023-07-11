import { FC } from "react";
import { useFavorites } from "./useFavorites";
import { ArtistCard } from "../../components/ArtistCard";
import { Button } from "../../components/Button";

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = () => {
  const { goHome, removeFavorite, favorites } = useFavorites();

  return (
    <div className="page-layout">
      <div className="page-nav">
        <Button type="link" label="&lt; Back to Search" action={goHome} />
      </div>
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
