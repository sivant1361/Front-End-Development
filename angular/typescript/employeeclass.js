var employee = /** @class */ (function () {
    function employee(code, name) {
        this.empcode = code;
        this.empname = name;
    }
    employee.prototype.getsalary = function () {
        return 10000;
    };
    return employee;
}());
var emp = new employee(4, "sivant");
var salary = emp.getsalary();
console.log("Name", emp.empname, "\nCode", emp.empcode, "\nSalary=", salary);
