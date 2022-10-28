# @thedevdesigner Helper Modules

A collection of commonly used helper modules written in TypeScript

## Inspiration/Motivation

While working on projects, there are times when I write same/similar code that I had written many times before. Therefore, it only made sense to create a helper package to get out of this loop of writing the same code again and again, to improve productivity and adopt the modular approach.

## Tech Stack

1. Node
2. TypeScript
3. Jest

## Usage

1. Install by running `npm i @thedevdesigner/helper-modules@latest`
2. Use the modules by bringing it in your code, by using either the `import` syntax, or the `require` keyword.

```typescript
// by using the import syntax
import { EncryptDecrypt } from '@thedevdesigner/helper-modules'
// by using require keyword
const { EncryptDecrypt } = require('@thedevdesigner/helper-modules')
```
