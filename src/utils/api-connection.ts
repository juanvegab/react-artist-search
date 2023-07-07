import { ENDPOINTS } from "../constants/endpoints";
import { Artist } from "../typings/Artist";
import { Genre } from "../typings/Genre";

export const useAPI = () => {
  const BASE_OPTIONS = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "apiKey 5db48e1f3a0a4580bad47849f1317bd0",
    },
  };

  const GET_OPTIONS = {
    ...BASE_OPTIONS,
    method: "GET",
  };

  const api = <T>(url: string, options: RequestInit): Promise<T> => {
    return fetch(url, options).then(
      (r) => r.json().then((r) => r.data) as Promise<T>
    );
  };

  const searchArtistsByGenre = (id: number) => {
    const queryURL = ENDPOINTS.GENRES + `/${id}/artists`;
    return api<Array<Artist>>(queryURL, { ...GET_OPTIONS });
  };

  const getArtist = (id: string) => {
    return api<Artist>(ENDPOINTS.ARTISTS + `/${id}`, { ...GET_OPTIONS });
  };

  const searchGenresByName = (query: string) => {
    const queryURL = ENDPOINTS.GENRES + `?q=${query}&limit=10`;
    return api<Array<Genre>>(queryURL, { ...GET_OPTIONS });
  };

  return { searchArtistsByGenre, getArtist, searchGenresByName };
};
