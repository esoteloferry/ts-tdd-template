# Typescript - Jest - Webpack template

🌓Compatible to compile `.ts` and `.js` files (if you had previous work done in js).  
🔥TDD config out of the box, create your tests and start coding.

For compilation to browser, see branch 2_Add_webpack

This setup uses [three.js](https://threejs.org/) as a 3rd party package.  
The idea was to learn how to include this package, no 3D will be shown,  
just to check that transpiled code does not crash.

## Play around

- npm run test --> test!
- npx tsc --> transpile your ts (and js) to js!

A note, I also tested my transpiled code by running `node dist/main.js`, useful to see if the "production" code is ok.  
And in this case, the added threejs code does not make crash the code.
