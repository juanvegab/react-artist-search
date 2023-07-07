import { FC } from "react";
import { useHome } from "./useHome";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const {
    genres,
    search,
    query,
    selectGenre,
    artists,
    addFavorite,
    removeFavorite,
    favorites,
  } = useHome();

  return (
    <div>
      <input
        type="search"
        onChange={(e) => search(e.target.value)}
        value={query}
      />
      <h1>Genres</h1>
      <ul>
        {genres.map((g) => (
          <li key={g.id} onClick={() => selectGenre(g)}>
            {g.name}
          </li>
        ))}
      </ul>
      <h1>Artists</h1>
      <ul>
        {artists.map((a) => (
          <li key={a.id} onClick={() => addFavorite(a)}>
            {a.name}
          </li>
        ))}
      </ul>
      <h1>Favorites</h1>
      <ul>
        {favorites &&
          favorites.map((a) => (
            <li key={a.id} onClick={() => removeFavorite(a)}>
              {a.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Home };
