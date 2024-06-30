import { configureStore, Middleware } from "@reduxjs/toolkit";
import { NyTimesApi } from "../services/nyTimesApi";
import articlesReducer from "./articlesSlice";

jest.mock("./articlesSlice", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../services/nyTimesApi", () => ({
  NyTimesApi: {
    reducer: jest.fn(),
    middleware: jest.fn(),
  },
}));

jest.mock("@reduxjs/toolkit", () => ({
  configureStore: jest.fn(),
}));

describe("store configuration", () => {
  beforeAll(() => {
    require("./store");
  });

  it("should configure the store", () => {
    const mockMiddleware: Middleware<{}> = () => (next) => (action) => {
      return next(action);
    };

    (NyTimesApi.middleware as jest.Mock).mockReturnValue(mockMiddleware);

    const expectedStoreConfig = {
      reducer: {
        [NyTimesApi.reducerPath]: NyTimesApi.reducer,
        articles: articlesReducer,
      },
      middleware: expect.any(Function),
    };

    expect(configureStore).toHaveBeenCalledWith(
      expect.objectContaining(expectedStoreConfig),
    );
  });
});
