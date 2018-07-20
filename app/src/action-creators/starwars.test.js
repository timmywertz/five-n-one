import { SET_STARWARSNAMES } from "../constants";
import { setStarWarsNames } from "./starwars";

test("get and dispatch starwars names from the API server", () => {
  function mockDispatch(action) {
    expect(action.type).toBe("SET_STARWARSNAMES");
    expect(action.payload.length).toBeGreaterThan(0);
  }
  setStarWarsNames(mockDispatch);
});
