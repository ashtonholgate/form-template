import {
  generateCriticalValidationError,
  generateLowValidationError,
  generateWarningValidationError,
} from "../utilities/form.utilities";

export const WARNING_VALIDATION_ERROR = generateWarningValidationError();
export const LOW_VALIDATION_ERROR = generateLowValidationError();
export const CRITICAL_VALIDATION_ERROR = generateCriticalValidationError();

export const LOW_REQUIRED_VALIDATION_ERROR =
  generateLowValidationError("Required");
