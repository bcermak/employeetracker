const inquirer = require("inquirer");

const {prompt} = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const { inherits } = require("util");

init ()

function init() {
    const logotext = logo({name:"Employee Manager"}).render();
    console.log(logotext);
    loadMainPrompts();
}

async function loadMainPrompts() {
    const {choice} = await prompt([
        {type: "list",
         name: "choice",
         message: "What would you like to do?",
         choices:  [
            {
                name:"view all employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name:"view all employees by department",
                value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
            },
            {
                name:"view all employees by manager",
                value: "VIEW_EMPLOYEES_BY_MANAGER"
            },
            {
                name:"add employee",
                value: "ADD_EMPLOYEE"
            },
            {
                name:"remove employee",
                value: "REMOVE_EMPLOYEE"
            },
            {
                name:"update employee role",
                value: "UPDATE_EMPLOYEE_ROLE"
            },
            {
                name:"update employee manager",
                value: "UPDATE_EMPLOYEE_MANAGER"
            },
            {
                name:"view all roles",
                value: "VIEW_ALL_ROLES"
            },
            {
                name:"add role",
                value: "ADD_ROLE"
            },
            {
                name:"remove role",
                value: "REMOVE_ROLE"
            },
            {
                name:"view all DEPARTMENTS",
                value: "VIEW_ALL_DEPARTMENTS"
            },
            {
                name:"add department",
                value: "ADD_DEPARTMENT"
            },
            {
                name:"remove department",
                value: "REMOVE_DEPARTMENT"
            },
            {
                name:"QUIT",
                value: "QUIT"
            },
            
         ]  

    }])
};

