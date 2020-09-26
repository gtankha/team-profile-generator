const Intern = require('../lib/Intern');

test('ensure that the class extension works', () => {
    const intern = new Intern('gautam tankha',1,'gtankha@gmail.com','University of Berkeley');

 expect(intern.name).toBe('gautam tankha');
 expect(intern.id).toBe(1);
 expect(intern.email).toBe('gtankha@gmail.com');

});
test('tests school is working', () => {
    const intern = new Intern('gautam tankha',1,'gtankha@gmail.com','University of Berkeley');

 expect(intern.school).toBe('University of Berkeley');

});
test('gets email information', () => {
    const intern = new Intern('gautam tankha',1,'gtankha@gmail.com','gtankha','University of Berkeley');
 expect(intern.getSchool()).toBe(intern.school);
});
test('gets an Intern role', () => {
    const intern = new Intern('gautam tankha',1,'gtankha@gmail.com','University of Berkeley');
 expect(intern.getRole()).toBe('Intern');
});