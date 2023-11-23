import { Galaxy, Star, Planet, Universe, EditableKeysOfGalaxy, EditableKeysOfStar, EditableKeysOfPlanet } from "../models/universe.models";
import {
  ValidationError,
  ValidationErrorSeverity,
  ValidationErrors,
} from "../../../models/form.models";
import { generateWarningValidationError, getHighestSeverity } from "../../../utilities/form.utilities";
import { exists } from "../../../utilities/value.utilities";
import { LOW_REQUIRED_VALIDATION_ERROR } from "../../../values/validation.values";

export const validateGalaxy = (galaxy: Galaxy): ValidationErrors<EditableKeysOfGalaxy> => ({
  name: exists(galaxy.name) ? null : LOW_REQUIRED_VALIDATION_ERROR,
});

export const validateStar = (star: Star): ValidationErrors<EditableKeysOfStar> => {
  let name: ValidationError = null;
  if (!exists(star.name)) name = LOW_REQUIRED_VALIDATION_ERROR;
  else if (star.name.length < 10) name = generateWarningValidationError(`Must be 10 characters. Is only ${star.name.length} characters`);
  return { name };
};

export const validatePlanet = (planet: Planet): ValidationErrors<EditableKeysOfPlanet> => ({
  name: exists(planet.name) ? null : LOW_REQUIRED_VALIDATION_ERROR,
});

export const getHighestUniverseSeverity = (
  universe: Universe
): ValidationErrorSeverity | null => {
  let highestSeverity: ValidationErrorSeverity = ValidationErrorSeverity.None;
  universe.galaxies.forEach((galaxy) => {
    const errors = validateGalaxy(galaxy);
    highestSeverity = getHighestSeverity([errors.name, highestSeverity]);
    galaxy.stars.forEach((star) => {
      const errors = validateStar(star);
      highestSeverity = getHighestSeverity([errors.name, highestSeverity]);
      star.planets.forEach((planet) => {
        const errors = validatePlanet(planet);
        highestSeverity = getHighestSeverity([errors.name, highestSeverity]);
      });
    });
  });
  return highestSeverity;
};
