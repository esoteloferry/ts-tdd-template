# Typescript - Jest - Webpack template

🌓Compatible to compile `.ts` and `.js` files (if you had previous work done in js).
🔥TDD config out of the box, create your tests and start coding.
🌟Build a `bundle.js` and deliver to web.

This setup uses [three.js](https://threejs.org/) as a 3rd party package. The idea was to learn how to include this package.

## Play around

- npm run test --> test!
- npm run build --> create your bundle
- npm run dev --> see your changes👀

A note on the bundle created, mode is in production and size got reduced to half compared to development mode.
A note on `npx tsc`, when paths is used (see @Entities in tsconfig.json) the command `npx tsc` does not replace the @Entities path.
