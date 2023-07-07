import { useContext } from "react";
import { ArtistSearchStateContext } from "./stateProvider";
import { useAPI } from "../utils/api-connection";
import { Artist } from "../typings/Artist";
import { Genre } from "../typings/Genre";

const useArtistService = () => {
  const { state, updateState } = useContext(ArtistSearchStateContext);
  const { getArtist, searchArtistsByGenre, searchGenresByName } = useAPI();

  const getArtistByGenre = (id: number, callback: (a: Artist[]) => void) => {
    searchArtistsByGenre(id)
      .then((artists) => {
        callback(artists);
      })
      .catch((e) => console.log(e));
  };

  const getById = (id: string, callback: (a: Artist) => void) => {
    getArtist(id)
      .then((artist) => {
        callback(artist);
      })
      .catch((e) => console.log(e));
  };

  const searchGenres = (query: string, callback: (a: Genre[]) => void) => {
    searchGenresByName(query)
      .then((genre) => {
        callback(genre);
      })
      .catch((e) => console.log(e));
  };

  const addArtistToFavorites = (a: Artist) => {
    updateState({ ...state, favorites: [...state.favorites, a] });
  };

  const removeArtistFromFavorites = (id: number) => {
    updateState({
      ...state,
      favorites: state.favorites.filter((a) => a.id !== id),
    });
  };

  return {
    getById,
    getArtistByGenre,
    addArtistToFavorites,
    removeArtistFromFavorites,
    searchGenres,
  };
};

export { useArtistService };
