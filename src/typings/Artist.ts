import { Genre } from "./Genre";

export type Artist = {
  id: number;
  name: string;
  image: string;
  popularity: number;
  genres: Array<Genre>;
};
