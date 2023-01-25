const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        //MySQL password
        password: 'root',
        database: 'classlist_db'
    },
    console.log('Connected to the classlist_db database.')
);

// Query database
db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
});

function viewDepartments(){
    console.log("Success")
;}

inquirer
.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [{ name: "View all department", value: "VIEW_DEPARTMENTS"}],
    },
])
.then((response) => {
    if (response.choice === "VIEW_DEPARTMENTS"){
        viewDepartments();
    }
});
