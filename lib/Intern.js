const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        if (!school || typeof school !== 'string'|| !school.trim().length) {
            throw new Error('Expected param school to be a string')
        }
        super(name, id, email);
        this.school = school;
    }

    getSchool = () => this.school;

    getRole = () => 'Intern';

}

module.exports = Intern;