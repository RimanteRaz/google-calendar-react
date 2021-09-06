import crypto from "crypto";
import fetchMock from "jest-fetch-mock";

Object.defineProperty(global, "crypto", {
  value: {
    getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
  },
});

fetchMock.enableMocks();
