const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer('Tim', '27', 'tim@abc.com', 'testgithub');
      expect(engineer.getRole()).toBe('Engineer');
    });
  });
  
  describe("getGithub", () => {
    it("should return the Github username", () => {
      const engineer = new Engineer('Tim', '27', 'tim@abc.com', 'testgithub');
      expect(engineer.getGithub()).toBe('testgithub');
    });
  });
});
