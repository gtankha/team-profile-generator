const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('gautam tankha',1,'gtankha@gmail.com');

 expect(employee.name).toBe('gautam tankha');
 expect(employee.id).toBe(1);
 expect(employee.email).toBe('gtankha@gmail.com');

});

test('gets an employees name', () => {
    const employee = new Employee('gautam tankha',1,'gtankha@gmail.com');
 expect(employee.getName()).toBe('gautam tankha');
});

test('gets an employees ID', () => {
    const employee = new Employee('gautam tankha',1,'gtankha@gmail.com');
 expect(employee.getId()).toBe(1);
});

test('gets an employees e-mail', () => {
    const employee = new Employee('gautam tankha',1,'gtankha@gmail.com');
 expect(employee.getEmail()).toBe('gtankha@gmail.com');
});

test('gets an employees role', () => {
    const employee = new Employee('gautam tankha',1,'gtankha@gmail.com');
 expect(employee.getRole()).toBe('Employee');
});