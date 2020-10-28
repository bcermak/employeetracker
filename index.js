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

    if(choice == "VIEW_EMPLOYEES") {
        console.log("display ALL")
        }

    if(choice == "VIEW_EMPLOYEES_BY_DEPARTMENT") {
            console.log("display by DEPT")
            }
    if(choice == "VIEW_EMPLOYEES_BY_MANAGER") {
            console.log("display by MANAGER")
            }
    if(choice == "ADD_EMPLOYEE") {
            console.log("ADD NEW")
            }
    if(choice == "REMOVE_EMPLOYEE") {
            console.log("remove EMPLOYEE")
            }
    if(choice == "UPDATE_EMPLOYEE_ROLE") {
            console.log("update ROLE")
            }
    if(choice == "UPDATE_EMPLOYEE_MANAGER") {
            console.log("update MANAGER")
            }
    if(choice == "VIEW_ALL_ROLES") {
            console.log("display ALL ROLES")
            }
    if(choice == "ADD_ROLE") {
            console.log("add NEW ROLE")
            }
    if(choice == "REMOVE_ROLE") {
            console.log("remove ROLE")
            }
    if(choice == "VIEW_ALL_DEPARTMENTS") {
            console.log("display ALL DEPARTMENTS")
            }
    if(choice == "ADD_DEPARTMENT") {
            console.log("add NEW DEPARTMENT")
            }
    if(choice == "REMOVE_DEPARTMENT") {
            console.log("delete DEPARTMENT")
            }         
    if(choice == "QUIT") {
            console.log("EXIT APPLICATION")
    }   
        
}





