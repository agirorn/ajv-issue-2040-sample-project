import { validate } from '../src/index'

describe("Test key types", () => {
  test("key can be a string", () => {
    expect(validate({ key: "TEXT" })).toBe(true);
  });

  test("key can be undefined", () => {
    expect(validate({})).toBe(true);
    expect(validate({ key: undefined })).toBe(true);
  });

  test("key can not be null", () => {
    expect(validate({ key: null })).toBe(false);
  });

  test("key can not be a number", () => {
    expect(validate({ key: 123 })).toBe(false);
  });
});
