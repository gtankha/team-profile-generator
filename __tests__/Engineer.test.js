const Engineer = require('../lib/Engineer');

test('ensure that the class extension works', () => {
    const engineer = new Engineer('gautam tankha',1,'gtankha@gmail.com','gtankha');

 expect(engineer.name).toBe('gautam tankha');
 expect(engineer.id).toBe(1);
 expect(engineer.email).toBe('gtankha@gmail.com');

});

test('gitHuber username is working', () => {
    const engineer = new Engineer('gautam tankha',1,'gtankha@gmail.com','gtankha');

 expect(engineer.gitHubUser).toBe('gtankha');

});
test('gets an engineer email address', () => {
    const engineer = new Engineer('gautam tankha',1,'gtankha@gmail.com','gtankha');
 expect(engineer.getRole()).toBe('Engineer');
});

test('gets an Engineer role', () => {
    const intern = new Engineer('gautam tankha',1,'gtankha@gmail.com','University of Berkeley');
 expect(intern.getRole()).toBe('Engineer');
});