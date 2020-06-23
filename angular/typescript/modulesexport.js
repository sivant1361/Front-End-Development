"use strict";
exports.__esModule = true;
exports.age = 20;
var employee = /** @class */ (function () {
    function employee(name, code) {
        this.empname = name;
        this.empcode = code;
    }
    employee.prototype.displayemployee = function () {
        console.log("Employee Code:" + this.empcode + ",Employee Name:" + this.empname);
    };
    return employee;
}());
exports.employee = employee;
var companyname = "XYZ";
