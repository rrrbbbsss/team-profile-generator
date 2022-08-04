const Employee = require('../lib/Employee');
const utils = require('../src/utils');


test('creates an employee object', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.name).toEqual(expect.any(String));

    expect(employee.id).toBe(id);
    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toBe(email);
    expect(employee.email.match(utils.emailRegex)).toBeTruthy();
});

test('getName method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const employee = new Employee(name, id, email);
    const result = employee.getName();

    expect(result).toBe(name);
    expect(result).toEqual(expect.any(String));
});

test('getId method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const employee = new Employee(name, id, email);
    const result = employee.getId();

    expect(result).toBe(id);
    expect(result).toEqual(expect.any(Number));
});

test('getEmail method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const employee = new Employee(name, id, email);
    const result = employee.getEmail();

    expect(result).toBe(email);
    expect(result.match(utils.emailRegex)).toBeTruthy();
});

test('getRole method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const employee = new Employee(name, id, email);
    const result = employee.getRole();

    expect(result).toBe("Employee");
});