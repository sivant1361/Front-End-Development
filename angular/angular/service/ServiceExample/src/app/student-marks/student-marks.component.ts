import { Component, OnInit } from '@angular/core';  
import { StudentService } from '../student.service';  
  
@Component({  
  selector: 'app-student-marks',  
  templateUrl: './student-marks.component.html',  
  styleUrls: ['./student-marks.component.css']  
})  
export class StudentMarksComponent implements OnInit {  
  
  public students = [];  
  constructor(private studentService : StudentService) {   
    this.students = studentService.getStudents();  
  }  
  ngOnInit() {  
  }  
}  