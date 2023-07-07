import { FC } from "react";
import { useArtistDetail } from "./useArtistDetail";
import { ArtistCard } from "../../components/ArtistCard";
import { Link } from "react-router-dom";

interface ArtistDetailProps {}

const ArtistDetail: FC<ArtistDetailProps> = () => {
  const {
    artist,
    addFavorite,
    removeFavorite,
    isArtistInFavorites,
    relatedArtists,
  } = useArtistDetail();

  return (
    <div>
      <Link to="/">&lt; Back to Search</Link>
      {artist && (
        <ArtistCard
          artist={artist}
          addToFavorite={addFavorite}
          removeFromFavorite={removeFavorite}
          isFavorite={artist ? isArtistInFavorites(artist) : false}
        />
      )}
      <h3>Related Artist:</h3>
      {relatedArtists &&
        relatedArtists.map((a) => (
          <ArtistCard
            simple
            key={a.id}
            artist={a}
            addToFavorite={addFavorite}
            removeFromFavorite={removeFavorite}
            isFavorite={a ? isArtistInFavorites(a) : false}
          />
        ))}
    </div>
  );
};

export { ArtistDetail };
