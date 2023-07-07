import { Artist } from "./Artist";

export type ArtistSearchStateType = {
  favorites: Array<Artist>;
};

export type ArtistSearchStateContextType = {
  state: ArtistSearchStateType;
  updateState: (s: ArtistSearchStateType) => void;
};
