const inquirer = require('inquirer');
const fs = require('fs');
const employee = require("./lib/Employee.js");
const manager = require("./lib/Manager.js");
const engineer = require("./lib/Engineer.js");
const intern = require("./lib/Intern.js");
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
        choices: ['Employee','Manager', 'Engineer', 'Intern']
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'What is the employee type?',
        choices: ['Employ','Manager', 'Engineer', 'Intern']
    },
]

const managerQtn  =  [
    {
        type: 'input',
        message: "What is your office number?",
        name: 'office',
        validate: (officeNumber) => {
            var invalid = isNaN(officeNumber)
            if (invalid) {
                console.log('\nInvalid officeNumber')
                return false
            } else {
                return true
            }
        }
    },
]

const engineerQtn = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        //validate: (value) => {if(value){return "engineer"} else {return ""}}
    },
]

const internQtn = [
    {
        type: 'input',
        message: "What is your School?",
        name: 'school',
        //validate: (value) => {if(value){return "intern"} else {return ""}}
    },
]

    // catch (err) {
    //     // if error, return the error
    //     console.log(err)

    // }


//different questions varying on the employee type.
const employeeAnswers = inquirer.prompt(questions);
switch (employeeAnswers.employeeType) {
    case 'Manager': {
        const managerAnswers = await inquirer.prompt(managerQtn);
        employeeAnswers.thisAnswers = managerAnswers;
        break;
    }
    case 'Intern': {
        const internAnswers = await inquirer.prompt(internQtn);
        employeeAnswers.thisAnswers = internAnswers;
        break;
    }
    case 'Engineer': {
        const engineerAnswers = await inquirer.prompt(engineerQtn);
        employeeAnswers.thisAnswers = engineerAnswers;
        break;
    }
}

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