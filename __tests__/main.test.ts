import { main } from "../src/main";

test("Main test input 2", () => {
  expect(main(2)).toBe("Result square is 4 and cubic is 8");
});
