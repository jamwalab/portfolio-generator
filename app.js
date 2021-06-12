const inquirer = require("inquirer");
/*const fs = require("fs");
const generatePage = require("./src/page-template.js");

const pageHTML = generatePage(name,github)*/
//const profileDataArgs = process.argv.slice(2);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
//const [name, github] = profileDataArgs;
/*const printProfileData = (profileDataArr) => {
    for(let i=0; i<profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }    
    console.log("=============");
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });
}

printProfileData(profileDataArgs);*/

/*fs.writeFile("./index.html", pageHTML, err => {
    if (err) throw err;

    console.log("Portfolio complete!! Checkout index.html to see the output!");
});*/
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username!!",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to enter some information about yourself for an 'About' section?",
            default: false
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself!!",
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project?",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log("Please enter your project name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your project (required)!!",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter your project description!");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "Languages",
            message: "What did you build this project with (check all that apply)?",
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "input",
            name: "link",
            message: "Enter the GitHub link to your project. (Required)!!",
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub link!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "feature",
            message: "Would you like to feature this project?",
            default: false
        },
        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Would you like to enter another project?",
            default: false
        },
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
}

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });