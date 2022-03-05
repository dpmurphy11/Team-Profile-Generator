const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let arrTeam = [];

let renderHTML = (arrTeam) => {

}
// ask manager questions and add to team
let askMgrQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'mgrName',
                message: 'What is your manager\'s name?',
                default: 'Don Murphy',
            },
            {
                type: 'input',
                name: 'mgrEmail',
                message: 'What is your manager\'s email?',
                default: 'dpmurphy_onsite@hotmail.com',
            },
            {
                type: 'input',
                name: 'mgrOfficeNo',
                message: 'What is your manager\'s office number?',
            },
            {
                type: 'input',
                name: 'mgrId',
                message: 'What is your manager\'s id?',
            },
        ])
        .then((answers) => {
            // create manager object and add properties to it
            let manager = new Manager;
            manager.name = answers.mgrName;
            manager.email = answers.mgrEmail;
            manager.officeNumber = answers.mgrOfficeNo;
            manager.id = answers.mgrId
            // add manager to team array
            arrTeam.push(manager);
        });
}

// get type of employee and add each to team
let askEmployeeQuestions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'empType',
            message: 'Which type of employee would you like to add to the team?',
            choices: ['Engineer', 'Intern', 'I\'m done',],
        }
    ])
        .then((answer) => {
            if (answer.empType == 'Intern') () => {
                // ask intern questions and add to team
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'intName',
                        message: 'What is your intern\'s name?',
                    },
                    {
                        inte: 'input',
                        name: 'intEmail',
                        message: 'What is your intern\'s email?',
                    },
                    {
                        type: 'input',
                        name: 'intId',
                        message: 'What is your intern\'s id?',
                    },
                    {
                        type: 'input',
                        name: 'intSchool',
                        message: 'What is your intern\'s school?',
                    },
                ])
                    .then((answers) => {
                        // create intern object and add properties to it
                        let intern = new Intern;
                        intern.name = answers.intName;
                        intern.email = answers.intEmail;
                        intern.id = answers.intId
                        intern.school = answers.intschool;
                        // add intern to team array
                        arrTeam.push(intern);
                        // start at the top
                        askEmployeeQuestions();
                    })
            }
            else if (answer.empType == 'Engineer') () => {
                // ask engineer questions and add to team
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'engName',
                        message: 'What is your engineer\'s name?',
                    },
                    {
                        type: 'input',
                        name: 'engEmail',
                        message: 'What is your engineer\'s email?',
                    },
                    {
                        type: 'input',
                        name: 'engId',
                        message: 'What is your engineer\'s id?',
                    },
                    {
                        type: 'input',
                        name: 'engGitHub',
                        message: 'What is your engineer\'s username?',
                    },
                ])
                    .then((answers) => {
                        // create engineer object and add properties to it
                        let engineer = new Engineer;
                        engineer.name = answers.engName;
                        engineer.email = answers.engEmail;
                        engineer.id = answers.engId
                        engineer.github = answers.engGitHub;
                        // add engineer to team array
                        arrTeam.push(engineer);
                        // start at the top
                        askEmployeeQuestions();
                    })
            }
            else {
                // end questions and render output
                let output = renderHTML(arrTeam);

                // write to file
            }
        });
}

askMgrQuestions();