const inquirer = require('inquirer');
const fs = require('fs');
const { renderOutput } = require('./src/outputGenerator');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let arrEmployees = [];


// ask manager questions and add to arrEmployees
let askMgrQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'mgrName',
                message: 'What is the manager\'s name?',
                default: 'Don Murphy',

            },
            {
                type: 'input',
                name: 'mgrEmail',
                message: 'What is the manager\'s email?',
                default: 'litewit@gmail.com',
            },
            {
                type: 'input',
                name: 'mgrOfficeNo',
                message: 'What is the manager\'s office number?',
                validate: (input) => {
                    if (!input || isNaN(input)) {
                        console.log('Answer must be a number.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'mgrId',
                message: 'What is the manager\'s id?',
                validate: (input) => {
                    if (!input || isNaN(input)) {
                        console.log('Answer must be a number.');
                        return false;
                    }
                    return true;
                }
            },
        ])
        .then((answers) => {
            // create manager object and add properties to it
            const manager = new Manager(answers.mgrName, parseInt(answers.mgrId), answers.mgrEmail, parseInt(answers.mgrOfficeNo));
            // add manager to arrEmployees
            arrEmployees.push(manager);
            askEmployeeQuestions();
        })
}

let askInternQuestions = () => {
    // ask intern questions and add to arrEmployees
    inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'What is your intern\'s name?',
            default: 'Bob Jones',
        },
        {
            inte: 'input',
            name: 'intEmail',
            message: 'What is your intern\'s email?',
            default: 'bob@jones.com',
        },
        {
            type: 'input',
            name: 'intId',
            message: 'What is your intern\'s id?',
            validate: (input) => {
                if (!input || isNaN(input)) {
                    console.log('Answer must be a number.');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'intSchool',
            message: 'What is your intern\'s school?',
            default: 'UMASS-Boston',
        },
    ])
        .then((answers) => {
            // create intern object and add properties to it
            let intern = new Intern(answers.intName, parseInt(answers.intId), answers.intEmail, answers.intSchool);
            // add intern to arrEmployees
            arrEmployees.push(intern);
            // start at the top
            askEmployeeQuestions();
        })
}

let askEngineerQuestions = () => {
    // ask engineer questions and add to arrEmployees
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'What is your engineer\'s name?',
            default: 'Jim Brown',
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'What is your engineer\'s email?',
            default: 'jim@brown.com',
        },
        {
            type: 'input',
            name: 'engId',
            message: 'What is your engineer\'s id?',
            validate: (input) => {
                if (!input || isNaN(input)) {
                    console.log('Answer must be a number.');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'engGitHub',
            message: 'What is your engineer\'s GitHub username?',
        },
    ])
    .then((answers) => {
        // create engineer object and add properties to it
        let engineer = new Engineer(answers.engName, parseInt(answers.engId), answers.engEmail, answers.engGitHub);
        arrEmployees.push(engineer);
        // start at the top
        askEmployeeQuestions();
    })
}

// get type of employee and add each to arrEmployees
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
        if (answers.empType == 'Intern') {
            askInternQuestions();
        } else if (answers.empType == 'Engineer') {
            askEngineerQuestions();
        } else {
            generateOutput();
        }
    });
}

//  a function to write README file
let writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(`Unable to save file. ${err}`) : console.log('The file has been saved!');
    })
};

// generate HTML and write file
let generateOutput = () => {

    // create html file
    let output = renderOutput(arrEmployees);

    // write to dist and include css there
    writeToFile('./dist/index.html', output); 
}

// use inquirer to build employee array
askMgrQuestions();