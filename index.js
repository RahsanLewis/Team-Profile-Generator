const fs = require('fs');
const inquirer = require('inquirer');
const { generateHTML } = require('./src/generator');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const softwareTeamArray = [];

async function addManager() {
  const { name, id, email, officeNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the Managers name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the Managers ID number:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the Managers Email:',
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Enter the Managers Office Number:',
    },
  ]);

  const manager = new Manager(name, id, email, officeNum);
  softwareTeamArray.push(manager);
  shouldAdd();
}

async function shouldAdd() {
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Would you like to add another employee?',
    },
  ]);

  if (confirm) {
    addEmployee();
  } else {
    const html = generateHTML(softwareTeamArray);
    fs.writeFile('dist/test.html', html, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

async function addEmployee() {
  const { role, name, id, email, github, school } = await inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Choose the employees position',
      choices: ['Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the Employees name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the Employees ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the Employees email:',
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter the Employee's github username:",
      when: (input) => input.role === 'Engineer',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the Interns school:',
      when: (input) => input.role === 'Intern',
    },
  ]);

  const employee = role === 'Engineer' ? new Engineer(name, id, email, github) : new Intern(name, id, email, school);
  softwareTeamArray.push(employee);
  shouldAdd();
}

addManager();
