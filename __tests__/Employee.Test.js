const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('Initialiazation', () => {
        it('should create an object containing an name, id, and email properties when called with valid arg', () => {
            const name = 'Don Murphy';
            const id = 1234;
            const email = 'dpmurphy_onsite@hotmail.com';
            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });

        it('should throw an error if all args aren\'t passed', () => {
            const cb = () => new Employee();
            const err = new Error('All 3 parameters must be passed.');

            expect(cb).toThrowError(err);
        });


        it('should returns the role of the Employee', () => {
            const name = 'Don Murphy';
            const id = 1234;
            const email = 'dpmurphy_onsite@hotmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getRole()) === 'Employee';
        });

        it('should return the name of the Employee', () => {
            const name = 'Don Murphy';
            const id = 1234;
            const email = 'dpmurphy_onsite@hotmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getName()).toEqual(name);
        });

        it('should return the email of the Employee ', () => {
            const name = 'Don Murphy';
            const id = 1234;
            const email = 'dpmurphy_onsite@hotmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getEmail()).toEqual(email);
        });

        it('should return the id of the Employee', () => {
            const name = 'Don Murphy';
            const id = 1234;
            const email = 'dpmurphy_onsite@hotmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual(id);
        });

    });
});