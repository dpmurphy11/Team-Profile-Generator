const Employee = require('./Employee');

class Engineer {
    constructor(github) {
        this.github = github; // github username
    }

    getGitHub() {
        // returns github username
    }

    getRole = () => 'Engineer';

    validate() {
        // validate github
    }
}

module.exports = Engineer;