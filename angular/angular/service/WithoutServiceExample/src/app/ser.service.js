"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SerService = /** @class */ (function () {
    function SerService() {
        this.students = [
            { "id": 1001, "name": "Ramesh", "marks": 90 },
            { "id": 1002, "name": "kumar", "marks": 80 },
            { "id": 1003, "name": "Rahul", "marks": 70 },
            { "id": 1004, "name": "Ajay", "marks": 85 },
            { "id": 1005, "name": "Ravi", "marks": 60 }
        ];
    }
    SerService.prototype.getStudents = function () {
        return this.students;
    };
    SerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SerService);
    return SerService;
}());
exports.SerService = SerService;
