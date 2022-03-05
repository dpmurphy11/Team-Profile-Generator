const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (!github || typeof github !== 'string' || !github.trim().length) {
            throw new Error('Expected param github to be a string')
        }
        super(name, id, email);
        this.github = github;

    }

    // returns github username
    getGitHub = () => this.github;

    getRole = () => 'Engineer';
}

module.exports = Engineer;