const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email,gitHubUser) {
        // call parent constructor here:
        super(name, id, email);
        this.gitHubUser = gitHubUser;
    }
    getRole() {
        return ('Engineer');
    };
    getGitHub() {
        return (this.gitHubUser);
    }
   
}

module.exports = Engineer;