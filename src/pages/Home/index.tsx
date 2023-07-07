import { FC } from "react";
import { useHome } from "./useHome";
import { ArtistCard } from "../../components/ArtistCard";
import { Link } from "react-router-dom";
import { Typeahead } from "../../components/Typeahead";
import { Genre } from "../../typings/Genre";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const {
    genres,
    search,
    selectGenre,
    artists,
    addFavorite,
    removeFavorite,
    isArtistInFavorites,
  } = useHome();

  return (
    <div>
      <Link to="/my-list">Go to My list</Link>
      <p>Search by Genre or Artist name as you preffer.</p>
      <Typeahead
        search={search}
        items={genres}
        itemClick={(i) => selectGenre(i as Genre)}
      />
      <h1>Artists</h1>
      {artists.map((a) => (
        <ArtistCard
          simple
          key={a.id}
          artist={a}
          addToFavorite={addFavorite}
          removeFromFavorite={removeFavorite}
          isFavorite={isArtistInFavorites(a)}
        />
      ))}
    </div>
  );
};

export { Home };
