const inquirer = require('inquirer');
const fs = require('fs');
//const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generatehtml = require('./src/generat.js');
const employees = [];

//Questions the user will be asked
let questions = [
    {
        type: 'input',
        message: "What is your name",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your Id number?",
        name: 'employeeId',
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
]

const typeQtn = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What is the employee type?',
        choices: ['Manager', 'Engineer', 'Intern']
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
    },
]

const internQtn = [
    {
        type: 'input',
        message: "What is your School?",
        name: 'school',
    },
]



//different questions varying on the employee type.

//const employeeType = typeQtn.choices
const employeeAnswers = inquirer.prompt(questions);
employeeAnswers.then((answer) => {
    console.log(answer)


switch (answer.employeeType) {
    case 'Manager': {
        const managerAnswers = inquirer.prompt(managerQtn);
        managerAnswers.then((office) => {
            const managerObj = new Manager(answer.name,answer.employeeId,answer.email,office.office);
            employees.push(managerObj);
            console.log(employees)
        })
        //employeeAnswers.this.choices[1] = managerAnswers;
        break;
    }
    case 'Intern': {
        const internAnswers =  inquirer.prompt(internQtn);
        internAnswers.then((myschool) => {
            const internObj = new Intern(answer.name, answer.employeeId,answer.email,myschool.school);
            employees.push(internObj);
            console.log(employees)
        })
        //employeeAnswers.this.choices[2] = internAnswers;
        break;
    }
    case 'Engineer': {
        const engineerAnswers = inquirer.prompt(engineerQtn);
        engineerAnswers.then((github) => {
            const engineerObj = new Engineer(answer.name, answer.employeeId,answer.email,github.username);
            employees.push(engineerObj);
            console.log(employees)
        })
        //employeeAnswers.this.choices[3] = engineerAnswers;
        break;
    }
}
 })

// fs.writeFile("./dist/test.html", generatehtml(response), (err) => {
// err
// ? console.log(err)
// : console.log("success");
// });

// const myEmployees = []
// const totalEmployees = [];
//     // for each employee in my employee list
//     myEmployees.forEach(employee => {
//         const name = employee.name;
//         const id = employee.id;
//         const email = employee.email;
//         const employeeType = employee.employeeType;

//         //each employee type has slightly different questions here
//         switch (employeeType) {
//             case 'Manager': {
//                 const officeNumber = employee.thisAnswers.officeNumber;
//                 const manager = new Manager(name, id, email, officeNumber);
//                 totalEmployees.push(manager);
//                 break;
//             }
//             case 'Intern': {
//                 const school = employee.thisAnswers.school;
//                 const intern = new Intern(name, id, email, school);
//                 totalEmployees.push(intern);
//                 break;
//             }
//             case 'Engineer': {
//                 const github = employee.thisAnswers.github;
//                 const engineer = new Engineer(name, id, email, github);
//                 totalEmployees.push(engineer);
//                 break;
//             }
//         }

//     })
//     return (totalEmployees);


    // function init() {
    //      return  inquirer.prompt(questions).then((response) => {
    //         fs.writeFile("./dist/test.html", generatehtml(response), (err) => {
    //             err
    //           ? console.log(err)
    //             : console.log("success");
    //           });
    //    });
    // }
    //init();




//filter.map.push.join