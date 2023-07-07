import {
  ArtistSearchStateContextType,
  ArtistSearchStateType,
} from "../typings/state";

export const STORED_STATE_NAME = "artist-search-state";
export const INITIAL_STATE: ArtistSearchStateContextType = {
  state: {
    favorites: [],
  },
  updateState: (s: ArtistSearchStateType) => null,
};
