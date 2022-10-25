const soustraction = require("./operation.js");

describe("soustraction", () => {
    it("Should be loaded", () => {
      expect(true).toBe(true);
    });
  
    it("Should return false", () => {
      expect(soustraction(2, 6)).toBe(false);
    });

    it("Should return 4", () => {
      expect(soustraction(10, 6)).toBe(4);
    });

    it("Should return false", () => {
      expect(soustraction("", 6)).toBe(false);
    });

    it("Should return false", () => {
      expect(soustraction("a", 6)).toBe(false);
    });
})