const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('ensure that the class extension works', () => {
    const manager = new Manager('gautam tankha',1,'gtankha@gmail.com',45);

 expect(manager.name).toBe('gautam tankha');
 expect(manager.id).toBe(1);
 expect(manager.email).toBe('gtankha@gmail.com');

});

test('tests office number is working', () => {
    const manager = new Manager('gautam tankha',1,'gtankha@gmail.com',45);

 expect(manager.officeNumber).toBe(45);


});
test('gets an employees role', () => {
    const manager = new Manager('gautam tankha',1,'gtankha@gmail.com',45);
 expect(manager.getRole()).toBe('Manager');
});

/* test('get the office number', () => {
    const manager = new manager('gautam tankha',1,'gtankha@gmail.com');

 expect(manager.name).toBe('gautam tankha');
 expect(manager.id).toBe(1);
 expect(manager.email).toBe('gtankha@gmail.com');

}); */