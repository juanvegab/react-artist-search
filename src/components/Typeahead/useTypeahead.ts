import { useEffect, useState } from "react";
export interface TypeaheadItem {
  id: number;
  name: string;
}
interface UseTypeaheadProps {
  search: (q: string) => void;
}
const useTypeahead = ({ search }: UseTypeaheadProps) => {
  const [selectedItem, setSelectedItem] = useState<TypeaheadItem>();
  const [query, setQuery] = useState("");
  const isOptionsVisible = !selectedItem && query !== "";

  useEffect(() => {
    if (query && query.length > 2 && selectedItem?.name !== query) {
      search(query);
      setSelectedItem(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (selectedItem) {
      setQuery(selectedItem.name);
    }
  }, [selectedItem]);

  return { query, setQuery, setSelectedItem, selectedItem, isOptionsVisible };
};

export { useTypeahead };
