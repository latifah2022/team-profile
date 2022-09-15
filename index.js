const inquirer = require('inquirer');
const fs = require('fs');
//const employee = require("./lib/Employee.js");
// const manager = require("./lib/Manager.js");
// const engineer = require("./lib/Engineer.js");
// const intern = require("./lib/Intern.js");
const generatehtml = require('./src/generat');

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
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'What is the employee type?',
        choices: ['Employ','Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        message: "What is your office number?",
        name: 'office',
        //validate: (value) => {if(value){return "manager"} else {return ""}}
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's name." }
        },

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