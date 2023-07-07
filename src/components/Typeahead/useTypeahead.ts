import { useEffect, useState } from "react";

interface UseTypeaheadProps {
  search: (q: string) => void;
}
const useTypeahead = ({ search }: UseTypeaheadProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query && query.length > 2) {
      search(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { query, setQuery };
};

export { useTypeahead };
