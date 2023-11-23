export type Universe = {
  galaxies: Galaxy[];
};

export type EditableKeysOfGalaxy = {
  name: string | null;
}

export type Galaxy = EditableKeysOfGalaxy & {
  id: string;
  stars: Star[];
};

export type EditableKeysOfStar = {
  name: string | null;
}

export type Star = EditableKeysOfStar & {
  id: string;
  planets: Planet[];
};

export type EditableKeysOfPlanet = {
  name: string | null;
}

export type Planet = EditableKeysOfPlanet & {
  id: string;
};
