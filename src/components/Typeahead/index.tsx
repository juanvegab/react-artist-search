import { FC } from "react";
import { useTypeahead } from "./useTypeahead";
import "./styles.css";

interface TypeaheadItem {
  id: number;
  name: string;
}

interface TypeaheadProps {
  items: Array<TypeaheadItem>;
  search: (q: string) => void;
  itemClick: <T>(i: T) => void;
}

const Typeahead: FC<TypeaheadProps> = ({ items, search, itemClick }) => {
  const { query, setQuery } = useTypeahead({ search });

  return (
    <div className="typeahead">
      <input
        type="search"
        placeholder="Rock, Reggae, Bob Marley, Linkin Park ..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {items.map((i) => (
        <div key={i.id} onClick={() => itemClick(i)}>
          {i.name}
        </div>
      ))}
    </div>
  );
};

export { Typeahead };
