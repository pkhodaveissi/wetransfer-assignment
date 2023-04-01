
# WeTransfer Assignment

This repository contains the code for the WeTransfer Assignment.

## Usage

To use this code, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can clone this repository and install the necessary dependencies by running the following commands:
 
    wetransfer-assignment
    yarn install
Once the dependencies are installed, you can run the code by executing the following command:

    yarn start

This will start the server on port 3000, and you can access it by navigating to `http://localhost:3000` in your web browser.

## Scripts

This project includes several scripts that you can run using `npm run <script name>`:

-   `start`: Starts the development server
-   `build`: Builds the project for production
-   `test`: Runs the tests for the project using Jest
-   `eject`: Ejects the project from `react-scripts`, which allows you to customize the configuration
-   `lint`: Runs ESLint to check for any syntax errors or style issues
-   `lint:fix`: Runs ESLint and fixes any syntax errors or style issues
-   `format`: Formats the code using Prettier

Note that before running the tests, you will need to set the `NODE_ENV` environment variable to `test`. You can do this by running `export NODE_ENV=test` on Linux/Mac or `set NODE_ENV=test` on Windows.


## Dependencies

-   `@tanstack/react-query`: ^4.28.0 - A powerful and easy-to-use data fetching library for React.
-   `axios`: ^1.3.4 - A promise-based HTTP client for the browser and Node.js.
-   `loader-utils`: 3.2.1 - A utility library for loading modules and assets.
-   `localforage`: ^1.10.0 - A library for offline storage, improving the offline experience of web applications. Used by `react-router`
-   `match-sorter`: ^6.3.1 - A library for sorting and filtering through collections of data. Used by `react-router`
-   `react`: 18.2.0 - A JavaScript library for building user interfaces.
-   `react-dom`: 18.2.0 - A package that provides DOM-specific methods for React.
-   `react-router-dom`: ^6.10.0 - A collection of routing components for React.
-   `react-scripts`: 5.0.1 - A set of scripts and configuration used by Create React App.
-   `sort-by`: ^1.2.0 - A library for sorting an array of objects by one or more properties. Used by `react-router`

## Development Dependencies

-   `@types/react`: 18.0.25 - TypeScript type definitions for React.
-   `@types/react-dom`: 18.0.9 - TypeScript type definitions for React DOM.
-   `@typescript-eslint/eslint-plugin`: ^5.57.0 - An ESLint plugin that provides TypeScript-specific linting rules.
-   `@typescript-eslint/parser`: ^5.57.0 - An ESLint parser that allows ESLint to understand TypeScript syntax.
-   `eslint`: ^8.37.0 - A JavaScript/TypeScript linter that helps identify and report on patterns in the code.
-   `eslint-config-prettier`: ^8.8.0 - An ESLint configuration that turns off all rules that are unnecessary or might conflict with Prettier.
-   `eslint-import-resolver-typescript`: ^3.5.4 - A plugin that allows import statements in TypeScript to be resolved correctly.
-   `eslint-plugin-import`: ^2.27.5 - An ESLint plugin that provides linting rules for import and export statements.
-   `eslint-plugin-prettier`: ^4.2.1 - An ESLint plugin that integrates Prettier and runs it as an ESLint rule.
-   `eslint-plugin-react`: ^7.32.2 - An ESLint plugin that provides linting rules for React applications.
-   `eslint-plugin-react-hooks`: ^4.6.0 - An ESLint plugin that provides linting rules for React hooks.
-   `prettier`: ^2.8.7 - An opinionated code formatter that ensures code is consistently styled.
-   `typescript`: 4.4.2 - A language that builds on JavaScript by adding static type definitions.
-    `tailwindcss`: 3.3.1: A utility-first CSS framework for rapidly building custom user interfaces.