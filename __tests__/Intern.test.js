const Intern = require('../lib/Intern');
const utils = require('../src/utils');

test('creates an intern object', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const school = "blah";
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe(name);
    expect(intern.name).toEqual(expect.any(String));

    expect(intern.id).toBe(id);
    expect(intern.id).toEqual(expect.any(Number));

    expect(intern.email).toBe(email);
    expect(intern.email.match(utils.emailRegex)).toBeTruthy();

    expect(intern.school).toBe(school);
    expect(intern.school).toEqual(expect.any(String));
});

test('getName method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const school = "blah";
    const intern = new Intern(name, id, email, school);
    const result = intern.getName();

    expect(result).toBe(name);
    expect(result).toEqual(expect.any(String));
});

test('getId method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const school = "blah";
    const intern = new Intern(name, id, email, school);
    const result = intern.getId();

    expect(result).toBe(id);
    expect(result).toEqual(expect.any(Number));
});

test('getEmail method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const school = "blah";
    const intern = new Intern(name, id, email, school);
    const result = intern.getEmail();

    expect(result).toBe(email);
    expect(result.match(utils.emailRegex)).toBeTruthy();
});

test('getSchool method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const school = "blah";
    const intern = new Intern(name, id, email, school);
    const result = intern.getSchool();

    expect(result).toBe(school);
    expect(result).toEqual(expect.any(String));
});

test('getRole method testing', () => {
    const name = "Bob";
    const id = 1;
    const email = "blah@blah.com";
    const school = "blah";
    const intern = new Intern(name, id, email, school);
    const result = intern.getRole();

    expect(result).toBe("Intern");
});