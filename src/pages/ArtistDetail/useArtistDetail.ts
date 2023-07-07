import { useEffect, useState } from "react";
import { useArtistService } from "../../services/useArtistsService";
import { Artist } from "../../typings/Artist";
import { useParams } from "react-router-dom";

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
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getById(id, (a) => setArtist(a));
      getRelatedArtists(id, (l) => setRelatedArtists(l));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    artist,
    isArtistInFavorites,
    addFavorite,
    removeFavorite,
    relatedArtists,
  };
};

export { useArtistDetail };
