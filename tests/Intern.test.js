const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('getRole', () => {
    it('should return "Intern"', () => {
      const intern = new Intern('Tim', '27', 'tim@abc.com', 'UPenn');
      expect(intern.getRole()).toEqual('Intern');
    });
  });

  describe('getSchool', () => {
    it('should return the interns school', () => {
      const intern = new Intern('Tim', '27', 'tim@abc.com', 'UPenn');
      expect(intern.getSchool()).toEqual('UPenn');
    });
  });
});
