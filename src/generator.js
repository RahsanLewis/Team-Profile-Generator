const path = require('path');
const fs = require('fs');

// Define a function to generate an HTML file based on the team member data
function generateHTML(teamMembers) {
  
  const templatesDir = path.resolve(__dirname, '../templates');

  const managerTemplate = fs.readFileSync(
    path.resolve(templatesDir, 'manager.html'),
    'utf8'
  );
  const engineerTemplate = fs.readFileSync(
    path.resolve(templatesDir, 'engineer.html'),
    'utf8'
  );
  const internTemplate = fs.readFileSync(
    path.resolve(templatesDir, 'intern.html'),
    'utf8'
  );

  const renderEmployee = (employee) => {
    switch (employee.role) {
      case 'Manager':
        return managerTemplate
          .replace('{{ name }}', employee.name)
          .replace('{{ id }}', employee.id)
          .replace('{{ email }}', employee.email)
          .replace('{{ officeNumber }}', employee.officeNumber);
      case 'Engineer':
        return engineerTemplate
          .replace('{{ name }}', employee.name)
          .replace('{{ id }}', employee.id)
          .replace('{{ email }}', employee.email)
          .replace('{{ github }}', employee.github);
      case 'Intern':
        return internTemplate
          .replace('{{ name }}', employee.name)
          .replace('{{ id }}', employee.id)
          .replace('{{ email }}', employee.email)
          .replace('{{ school }}', employee.school);
      default:
        throw new Error(`Invalid employee type: ${employee.role}`);
    }
  };

  const employeeHTML = teamMembers.map(renderEmployee).join('');
  const finalHTML = fs.readFileSync(
    path.resolve(templatesDir, 'main.html'),
    'utf8'
  ).replace('{{ team }}', employeeHTML);

  return finalHTML;
}

module.exports = { generateHTML };
