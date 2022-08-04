const Manager = require('../lib/Manager');
const utils = require('../src/utils');

test('creates a manager object', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe(name);
    expect(manager.name).toEqual(expect.any(String));

    expect(manager.id).toBe(id);
    expect(manager.id).toEqual(expect.any(Number));

    expect(manager.email).toBe(email);
    expect(manager.email.match(utils.emailRegex)).toBeTruthy();

    expect(manager.officeNumber).toBe(officeNumber);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getName method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);
    const result = manager.getName();

    expect(result).toBe(name);
    expect(result).toEqual(expect.any(String));
});

test('getId method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);
    const result = manager.getId();

    expect(result).toBe(id);
    expect(result).toEqual(expect.any(Number));
});

test('getEmail method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);
    const result = manager.getEmail();

    expect(result).toBe(email);
    expect(result.match(utils.emailRegex)).toBeTruthy();
});

test('getOfficeNumber method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);
    const result = manager.getOfficeNumber();

    expect(result).toBe(officeNumber);
    expect(result).toEqual(expect.any(Number));
});

test('getRole method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const officeNumber = 100;
    const manager = new Manager(name, id, email, officeNumber);
    const result = manager.getRole();

    expect(result).toBe("Manager");
});