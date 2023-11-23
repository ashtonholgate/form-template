export enum ValidationErrorSeverity {
  None = 0,
  Warning = 100,
  Low = 200,
  Critical = 300,
}

export type WarningValidationError = {
  severity: ValidationErrorSeverity.Warning;
  message: string;
};

export type LowValidationError = {
  severity: ValidationErrorSeverity.Low;
  message: string;
};

export type CriticalValidationError = {
  severity: ValidationErrorSeverity.Critical;
  message: string;
};

export type ValidationError =
  | WarningValidationError
  | LowValidationError
  | CriticalValidationError
  | null;

export type ValidationErrors<T> = {
  [K in keyof T]: ValidationError;
};
