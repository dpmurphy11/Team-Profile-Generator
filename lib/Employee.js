class Employee {
    constructor(name, id, email) {
        if (!name && !id && !email) {
            throw new Error('All 3 parameters must be passed.');
        }
        if (typeof name !== 'string'|| !name.trim().length) {
            throw new Error('Expected param name to be a string');
        }
        if (!id || isNaN(id) || typeof id !== 'number') {
            throw new Error('Expected param id to be a number');
        }
        if (!email || typeof email !== 'string'|| !email.trim().length) {
            throw new Error('Expected param email to be a string');
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = () => {
        return this.name;
    }

    getEmail = () => {
        return this.email;
    }

    getId = () => {
        return this.id;
    }

    getRole = () => 'Employee';
}

module.exports = Employee;