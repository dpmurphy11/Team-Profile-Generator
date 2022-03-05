const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('Initialiazation', () => {
        it('should create an object containing a github property when called with valid arg', () => {
            const engineer = new Engineer('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 'dpmurphy11');

            expect(engineer.getGitHub()).toEqual('dpmurphy11');
        });

        it('should throw an error if no arg is passed', () => {
            const cb = () => new Engineer();

            expect(cb).toThrow();
        });

        it('should throw an error if github arg is not a string', () => {
            const cb = () => new Engineer('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 5);
            const err = new Error('Expected param github to be a string');

            expect(cb).toThrowError(err);
        })


        it('should returns the role of the engineer', () => {
            const engineer = new Engineer('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 'dpmurphy11');

            expect(engineer.getRole()) === 'engineer';
        });

        it('should returns the username of the object', () => {
            const engineer = new Engineer('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 'dpmurphy11');
            expect(engineer.getGitHub()).toEqual('dpmurphy11');
        });

    });
});