import { Galaxy, Star, Planet, Universe } from "../../../models/galaxy.models";
import {
  ValidationError,
  ValidationErrorSeverity,
  ValidationErrors,
} from "../../../models/validation.models";
import { generateWarningValidationError, getHighestSeverity } from "../../../utilities/validation.utilities";
import { exists } from "../../../utilities/value.utilities";
import { LOW_REQUIRED_VALIDATION_ERROR } from "../../../values/validation.values";

export const validateGalaxy = (galaxy: Galaxy): ValidationErrors<Galaxy> => ({
  name: exists(galaxy.name) ? null : LOW_REQUIRED_VALIDATION_ERROR,
});

export const validateStar = (star: Star): ValidationErrors<Star> => {
  let name: ValidationError = null;
  if (!exists(star.name)) name = LOW_REQUIRED_VALIDATION_ERROR;
  else if (star.name.length < 10) name = generateWarningValidationError(`Must be 10 characters. Is only ${star.name.length} characters`);
  return { name };
};

export const validatePlanet = (planet: Planet): ValidationErrors<Planet> => ({
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
