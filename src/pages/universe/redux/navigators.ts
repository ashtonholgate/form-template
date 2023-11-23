import { Galaxy, Planet, Star, Universe } from "../models/universe.models";
import { exists } from "../../../utilities/value.utilities";

export const getGalaxy = (universe: Universe, galaxyId: string): Galaxy => {
    const galaxy = universe.galaxies.find(galaxy => galaxy.id === galaxyId);
    if (!exists(galaxy)) throw new Error(`Galaxy does not exist with id ${galaxyId}`);
    return galaxy;
}

export const getStar = (universe: Universe, galaxyId: string, starId: string): Star => {
    const galaxy = getGalaxy(universe, galaxyId);
    const star = galaxy.stars.find(star => star.id === starId);
    if (!exists(star)) throw new Error(`Star does not exist with id ${starId} in galaxy with id ${galaxyId}`);
    return star;
}

export const getPlanet = (universe: Universe, galaxyId: string, starId: string, planetId: string): Planet => {
    const star = getStar(universe, galaxyId, starId);
    const planet = star.planets.find(planet => planet.id === planetId);
    if (!exists(planet)) throw new Error(`Planet does not exist with id ${planetId} in star with id ${starId} in galaxy with id ${galaxyId}`);
    return planet;
}