import { Galaxy, Planet, Star } from "../models/universe.models";
import { generateId } from "../../../utilities/generator.utilities";

export const generateNewGalaxy = (id: string = generateId()): Galaxy => ({
  id,
  name: null,
  stars: [],
});

export const generateNewStar = (id: string = generateId()): Star => ({
  id,
  name: null,
  planets: [],
});

export const generateNewPlanet = (id: string = generateId()): Planet => ({
  id,
  name: null,
});
