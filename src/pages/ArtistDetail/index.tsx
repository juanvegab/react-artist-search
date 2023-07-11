import { FC } from "react";
import { useArtistDetail } from "./useArtistDetail";
import { ArtistCard } from "../../components/ArtistCard";
import { Button } from "../../components/Button";

interface ArtistDetailProps {}

const ArtistDetail: FC<ArtistDetailProps> = () => {
  const {
    artist,
    goHome,
    addFavorite,
    removeFavorite,
    isArtistInFavorites,
    relatedArtists,
  } = useArtistDetail();

  return (
    <div className="page-layout">
      <div className="page-nav">
        <Button type="link" label="&lt; Back to Search" action={goHome} />
      </div>
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
