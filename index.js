const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const utils = require('./src/utils');
const genTemplate = require('./src/genTemplate');
const inquirer = require('inquirer');
const fsPromises = require('fs/promises');
const path = require('path');

function writeToFile(fileName, data) {
    const directory = path.dirname(fileName);
    return fsPromises.access(directory, fsPromises.R_OK | fsPromises.W_OK)
        // if the folder does not exist, create it
        .catch(err => fsPromises.mkdir(directory))
        // then write the file
        .then(() => fsPromises.writeFile(fileName, data))
        .then(() => console.log("\n" + fileName + " written!"));
}

const idValidation = (id) => parseInt(id) ? true : console.log(" Please enter a valid number") && false;
const emailValidation = (email) => email.match(utils.emailRegex) ? true : console.log(" Please enter a valid email") && false;
const officeValidation = idValidation;
const githubValidation = (github) => !github.includes(' ') ? true : console.log(" Please do not include spaces") && false;


const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the Manager's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the Manager's Id:",
        validate: idValidation
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the Manager's email:",
        validate: emailValidation
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the Manager's office number:",
        validate: officeValidation
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the Engineer's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the Engineer's Id:",
        validate: idValidation
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the Engineer's email:",
        validate: emailValidation
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineer's github username:",
        validate: githubValidation
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the Intern's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the Intern's Id:",
        validate: idValidation
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the Intern's email:",
        validate: emailValidation
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the Interns's school:"
    }
];

const menuQuestions = [
    {
        type: 'list',
        name: 'menu',
        message: 'Add another employee?',
        choices: ['Engineer', 'Intern', 'No']
    }
]

function managerPrompt() {
    return inquirer.prompt(managerQuestions)
        .then(({ name, id, email, officeNumber }) =>
            menuPrompt([new Manager(name, id, email, officeNumber)]))
}

function engineerPrompt(data) {
    return inquirer.prompt(engineerQuestions)
        .then(({ name, id, email, github }) =>
            menuPrompt([...data, (new Engineer(name, id, email, github))]))
}

function internPrompt(data) {
    return inquirer.prompt(internQuestions)
        .then(({ name, id, email, school }) =>
            menuPrompt([...data, (new Intern(name, id, email, school))]))
}

function menuPrompt(data) {
    return inquirer.prompt(menuQuestions)
        .then(({ menu }) => {
            if (menu === 'Engineer') {
                return engineerPrompt(data);
            }
            else if (menu === 'Intern') {
                return internPrompt(data);
            } else {
                return data;
            }
        })
}

function init() {
    const htmlPath = './dist/index.html';
    //const inCssPath = './src/style.css';
    managerPrompt()
        // generate html from data
        .then(data => genTemplate.htmlTemplate(data))
        // write the markdown to a file
        .then(html => writeToFile(htmlPath, html))
        // log any error caught
        .catch(err => console.log(err));
}

// Function call to initialize app
init();
