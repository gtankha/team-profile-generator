const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);
        this.officeNumber = officeNumber;

        //  Enemy.prototype = Object.create(Character.prototype);
    }
    getRole() {
        return ('Manager');
    };
}

module.exports = Manager;