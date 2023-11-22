import { CriticalValidationError, ValidationErrorSeverity, LowValidationError, WarningValidationError, ValidationError } from "../models/validation.models";
import { exists } from "./value.utilities";

export const generateWarningValidationError = (message: string = "Warning"): WarningValidationError => ({
    severity: ValidationErrorSeverity.Warning,
    message
});

export const generateLowValidationError = (message: string = "Low"): LowValidationError => ({
    severity: ValidationErrorSeverity.Low,
    message
});

export const generateCriticalValidationError = (message: string = "Critical"): CriticalValidationError => ({
    severity: ValidationErrorSeverity.Critical,
    message
});

function isValidationErrorSeverity(object: ValidationError | ValidationErrorSeverity): object is ValidationErrorSeverity {
    return !!ValidationErrorSeverity[object as number];
  }

export const getHighestSeverity = (errors: (ValidationError | ValidationErrorSeverity)[]): ValidationErrorSeverity => {
    let highestSeverity = ValidationErrorSeverity.None;
    errors.forEach(error => {
        if (isValidationErrorSeverity(error) && error > highestSeverity) highestSeverity = error;
        if (!isValidationErrorSeverity(error) && exists(error) && error.severity > highestSeverity) highestSeverity = error.severity;
    })
    return highestSeverity;
}