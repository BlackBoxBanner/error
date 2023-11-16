// Import the functions to be tested
import { customError, errorParser, customDebug } from '../src'; // Replace 'yourModule' with the actual module/file name

// Test customError function
describe('customError', () => {
  it('should create a custom error with default id', () => {
    const error = customError({ message: 'Test error message' });
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual(JSON.stringify({ id: 'internal', message: 'Test error message' }));
  });

  it('should create a custom error with specified id', () => {
    const error = customError({ id: 'customId', message: 'Test error message' });
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual(JSON.stringify({ id: 'customId', message: 'Test error message' }));
  });
});

// Test errorParser function
describe('errorParser', () => {
  it('should parse a valid custom error', () => {
    const inputError = new Error(JSON.stringify({ id: 'customId', message: 'Test error message' }));
    const parsedError = errorParser(inputError);
    expect(parsedError).toEqual({ id: 'customId', message: 'Test error message' });
  });

  it('should throw a custom error for invalid input', () => {
    const invalidInputError = new Error('Invalid JSON');
    expect(() => errorParser(invalidInputError)).toThrowErrorMatchingSnapshot();
  });
});

// Test customDebug function
describe('customDebug', () => {
  // Mock console.debug for testing
  const consoleDebugMock = jest.spyOn(console, 'debug').mockImplementation(() => {});

  // Clear the mock calls before each test
  beforeEach(() => {
    consoleDebugMock.mockClear();
  });

  it('should log the message when status is true', () => {
    customDebug('Test debug message', true);
    expect(consoleDebugMock).toHaveBeenCalledWith('Test debug message');
  });

  it('should not log the message when status is false', () => {
    customDebug('Test debug message', false);
    expect(consoleDebugMock).not.toHaveBeenCalled();
  });

  // Restore the original console.debug function after testing
  afterAll(() => {
    consoleDebugMock.mockRestore();
  });
});

