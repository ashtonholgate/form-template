import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EditableKeysOfGalaxy, EditableKeysOfStar, EditableKeysOfPlanet, Universe } from "../models/universe.models";
import {
  AddGalaxyPayload,
  AddPlanetPayload,
  AddStarPayload,
  RemoveGalaxyPayload,
  RemovePlanetPayload,
  RemoveStarPayload,
  UpdateGalaxyPayload,
  UpdatePlanetPayload,
  UpdateStarPayload,
} from "../models/slice.models";
import { getGalaxy, getPlanet, getStar } from "./navigators";

export type UniverseState = Universe;

const initialState: UniverseState = {
  galaxies: [],
};

export const universeSlice = createSlice({
  name: "universe",
  initialState,
  reducers: {
    addGalaxy: (
      state: UniverseState,
      action: PayloadAction<AddGalaxyPayload>
    ) => {
      state.galaxies.push(action.payload.galaxy);
    },
    removeGalaxy: (
      state: UniverseState,
      action: PayloadAction<RemoveGalaxyPayload>
    ) => {
      const galaxyIndex = state.galaxies.findIndex(
        (galaxy) => galaxy.id === action.payload.galaxyId
      );
      state.galaxies.splice(galaxyIndex, 1);
    },
    changeGalaxy: <K extends keyof EditableKeysOfGalaxy>(
      state: UniverseState,
      action: PayloadAction<UpdateGalaxyPayload<K>>
    ) => {
      const { galaxyId, key, value } = action.payload;
      const galaxy = getGalaxy(state, galaxyId);
      galaxy[key] = value;
    },
    addStar: (state, action: PayloadAction<AddStarPayload>) => {
      const { galaxyId, star } = action.payload;
      const galaxy = getGalaxy(state, galaxyId);
      galaxy.stars.push(star);
    },
    removeStar: (
      state: UniverseState,
      action: PayloadAction<RemoveStarPayload>
    ) => {
      const { galaxyId, starId } = action.payload;
      const galaxy = getGalaxy(state, galaxyId);
      const starIndex = galaxy.stars.findIndex((star) => star.id === starId);
      galaxy.stars.splice(starIndex, 1);
    },
    changeStar: <K extends keyof EditableKeysOfStar>(
      state: UniverseState,
      action: PayloadAction<UpdateStarPayload<K>>
    ) => {
      const { galaxyId, starId, key, value } = action.payload;
      const star = getStar(state, galaxyId, starId);
      star[key] = value;
    },
    addPlanet: (state, action: PayloadAction<AddPlanetPayload>) => {
      const { galaxyId, starId, planet } = action.payload;
      const star = getStar(state, galaxyId, starId);
      star.planets.push(planet);
    },
    removePlanet: (
      state: UniverseState,
      action: PayloadAction<RemovePlanetPayload>
    ) => {
      const { galaxyId, starId, planetId } = action.payload;
      const star = getStar(state, galaxyId, starId);
      const planetIndex = star.planets.findIndex(
        (planet) => planet.id === planetId
      );
      star.planets.splice(planetIndex, 1);
    },
    changePlanet: <K extends keyof EditableKeysOfPlanet>(
      state: UniverseState,
      action: PayloadAction<UpdatePlanetPayload<K>>
    ) => {
      const { galaxyId, starId, planetId, key, value } = action.payload;
      const planet = getPlanet(state, galaxyId, starId, planetId);
      planet[key] = value;
    },
  },
});

export const {
  addGalaxy,
  removeGalaxy,
  changeGalaxy,
  addStar,
  removeStar,
  changeStar,
  addPlanet,
  removePlanet,
  changePlanet,
} = universeSlice.actions;

export default universeSlice.reducer;
