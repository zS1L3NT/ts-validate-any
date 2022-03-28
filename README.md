# Validate Any

![License](https://img.shields.io/github/license/zS1L3NT/ts-npm-validate-any?style=for-the-badge) ![Languages](https://img.shields.io/github/languages/count/zS1L3NT/ts-npm-validate-any?style=for-the-badge) ![Top Language](https://img.shields.io/github/languages/top/zS1L3NT/ts-npm-validate-any?style=for-the-badge) ![Commit Activity](https://img.shields.io/github/commit-activity/y/zS1L3NT/ts-npm-validate-any?style=for-the-badge) ![Last commit](https://img.shields.io/github/last-commit/zS1L3NT/ts-npm-validate-any?style=for-the-badge)

Validate Any is a type validator mainly for Typescript (also works with Javascript) available [here](https://npmjs.org/package/validate-any). Ever faced those issues where you're trying to make sure a type `any` is an instance of an interface? This is the issue this package was designed to solve. With this package, you can safely assert the type for an object and return customised errors if the types are incorrect.

## Motivation

I hate it when I am unable to validate the request types of JSON objects in Express requests. I wanted to be able to reject a request before my request handlers used the request body. I also didn't like casting the type of the body in the request.

## Features

-   `validate` function to validate the data type of a variable
-   Validate Any can read the function types of
    -   Strings
    -   Numbers
    -   Booleans
    -   Undefined
    -   Null
    -   Lists
    -   Objects
    -   Classes
-   Validate Any is built to automatically return you the typescript annotations generated by the schema you pass, [in the `data` property](#validate-returns-an-object-containing)
-   [Detailed error messages](#iValidationError-is-the-data-type-for-an-error) to tell you where any validation errors occured
-   [API Middleware](#Using-withValidBody-with-Express-or-Next) to simplify its usage with Express or NextJS

## Testing

Validate Any's individual validators are tested with Jest. To run the tests, run the command

```
$ npm run test
```

## Built with

-   TypeScript
    -   [![@types/jest](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/dev/@types/jest?style=flat-square)](https://npmjs.com/package/@types/jest)
    -   [![typescript](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/dev/typescript?style=flat-square)](https://npmjs.com/package/typescript)
-   Jest
    -   [![@babel/core](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/dev/@babel/core?style=flat-square)](https://npmjs.com/package/@babel/core)
    -   [![@babel/preset-env](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/dev/@babel/preset-env?style=flat-square)](https://npmjs.com/package/@babel/preset-env)
    -   [![@babel/preset-typescript](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/dev/@babel/preset-typescript?style=flat-square)](https://npmjs.com/package/@babel/preset-typescript)
    -   [![jest](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/dev/jest?style=flat-square)](https://npmjs.com/package/jest)
-   Miscellaneous
    -   [![js-beautify](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/js-beautify?style=flat-square)](https://npmjs.com/package/js-beautify)
    -   [![vuepress](https://img.shields.io/github/package-json/dependency-version/zS1L3NT/ts-npm-validate-any/dev/vuepress?style=flat-square)](https://npmjs.com/package/vuepress)
