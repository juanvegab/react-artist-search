import { FC } from "react";
import { TypeaheadItem, useTypeahead } from "./useTypeahead";
import "./styles.css";

interface TypeaheadProps {
  items: Array<TypeaheadItem>;
  search: (q: string) => void;
  itemClick: <T>(i: T) => void;
  isLoading?: boolean;
}

const Typeahead: FC<TypeaheadProps> = ({
  items,
  search,
  itemClick,
  isLoading = false,
}) => {
  const { query, setQuery, setSelectedItem, isOptionsVisible } = useTypeahead({
    search,
  });

  return (
    <div className={`typeahead ${isLoading ? "searching" : ""}`}>
      <input
        type="search"
        placeholder="Rock, Reggae, Bob Marley, Linkin Park ..."
        onChange={(e) => setQuery(e.currentTarget.value)}
        value={query}
      />
      {items.length > 0 && isOptionsVisible && (
        <div className="options">
          {items.map((i) => (
            <div
              className="item"
              key={i.id}
              onClick={() => {
                setSelectedItem(i);
                itemClick(i);
              }}
            >
              {i.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Typeahead };
