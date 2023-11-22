import { RootState } from "../../../store";
import { exists } from "../../../utilities/value.utilities";

export const selectUniverse = (state: RootState) => {
	return state.universe;
};

export const selectGalaxy = (state: RootState, galaxyId: string) => {
    const galaxy = state.universe.galaxies.find(galaxy => galaxy.id === galaxyId);
    if (!exists(galaxy)) throw new Error(`GalaxySelector: Galaxy does not exist with id ${galaxyId}`);
    return galaxy;
}

export const selectStar = (state: RootState, galaxyId: string, starId: string) => {
    const galaxy = selectGalaxy(state, galaxyId);
    const star = galaxy.stars.find(star => star.id === starId);
    if (!exists(star)) throw new Error(`StarSelector: Star does not exist with id ${starId} in galaxy with id ${galaxyId}`);
    return star;

}
export const selectPlanet = (state: RootState, galaxyId: string, starId: string, planetId: string) => {
    const star = selectStar(state, galaxyId, starId);
    const planet = star.planets.find(planet => planet.id === planetId);
    if (!exists(planet)) throw new Error(`PlanetSelector: Planet does not exist with id ${planetId} in star with id ${starId} in galaxy with id ${galaxyId}`);
    return planet;
}