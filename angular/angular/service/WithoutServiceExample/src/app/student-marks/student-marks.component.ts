import { Component, OnInit } from '@angular/core';  
  
@Component({  
  selector: 'app-student-marks',  
  templateUrl: './student-marks.component.html',  
  styleUrls: ['./student-marks.component.css']  
})  
export class StudentMarksComponent implements OnInit {  
  
  public students = [  
    {"id" : 1001, "name" : "Ramesh", "marks" : 90},  
    {"id" : 1002, "name" : "kumar", "marks" : 80},  
    {"id" : 1003, "name" : "Rahul", "marks" : 70},  
    {"id" : 1004, "name" : "Ajay", "marks" : 85},  
    {"id" : 1005, "name" : "Ravi", "marks" : 60}  
    ];  
  constructor() { }  
  ngOnInit() {  
  }  
}  