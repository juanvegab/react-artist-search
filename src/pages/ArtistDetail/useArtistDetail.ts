import { useEffect, useState } from "react";
import { useArtistService } from "../../services/useArtistsService";
import { Artist } from "../../typings/Artist";
import { useParams, useNavigate } from "react-router-dom";

const useArtistDetail = () => {
  const {
    getById,
    getRelatedArtists,
    isArtistInFavorites,
    addArtistToFavorites,
    removeArtistFromFavorites,
  } = useArtistService();
  const addFavorite = (a: Artist) => addArtistToFavorites(a);
  const removeFavorite = (a: Artist) => removeArtistFromFavorites(a.id);

  const [relatedArtists, setRelatedArtists] = useState<Array<Artist>>([]);
  const [artist, setArtist] = useState<Artist>();
  const { id } = useParams();
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  useEffect(() => {
    if (id) {
      getById(id, (a) => setArtist(a));
      getRelatedArtists(id, (l) => setRelatedArtists(l));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    artist,
    goHome,
    isArtistInFavorites,
    addFavorite,
    removeFavorite,
    relatedArtists,
  };
};

export { useArtistDetail };
