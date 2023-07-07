import { useContext } from "react";
import { ArtistSearchStateContext } from "./stateProvider";
import { useAPI } from "../utils/api-connection";
import { Artist } from "../typings/Artist";
import { Genre } from "../typings/Genre";

type SearchByAnythingResponse = {
  artists: Array<Artist>;
  genres: Array<Genre>;
};

const useArtistService = () => {
  const { state, updateState } = useContext(ArtistSearchStateContext);
  const {
    getArtist,
    getRelated,
    searchArtistsByGenre,
    searchGenresByName,
    searchArtistsByName,
  } = useAPI();

  const searchArtistsByAnything = (
    q: string,
    callback: (response: SearchByAnythingResponse) => void
  ) => {
    searchGenres(q, (genres) => {
      if (genres.length > 0) {
        callback({ genres, artists: [] });
      } else {
        getArtistByName(q, (artists) => {
          callback({ genres: [], artists });
        });
      }
    });
  };

  const getArtistByGenre = (id: number, callback: (a: Artist[]) => void) => {
    searchArtistsByGenre(id)
      .then((artists) => {
        callback(artists);
      })
      .catch((e) => console.log(e));
  };

  const getArtistByName = (q: string, callback: (a: Artist[]) => void) => {
    searchArtistsByName(q)
      .then((artists) => {
        callback(artists);
      })
      .catch((e) => console.log(e));
  };

  const getById = (id: string, callback: (a: Artist) => void) => {
    getArtist(id)
      .then((artist) => callback(artist[0]))
      .catch((e) => console.log(e));
  };

  const getRelatedArtists = (
    id: string,
    callback: (list: Artist[]) => void
  ) => {
    getRelated(id)
      .then((list) => callback(list))
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

  const isArtistInFavorites = (artist: Artist) =>
    state.favorites.findIndex((a) => a.id === artist.id) !== -1;

  return {
    getById,
    searchGenres,
    getArtistByName,
    getArtistByGenre,
    getRelatedArtists,
    isArtistInFavorites,
    addArtistToFavorites,
    searchArtistsByAnything,
    removeArtistFromFavorites,
  };
};

export { useArtistService };
