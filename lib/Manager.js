const Employee = require('./Employee');

class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole = () => 'Manager';

    validate() {
        // validate officeNumber
    }
}

module.exports = Manager;