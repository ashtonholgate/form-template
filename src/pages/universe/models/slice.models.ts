import { Galaxy, Planet, Star } from "./universe.models";

export type AddGalaxyPayload = {
  galaxy: Galaxy;
};

export type RemoveGalaxyPayload = {
  galaxyId: string;
};

export type UpdateGalaxyPayload<K extends keyof Galaxy> =
  RemoveGalaxyPayload & {
    key: K;
    value: Galaxy[K];
  };

export type AddStarPayload = {
  galaxyId: string;
  star: Star;
};

export type RemoveStarPayload = {
  galaxyId: string;
  starId: string;
};

export type UpdateStarPayload<K extends keyof Star> = RemoveStarPayload & {
  key: K;
  value: Star[K];
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

export type UpdatePlanetPayload<K extends keyof Planet> = RemovePlanetPayload & {
  key: K;
  value: Planet[K];
};
