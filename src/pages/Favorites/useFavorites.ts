import { useContext } from "react";
import { useArtistService } from "../../services/useArtistsService";
import { Artist } from "../../typings/Artist";
import { ArtistSearchStateContext } from "../../services/stateProvider";
import { useNavigate } from "react-router-dom";

const useFavorites = () => {
  const {
    state: { favorites },
  } = useContext(ArtistSearchStateContext);
  const { removeArtistFromFavorites } = useArtistService();
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const removeFavorite = (a: Artist) => removeArtistFromFavorites(a.id);

  return {
    goHome,
    favorites,
    removeFavorite,
  };
};

export { useFavorites };
