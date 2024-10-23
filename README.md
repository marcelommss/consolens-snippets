# consolens-snippets

**consolens-snippets** is a VS Code extension providing a collection of useful snippets for enhancing your productivity while using the Consolens package. This extension offers ready-to-use log templates, helping you boost development speed by quickly inserting commonly used logging code into your JavaScript and TypeScript files.

NPM consolens package: https://www.npmjs.com/package/consolens

Install consolens package by:
```` bash
npm install consolens
or
yarn add consolens
or
pnpm install consolens
````

## Features

This extension includes a variety of snippets for logging and debugging, tailored specifically for the Consolens package.

## Release Notes

### 1.0.0 - Available Snippets

Here are the snippets you can use:

| Prefix         | Snippet Description                        | Language               |
| -------------- | ------------------------------------------ | ---------------------- |
| `loginfo`      | Logs an informational message - 3 variants | JavaScript, TypeScript |
| `logwarn`      | Logs a warning message - 3 variants        | JavaScript, TypeScript |
| `logerror`     | Logs an error message - 3 variants         | JavaScript, TypeScript |
| `loglens`      | Create a log automatically identified      | JavaScript, TypeScript |
| `consolog`     | Logs a message using Consolens             | JavaScript, TypeScript |
| `consolens`    | Createas a complete log                    | JavaScript, TypeScript |
| `consolinfo`   | Logs a complete info message               | JavaScript, TypeScript |
| `consolwarn`   | Logs a complete warning message            | JavaScript, TypeScript |
| `consolerror`  | Logs a complete error message              | JavaScript, TypeScript |
| `logcallout`   | Logs a callout message                     | JavaScript, TypeScript |
| `logheader`    | Logs a styled header                       | JavaScript, TypeScript |
| `logh1`        | Logs a header (H1 style)                   | JavaScript, TypeScript |
| `logh2`        | Logs a header (H2 style)                   | JavaScript, TypeScript |
| `logh3`        | Logs a header (H3 style)                   | JavaScript, TypeScript |
| `logh4`        | Logs a header (H4 style)                   | JavaScript, TypeScript |
| `logh5`        | Logs a header (H5 style)                   | JavaScript, TypeScript |
| `logdiv`       | Logs a divider                             | JavaScript, TypeScript |

### Usage

1. Open a JavaScript or TypeScript file in VS Code.
2. Start typing one of the prefixes from the list above (e.g., `loglens`).
3. Select the snippet from the IntelliSense dropdown or press `Tab` to expand it.
4. The first `Tab` you can use to import consolens package, if not, with  `ctrl + .`
5. Then you can navigate through the parameters with `Tab`

The snippet will be inserted at the current cursor location, providing you with a ready-to-use template for your logging needs.
