const generateManagerCard = (manager) => {
  return `
    <div>
      <div class="managerbox">
        <div>
          <h3>${manager.name}</h3>
          <h4>Manager</h4>
        </div>
        <div>
          <p>ID: ${manager.id}</p>
          <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p>Office Number: ${manager.officeNum}</p>
        </div>
      </div>
    </div>
  `;
};

const generateEngineerCard = (engineer) => {
  return `
    <div>
      <div class="engineerbox">
        <div>
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4>
        </div>
        <div>
          <p>ID: ${engineer.id}</p>
          <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
      </div>
    </div>
  `;
};

const generateInternCard = (intern) => {
  return `
    <div>
      <div class="internbox">
        <div>
          <h3>${intern.name}</h3>
          <h4>Intern</h4>
        </div>
        <div>
          <p>ID: ${intern.id}</p>
          <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          <p>School: ${intern.school}</p>
        </div>
      </div>
    </div>
  `;
};

const generateHTML = (data) => {
  const employeeCards = data.map((employee) => {
    const role = employee.getRole();
    switch (role) {
      case 'Manager':
        return generateManagerCard(employee);
      case 'Engineer':
        return generateEngineerCard(employee);
      case 'Intern':
        return generateInternCard(employee);
      default:
        return '';
    }
  }).join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Software Engineers Page</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <header>
          <nav class="navbar">
            <span>Software Team</span>
          </nav>
        </header>
        <main>
          <div class="container">
            <div class="boxes">
              ${employeeCards}
            </div>
          </div>
        </main>
      </body>
    </html>
  `;

  return html;
};

module.exports = { generateHTML };

