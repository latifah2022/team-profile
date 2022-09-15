const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee.js')
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const generatehtml = require('./src/generat.js')

//Questions the user will be asked
let questions = [
    // { 
    //     type: 'input',
    //     message: "What is your role?",
    //     name: 'role',
    // },
    {
    type: 'input',
    message: "What is your name",
    name: 'name',
    },
    {
        type: 'input',
        message: "What is your Id number?",
        name: 'Id ',
    },
    {
        type: 'input',
        message: "What is your email",
        name: 'email',
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'What is the employee type?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
    {
        type: 'list',
        name: 'employeeType',
        message: 'What is the employee type?',
        choices: ['Employ','Manager', 'Engineer', 'Intern']
    }
    {
        type: 'input',
        message: "What is your office number?",
        name: 'office',
        validate: (value) => {if(value){return "manager"} else {return ""}}
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: (value) => {if(value){return "engineer"} else {return ""}}
    },
    {
        type: 'input',
        message: "What is your School?",
        name: 'school',
        validate: (value) => {if(value){return "intern"} else {return ""}}
    },
]

function init() {
    return inquirer.prompt(questions).then((response) => {
        fs.writeFile("./index.html", generatehtml(response), (err) => {
            err
          ? console.log(err)
            : console.log("success");
          });
   });
}

init();

//filter.map.push.join