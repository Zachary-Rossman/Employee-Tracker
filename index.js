const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username
        user: "root",
        // MySQL password
        password: "root",
        database: "tracker",
    },
    console.log('Connected to the tracker database.')
);

function viewDepartments(){
    db.query("SELECT * FROM department", function (err, results) {
        console.table(results);
    })
};
function viewRoles(){
    db.query("SELECT * FROM role", function (err, results) {
        console.table(results);
    })
};
function viewEmployees(){
    db.query("SELECT * FROM employees", function (err, results) {
        console.table(results);
    })
};
function addDepartment(){
    db.query("INSERT INTO department", function (err, results) {
        console.table(results);
    })
};
function addRole(){
    db.query("INSERT INTO role", function (err, results) {
        console.table(results);
    })
};
function addEmployee(){
    db.query("INSERT INTO employee", function (err, results) {
        console.table(results);
    })
};

inquirer
  .prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            {
                name: "View all deparments",
                value: "VIEW DEPARTMENTS"
            },
            {
                name: "View all roles",
                value: "VIEW ROLES"
            },
            {
                name: "View all employees",
                value: "VIEW EMPLOYEES"
            },
            {
                name: "Add new department",
                value: "ADD DEPARTMENT"
            },
            {
                name: "Add new role",
                value: "ADD ROLE"
            },
            {
                name: "Add new employee", 
                value: "ADD EMPLOYEE" 
            }
        ]
    }
  ])
  .then((response) => {
    if (response.choice === "VIEW DEPARTMENTS") {
        viewDepartments();
    }
    if (response.choice === "VIEW ROLES") {
        viewRoles();
    }
    if (response.choice === "VIEW EMPLOYEES") {
        viewEmployees();
    }
    if (response.choice === "ADD DEPARTMENT") {
        inquirer
        .prompt([
            {
                type: "insert",
                message: "What is the new Department's name?",
            }
        ])
        .then((response) => {
            addDepartment();
        })
    }
    if (response.choice === "ADD ROLE") {
        inquirer
        .prompt([
            {
                type: "insert",
                message: "What is the new role called?",
            }
        ])
        .then((response) => {
            addRole();
        })
    }
    if (response.choice === "ADD EMPLOYEE") {
        inquirer
        .prompt([
            {
                type: "insert",
                message: "Insert employee's first name",
            },
            {
                type: "insert",
                message: "Insert employee's last name",
            },
            {},
        ])
        .then((response) => {
            addEmployee();
        })
    }
  });