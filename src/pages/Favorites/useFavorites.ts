import { useContext } from "react";
import { useArtistService } from "../../services/useArtistsService";
import { Artist } from "../../typings/Artist";
import { ArtistSearchStateContext } from "../../services/stateProvider";

const useFavorites = () => {
  const {
    state: { favorites },
  } = useContext(ArtistSearchStateContext);
  const { removeArtistFromFavorites } = useArtistService();

  const removeFavorite = (a: Artist) => removeArtistFromFavorites(a.id);

  return {
    favorites,
    removeFavorite,
  };
};

export { useFavorites };
