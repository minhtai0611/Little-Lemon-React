// Main.test.js
import { initializeTimes, updateTimes } from "./Main"; // adjust path
import { fetchAPI } from "./Main";

jest.mock("./Main", () => {
  const originalModule = jest.requireActual("./Main");
  return {
    __esModule: true,
    ...originalModule,
    fetchAPI: jest.fn(() => ["17:00", "18:30"]),
  };
});

describe("initializeTimes function", () => {
  test("returns expected initial state", () => {
    const result = initializeTimes();
    expect(result).toHaveProperty("availableTimes");
    expect(result.availableTimes).toEqual(["17:00", "18:30"]);
  });
});

describe("updateTimes function", () => {
  test("returns new available times from fetchAPI", () => {
    const initialState = { availableTimes: [] };
    const date = new Date();
    const newState = updateTimes(initialState, date);
    expect(newState).toHaveProperty("avaiableTimes");
    expect(newState.avaiableTimes).toEqual(["17:00", "18:30"]);
  });
});
