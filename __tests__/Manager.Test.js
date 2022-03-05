const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('Initialization', () => {
        it('should create an object containing an officeNumber property when called with valid arg', () => {
            const manager = new Manager('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 1234);

            expect(manager.officeNumber).toEqual(1234);
        });

        it('should throw an error if no arg is passed', () => {
            const cb = () => new Manager('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 1234);
            const err = new Error('Expected param officeNumber must be numeric');

            expect(cb).toThrow;
        });

        it('should throw an error if arg is not a number', () => {
            const cb = () => new Manager('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', '1234');
            const err = new Error('Expected param officeNumber to be a number');

            expect(cb).toThrow;
        })

        it('return the role of the manager', () => {
            const manager = new Manager('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 1234);
            expect(manager.getRole()) === 'Manager';
        });
    });

});