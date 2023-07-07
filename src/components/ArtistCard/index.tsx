import { FC } from "react";
// import { useArtistCard } from "./useArtistCard";
import { Artist } from "../../typings/Artist";
import { Link } from "react-router-dom";
import "./styles.css";

interface ArtistProps {
  artist: Artist;
  addToFavorite?: (a: Artist) => void;
  removeFromFavorite?: (a: Artist) => void;
  isFavorite?: boolean;
  simple?: boolean;
}

const ArtistCard: FC<ArtistProps> = ({
  artist,
  isFavorite = false,
  simple = false,
  addToFavorite,
  removeFromFavorite,
}) => {
  // const {} = useArtistCard();
  const { id, name, image, genres, popularity } = artist;
  const primaryGenre = genres && genres.find((g) => g.is_primary);
  const cardStyleAndVersion = `artist-card ${simple && "simple"}`;

  return (
    <div className={cardStyleAndVersion}>
      <div className="info">
        <div className="basic">
          <Link to={`/artist/${id}`}>
            <img className="thumnail" src={image} alt={name} />
          </Link>
          <div className="title">
            <h2>{name}</h2>
            {primaryGenre && (
              <p>
                {!simple && "Primary genre:"} {primaryGenre.name}
              </p>
            )}
            {!simple && popularity && <p>Popularity score: {popularity}</p>}
          </div>
        </div>
        {!simple && (
          <div className="detail">
            {genres && (
              <div>
                <p>Additional Genres:</p>
                <div>
                  {genres.map((g) => (
                    <span key={g.id}>{g.name}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="actions">
        {removeFromFavorite && isFavorite && (
          <div onClick={() => removeFromFavorite(artist)}>REMOVE</div>
        )}
        {addToFavorite && !isFavorite && (
          <div onClick={() => addToFavorite(artist)}>ADD</div>
        )}
      </div>
    </div>
  );
};

export { ArtistCard };
