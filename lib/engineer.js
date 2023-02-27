const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  setGithub(value) {
    this.github = value;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
