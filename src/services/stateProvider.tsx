import { FC, ReactNode, createContext, useState } from "react";
import { INITIAL_STATE, STORED_STATE_NAME } from "../constants/state";
import {
  ArtistSearchStateType,
  ArtistSearchStateContextType,
} from "../typings/state";

interface ArtistSearchStateProviderProps {
  children: ReactNode | Array<ReactNode>;
}

const getStoredState = () => {
  const storedState = localStorage.getItem(STORED_STATE_NAME);
  if (!storedState) return INITIAL_STATE.state;
  return JSON.parse(storedState);
};

const setStateToStore = (newState: ArtistSearchStateType) => {
  localStorage.setItem(STORED_STATE_NAME, JSON.stringify(newState));
};

export const ArtistSearchStateContext =
  createContext<ArtistSearchStateContextType>(INITIAL_STATE);

export const ArtistSearchStateProvider: FC<ArtistSearchStateProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<ArtistSearchStateType>(getStoredState());
  const updateState = (updatedState: ArtistSearchStateType) => {
    setState(updatedState);
    setStateToStore(updatedState);
  };

  return (
    <ArtistSearchStateContext.Provider value={{ state, updateState }}>
      {children}
    </ArtistSearchStateContext.Provider>
  );
};
