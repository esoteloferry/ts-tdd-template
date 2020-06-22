module.exports = {
  //Include ts and js(js is optional if you need to use old code)
  //Somehow the default preset: ts-jest does not work well with js files
  transform: {
    "^.+\\.(ts|js)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
};
