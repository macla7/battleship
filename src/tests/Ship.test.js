import Ship from "../logic/Ship";

test("ship to have length prop", () => {
  expect(Ship).toHaveProperty("length");
});

test("ship to have hit prop", () => {
  expect(Ship).toHaveProperty("hit");
});

test("ship to have sunk prop", () => {
  expect(Ship).toHaveProperty("sunk");
});
