import { CONTENT_LIST, MOVIES_ENDPOINT } from "../constants";
import { fetchData } from "./fetchData";
import fetch from "fetch";

describe("testing fetchData call", () => {
  const { method, endpoint } = MOVIES_ENDPOINT;
  test("that it fetches the data correctly", async () => {
    const result = await fetchData(CONTENT_LIST[0], endpoint, method);
    expect(result).toEqual({});
  });

  test("that it throws an error when status is not 200", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        status: 404,
      })
    );

    try {
      await fetchData("fake category", endpoint, method);
    } catch (error) {
      expect(error.message).toEqual("404");
    }
  });

  test("that it throws an error when empty arguments", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        status: 404,
      })
    );

    try {
      await fetchData();
    } catch (error) {
      expect(error.message).toEqual("404");
    }
  });

  afterEach(() => {
    fetch.mockClear();
  });
});
