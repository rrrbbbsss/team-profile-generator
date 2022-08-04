const Engineer = function() {
    this.name = "Bob";
    this.id = 2;
    this.email = "blah@blah.com";
    this.github = "blah";
    this.getName = function() { return this.name; };
    this.getId = function() { return this.id; };
    this.getEmail = function() { return this.email; };
    this.getRole = function() { return "Engineer"; };
    this.getGithub = function() { return this.github; };
};
module.exports = Engineer;