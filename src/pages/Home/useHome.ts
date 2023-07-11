import { useEffect, useState } from "react";
import { useArtistService } from "../../services/useArtistsService";
import { Genre } from "../../typings/Genre";
import { Artist } from "../../typings/Artist";

const useHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [genre, setGenre] = useState<Genre>();
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [artists, setArtists] = useState<Array<Artist>>([]);

  const {
    getArtistByGenre,
    addArtistToFavorites,
    searchArtistsByAnything,
    removeArtistFromFavorites,
    isArtistInFavorites,
  } = useArtistService();

  useEffect(() => {
    if (genre) getArtistByGenre(genre.id, setArtists);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  const addFavorite = (a: Artist) => addArtistToFavorites(a);
  const removeFavorite = (a: Artist) => removeArtistFromFavorites(a.id);
  const search = (q: string) => {
    if (q && q.length > 2) {
      setIsLoading(true);
      searchArtistsByAnything(q, (r) => {
        setGenres(r.genres);
        setArtists(r.artists);
        setIsLoading(false);
      });
    }
  };
  const selectGenre = (g: Genre) => setGenre(g);

  return {
    artists,
    genres,
    isLoading,
    search,
    selectGenre,
    addFavorite,
    removeFavorite,
    isArtistInFavorites,
  };
};

export { useHome };
