# DookDiks - Error

## Overview

DookDiks - Error is a TypeScript library that provides utilities for working with custom errors, error parsing, and debugging. It is designed to simplify error handling and enhance debugging capabilities in TypeScript projects.

## Wallaby.js

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

This repository contributors are welcome to use
[Wallaby.js OSS License](https://wallabyjs.com/oss/) to get
test results immediately as you type, and see the results in
your editor right next to your code.

## Features

- **Custom Error Construction**: Easily create custom errors with customizable properties such as ID and message.
- **Error Parsing**: Parse custom errors to extract their properties in a structured format.
- **Debugging Support**: Includes a debugging function (`customDebug`) to log messages to the console based on a specified status.

## Installation

To install DookDiks - Error, you can use npm:

```bash
npm i @dookdiks/error
```

## Usage

### Importing the Library

```typescript
import { customError, errorParser, customDebug } from '@dookdiks/error';
```

### Example Usage

#### Custom Error Construction

```typescript
const myCustomError = customError({ id: 'customId', message: 'This is a custom error' });
throw myCustomError;
```

#### Error Parsing

```typescript
try {
  // some code that may throw a custom error
} catch (error) {
  const parsedError = errorParser(error);
  console.log(parsedError);
}
```

#### Debugging

```typescript
const debugMessage = 'Debug message';
const debugStatus = true;

customDebug(debugMessage, debugStatus);
```

## Contributing

If you would like to contribute to DookDiks - Error, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

DookDiks - Error is licensed under the [MIT License](LICENSE).

## Contact

For issues, questions, or suggestions, please create an issue on the [GitHub repository](https://github.com/DookDiks/error/issues).

---

Feel free to customize the sections based on the specific details of your project. Add or modify sections as needed to provide comprehensive information to potential users and contributors.