/**
 * Represents the structure of a custom error.
 */
export type ErrorType = {
  id?: string;
  message: string;
};

/**
 * Represents a function that constructs a custom error.
 */
type ErrorConstruct = (props: ErrorType) => Error;

/**
 * Represents a function that parses a custom error.
 */
type ErrorParser = (error: Error) => ErrorType;

/**
 * Represents a function that logs a message to the console for debugging purposes.
 */
type TryCatch = <T, G>(fn: () => T, errFn: (error: unknown) => G) => T | G;

/**
 * Constructs a custom error with optional properties.
 * @param {ErrorType} { id, message } - The properties of the error.
 * @returns {Error} - The constructed custom error.
 */
export const customError: ErrorConstruct = ({ id = "internal", message }) => {
  return new Error(JSON.stringify({ id, message }));
};

/**
 * Parses a custom error and returns its properties.
 * @param {Error} error - The custom error to parse.
 * @returns {ErrorType} - The parsed error properties.
 * @throws {ErrorType} - Throws a custom error if parsing fails.
 */
export const errorParser: ErrorParser = (error: Error) => {
  try {
    return JSON.parse(error.message) as ErrorType;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw customError({ id: 'Error', message: err.message });
    }
    return { id: 'Error', message: 'Internal error - errorParser() function.' } as ErrorType;
  }
};

/**
 * Logs a message to the console for debugging purposes, based on a specified status.
 * @param {string} log - The message to log.
 * @param {boolean} [status=false] - The status indicating whether to log the message.
 */
export const customDebug = (log: string, status: boolean = false) => {
  status && console.debug(log);
};

/**
 * Tries to execute a function and returns its result, or executes an error function and returns its result.
 * @param {() => T} fn - The function to execute.
 * @param {(error: unknown) => G} errFn - The error function to execute.
 * @returns {T | G} - The result of the executed function or error function.
 */
export const tryCatch: TryCatch = (fn, errFn) => {
  try {
    return fn();
  } catch (err: unknown) {
    return errFn(err);
  }
}