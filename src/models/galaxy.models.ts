export type Universe = {
  galaxies: Galaxy[];
};

export type Galaxy = {
  id: string;
  name: string | null;
  stars: Star[];
};

export type Star = {
  id: string;
  name: string | null;
  planets: Planet[];
};

export type Planet = {
  id: string;
  name: string | null;
};
