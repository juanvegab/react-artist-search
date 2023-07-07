import { useContext, useEffect, useState } from "react";
import { useArtistService } from "../../services/useArtistsService";
import { Genre } from "../../typings/Genre";
import { Artist } from "../../typings/Artist";
import { ArtistSearchStateContext } from "../../services/stateProvider";

const useHome = () => {
  const [genre, setGenre] = useState<Genre>();
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [artists, setArtists] = useState<Array<Artist>>([]);
  const [query, setQuery] = useState("");
  const {
    state: { favorites },
  } = useContext(ArtistSearchStateContext);
  const {
    searchGenres,
    getArtistByGenre,
    addArtistToFavorites,
    removeArtistFromFavorites,
  } = useArtistService();

  useEffect(() => {
    if (query && query.length > 3) {
      searchGenres(query, setGenres);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (genre) {
      getArtistByGenre(genre.id, setArtists);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  const addFavorite = (a: Artist) => addArtistToFavorites(a);
  const removeFavorite = (a: Artist) => removeArtistFromFavorites(a.id);
  const search = (q: string) => setQuery(q);
  const selectGenre = (g: Genre) => setGenre(g);

  return {
    favorites,
    artists,
    genres,
    query,
    search,
    selectGenre,
    addFavorite,
    removeFavorite,
  };
};

export { useHome };
