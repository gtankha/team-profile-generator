const inquirer = require('inquirer'); // inquirer
const Engineer = require("./lib/Engineer"); // engineer constructor
const Manager = require("./lib/Manager"); // manager constructor
const Intern = require("./lib/Intern"); // intern contructor
const fs = require('fs');//file system
const createHtml = require("./src/createHtml"); // creates the HTML file
let employeeInfo = {};


/*------------------------------------- Manager Questionnarie -----------------------------*/
const employeeQuestionnaire = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'team_manager_name',
            message: "Please enter the team manager's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Team manager name is REQUIRED');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'team_manager_employee_ID',
            message: "Please enter the team manager's employee ID:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Team manager employee ID is REQUIRED');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'team_manager_email',
            message: "Please enter the team manager's e-mail address:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Team manager's email address is REQUIRED");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'team_manager_office_ID',
            message: "Please enter the team manager's office ID:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Team manager's office ID is REQUIRED");
                    return false;
                }
            }
        }
    ]);
}

/*------------------------------------- Team Questionnarie -----------------------------*/

const teamQuestionnaire = (employeeDetails) => {
    if (!employeeDetails) {
        employeeDetails = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'team_member',
            message: 'Please choose type of team member to add or finish building team:',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        },
        {
            type: 'input',
            name: 'engineer_name',
            message: "Please enter the engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enginee name is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Engineer'
        },
        {
            type: 'input',
            name: 'engineer_ID',
            message: "Please enter the engineer's ID:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Engineer ID is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Engineer'
        },
        {
            type: 'input',
            name: 'engineer_email',
            message: "Please enter the engineer's email:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Engineer email is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Engineer'
        },
        {
            type: 'input',
            name: 'engineer_gitHub',
            message: "Please enter the engineer's GitHub username:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Engineer gitHub username is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Engineer'
        },
        {
            type: 'input',
            name: 'intern_name',
            message: "Please enter the intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Intern name is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Intern'
        },
        {
            type: 'input',
            name: 'intern_ID',
            message: "Please enter the intern's ID:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Intern ID is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Intern'
        },
        {
            type: 'input',
            name: 'intern_email',
            message: "Please enter the intern's email:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Intern email is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Intern'
        },
        {
            type: 'input',
            name: 'intern_school',
            message: "Please enter the intern's school:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Intern school is REQUIRED');
                    return false;
                }
            },
            when: (answers) => answers.team_member == 'Intern'
        }
    ])
// recursive loop to continue with questions until finish building team is selected
        .then(teamResponse => {


            employeeDetails.push(teamResponse);


            if ((teamResponse.team_member) !== 'Finish Building Team') {

                return teamQuestionnaire(employeeDetails);
            }
            else {
                employeeDetails.pop();
                return employeeDetails;
            }
        });

}

/* ------------------------ FUNCTION TO WRITE README FILE ------------------------------------- */
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };


/* ------------------------------------------MAIN CODE-----------------------------------------*/

employeeQuestionnaire()
    .then((managerAnswer) => {
        employeeInfo.managerResponse = managerAnswer;
        return teamQuestionnaire();
    })
    .then((teamAnswer) => {
        employeeInfo.teamResponse = teamAnswer;
        return employeeInfo;
    })
    .then((data) => {
        return createHtml(data);
    })
    .then((html) => {
      return writeToFile('./dist/output.html',html)
        }
    )




