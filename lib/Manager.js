const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (!officeNumber || typeof officeNumber != 'number') {
            throw new Error('Expected officeNumber to be a number');
        }
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole = () => 'Manager';
}

module.exports = Manager;