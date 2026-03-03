import { describe, it, expect } from "vitest";
import { validateImdbId } from "@/utils/validateImdb";

describe("IMDb ID Validation", () => {
  it("should validate correct IMDb IDs", () => {
    expect(validateImdbId("tt0133093")).toBe(true);
    expect(validateImdbId("tt0111161")).toBe(true);
  });

  it("should reject invalid IMDb IDs", () => {
    expect(validateImdbId("0133093")).toBe(false);
    expect(validateImdbId("ttABC1234")).toBe(false);
    expect(validateImdbId("tt123")).toBe(false);
    expect(validateImdbId("")).toBe(false);
  });
});

