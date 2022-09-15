const employee = require("./lib/employee")

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}
module.exports = Manager