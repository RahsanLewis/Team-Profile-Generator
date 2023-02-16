const inquirer = require('inquirer');
const fs = require('fs');
const { generateHTML } = require('./src/generator'); // assuming you have a separate file for generating the HTML

// Array to store team members
const teamMembers = [];

// Define a function to prompt for the team manager's information
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        },
    ]);
}

// Define a function to prompt for an engineer's information
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
        },
    ]);
}

// Define a function to prompt for an intern's information
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        },
    ]);
}

// Define a function to prompt for a new team member
function promptTeamMember() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'What type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Manager',
                'I do not want to add any more team members',
            ],
        },
    ]);
}

// To run the application
async function run() {
    try {
        // Prompt for the team manager's information
        const managerInfo = await promptManager();
        const manager = {
            name: managerInfo.name,
            id: managerInfo.id,
            email: managerInfo.email,
            officeNumber: managerInfo.officeNumber,
            role: 'Manager',
        };
        teamMembers.push(manager);

        // Prompt for additional team members
        let done = false;
        while (!done) {
            const { type } = await promptTeamMember();

            switch (type) {
                case 'Engineer':
                    const engineerInfo = await promptEngineer();
                    const engineer = {
                        name: engineerInfo.name,
                        id: engineerInfo.id,
                        email: engineerInfo.email,
                        github: engineerInfo.github,
                        role: 'Engineer',
                    };
                    teamMembers.push(engineer);

                    break;
                case 'Intern':
                    const internInfo = await promptIntern();
                    const intern = {
                        name: internInfo.name,
                        id: internInfo.id,
                        email: internInfo.email,
                        school: internInfo.school,
                        role: 'Intern',
                    };
                    teamMembers.push(intern);
                    break;
                default:
                    done = true;
                    break;
            }
        }

        // Generate the HTML file
        const html = generateHTML(teamMembers);
        fs.writeFileSync('team.html', html);

        console.log('Your team roster has been generated!');
    } catch (err) {
        console.error(err);
    }
}

// Run the application
run();
