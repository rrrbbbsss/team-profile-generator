const Manager = function() {
    this.name = "Bob";
    this.id = 2;
    this.email = "blah@blah.com";
    this.officeNumber = 10;
    this.getName = function() { return this.name; };
    this.getId = function() { return this.id; };
    this.getEmail = function() { return this.email; };
    this.getRole = function() { return "Manager"; };
    this.getOfficeNumber = function() { return this.officeNumber; };
};
module.exports = Manager;