const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('ensure that the class extension works', () => {
    const engineer = new Engineer('gautam tankha',1,'gtankha@gmail.com',45);

 expect(engineer.name).toBe('gautam tankha');
 expect(engineer.id).toBe(1);
 expect(engineer.email).toBe('gtankha@gmail.com');

});

test('tests office number is working', () => {
    const engineer = new Engineer('gautam tankha',1,'gtankha@gmail.com',45);

 expect(engineer.officeNumber).toBe(45);


});

/* test('get the office number', () => {
    const engineer = new Engineer('gautam tankha',1,'gtankha@gmail.com');

 expect(engineer.name).toBe('gautam tankha');
 expect(engineer.id).toBe(1);
 expect(engineer.email).toBe('gtankha@gmail.com');

}); */