const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let arrTeam = [];


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
            const manager = new Manager(answers.mgrName, parseInt(answers.mgrId), answers.mgrEmail, parseInt(answers.mgrOfficeNo));
            // add manager to team array
            arrTeam.push(manager);
            console.log(arrTeam);
            askEmployeeQuestions();
        })
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
        .then((answers) => {
            console.log(answers)
            if (answers.empType == 'Intern') () => {
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
                        let intern = new Intern(answers.intName, parseInt(answers.intId), answers.intEmail, answers.intschool);
                        // add intern to team array
                        arrTeam.push(intern);
                        console.log(arrTeam);
                        // start at the top
                        askEmployeeQuestions();
                    })
            }
            else if (answers.empType == 'Engineer') () => {
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
                        name: 'engOfficeNo',
                        message: 'What is your engineer\'s office number?',
                    },
                ])
                    .then((answers) => {
                        // create engineer object and add properties to it
                        let engineer = new Engineer(answers.engName, parseInt(answers.engId), answers.engEmail, answers.engGitHub);
                        arrTeam.push(engineer);
                        console.log(arrTeam);
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

