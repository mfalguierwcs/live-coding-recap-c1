const swData = require("./json/data.json");
const findMovieUrlByTitle = require("./array.js");

console.log(swData.results)

describe("array", () => {
    it("Should be loaded", () => {
      expect(true).toBe(true);
    });
  
    it("Should return kOVEVeg59E0wsnXmF9nrh6OmWII", () => {
      expect(findMovieUrlByTitle(swData.results, "Star Wars: The Last Jedi")).toBe("/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg");
    });
})