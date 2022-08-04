const Intern = function() {
    this.name = "Bob";
    this.id = 2;
    this.email = "blah@blah.com";
    this.school = "blah";
    this.getName = function() { return this.name; };
    this.getId = function() { return this.id; };
    this.getEmail = function() { return this.email; };
    this.getRole = function() { return "Intern"; };
    this.getSchool = function() { return this.school; };
};
module.exports = Intern;