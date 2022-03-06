const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('Initialiazation', () => {
        it('should create an object containing an school property when called with valid arg', () => {
            const intern = new Intern('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 'UMASS-Boston');

            expect(intern.school).toEqual('UMASS-Boston');
        });

        it('should throw an error if no arg is passed', () => {
            const cb = () => new Intern();

            expect(cb).toThrow();
        });

        it('should throw an error if arg is not a string', () => {
            const cb = () => new Intern('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 5);
            const err = new Error('Expected param school to be a string');

            expect(cb).toThrowError(err);
        })


        it('should returns the role of the intern', () => {
            const intern = new Intern('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 'UNH');

            expect(intern.getRole()) === 'Intern';
        });

        it('should returns the school of the intern', () => {
            const intern = new Intern('Don Murphy', 1234, 'dpmurphy_onsite@hotmail.com', 'UMASS-Boston');
            expect(intern.getSchool()).toEqual('UMASS-Boston');
        });

    });
});