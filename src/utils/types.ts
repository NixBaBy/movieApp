export type MovieType = {
  poster_path: string;
  vote_average: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
  id: string;
};

export type GenreType = {
  name: string;
  id: number;
};

export type CrewTypes = {
  name: string;
  known_for_department: string;
  department: string;
};

export type CastTypes = {
  known_for_department: string;
};
