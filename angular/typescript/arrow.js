var employee1 = /** @class */ (function () {
    function employee1(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empcode + " " + _this.empname); };
        this.empcode = code;
        this.empname = name;
    }
    return employee1;
}());
var emp1 = new employee1(4, "sivant");
emp1.display();
