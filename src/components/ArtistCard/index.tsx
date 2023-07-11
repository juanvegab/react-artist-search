import { FC } from "react";
import { Artist } from "../../typings/Artist";
import { Link } from "react-router-dom";
import "./styles.css";
import { Button } from "../Button";

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
  const { id, name, image, genres, popularity } = artist;
  const primaryGenre = genres && genres.find((g) => g.is_primary);
  const cardStyleAndVersion = `artist-card ${simple ? "simple" : ""}`;

  return (
    <div className={cardStyleAndVersion}>
      <div className="info">
        <Link to={`/artist/${id}`}>
          <img className="thumnail" src={image} alt={name} />
        </Link>
        <div className="title">
          <Link to={`/artist/${id}`}>
            <h2>{name}</h2>
          </Link>
          {primaryGenre && (
            <p>
              {!simple && "Primary genre: "}
              <span>{primaryGenre.name}</span>
            </p>
          )}
          {!simple && (
            <div className="detail">
              {genres && (
                <p>
                  Additional Genres:{" "}
                  <span>{genres.map((g) => g.name).join(", ")}</span>
                </p>
              )}
              {popularity && (
                <p>
                  Popularity score: <span>{popularity}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="actions">
        {removeFromFavorite && isFavorite && (
          <Button
            type="primary"
            label="Remove"
            action={() => removeFromFavorite(artist)}
          />
        )}
        {addToFavorite && !isFavorite && (
          <Button
            type="secondary"
            label="Add to list"
            action={() => addToFavorite(artist)}
          />
        )}
      </div>
    </div>
  );
};

export { ArtistCard };
