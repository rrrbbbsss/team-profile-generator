const Engineer = require('../lib/Engineer');
const utils = require('../src/utils');

test('creates an engineer object', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const github = "blah";
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toBe(name);
    expect(engineer.name).toEqual(expect.any(String));

    expect(engineer.id).toBe(id);
    expect(engineer.id).toEqual(expect.any(Number));

    expect(engineer.email).toBe(email);
    expect(engineer.email.match(utils.emailRegex)).toBeTruthy();

    expect(engineer.github).toBe(github);
    expect(engineer.github).toEqual(expect.any(String));
});

test('getName method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const github = "blah";
    const engineer = new Engineer(name, id, email, github);
    const result = engineer.getName();

    expect(result).toBe(name);
    expect(result).toEqual(expect.any(String));
});

test('getId method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const github = "blah";
    const engineer = new Engineer(name, id, email, github);
    const result = engineer.getId();

    expect(result).toBe(id);
    expect(result).toEqual(expect.any(Number));
});

test('getEmail method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const github = "blah";
    const engineer = new Engineer(name, id, email, github);
    const result = engineer.getEmail();

    expect(result).toBe(email);
    expect(result.match(utils.emailRegex)).toBeTruthy();
});

test('getGithub method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const github = "blah";
    const engineer = new Engineer(name, id, email, github);
    const result = engineer.getGithub();

    expect(result).toBe(github);
    expect(result).toEqual(expect.any(String));
});

test('getRole method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const github = "blah";
    const engineer = new Engineer(name, id, email, github);
    const result = engineer.getRole();

    expect(result).toBe("Engineer");
});