const inquirer = require("inquirer");

inquirer
.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [{ name: "View all department", value: "VIEW_DEPARTMENTS"}],
    },
])
.then((Response) => {
    console.log(response.choice);
});