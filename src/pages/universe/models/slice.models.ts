import { EditableKeysOfGalaxy, EditableKeysOfPlanet, EditableKeysOfStar, Galaxy, Planet, Star } from "./universe.models";

export type AddGalaxyPayload = {
  galaxy: Galaxy;
};

export type RemoveGalaxyPayload = {
  galaxyId: string;
};

export type UpdateGalaxyPayload<K extends keyof EditableKeysOfGalaxy> =
  RemoveGalaxyPayload & {
    key: K;
    value: EditableKeysOfGalaxy[K];
  };

export type AddStarPayload = {
  galaxyId: string;
  star: Star;
};

export type RemoveStarPayload = {
  galaxyId: string;
  starId: string;
};

export type UpdateStarPayload<K extends keyof EditableKeysOfStar> = RemoveStarPayload & {
  key: K;
  value: EditableKeysOfStar[K];
};

export type AddPlanetPayload = {
  galaxyId: string;
  starId: string
  planet: Planet;
};

export type RemovePlanetPayload = {
  galaxyId: string;
  starId: string;
  planetId: string;
};

export type UpdatePlanetPayload<K extends keyof EditableKeysOfPlanet> = RemovePlanetPayload & {
  key: K;
  value: EditableKeysOfPlanet[K];
};
