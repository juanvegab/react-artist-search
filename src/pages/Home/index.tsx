import { FC } from "react";
import { useHome } from "./useHome";
import { ArtistCard } from "../../components/ArtistCard";
import { Typeahead } from "../../components/Typeahead";
import { Genre } from "../../typings/Genre";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const {
    genres,
    search,
    artists,
    isLoading,
    selectGenre,
    addFavorite,
    removeFavorite,
    isArtistInFavorites,
  } = useHome();

  return (
    <div className="page-layout">
      <h1 className="text-center">Search by genre or artist</h1>
      <Typeahead
        search={search}
        items={genres}
        isLoading={isLoading}
        itemClick={(i) => selectGenre(i as Genre)}
      />

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
