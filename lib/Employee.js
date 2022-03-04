class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(id, email) {
        //
    }

    getEmail(id, name) {
        //
    }

    getId(email, name) {
        //
    }

    getRole = () => 'Employee';

    validate() {
        //validate name, id and email
    }
}

module.exports = Employee;