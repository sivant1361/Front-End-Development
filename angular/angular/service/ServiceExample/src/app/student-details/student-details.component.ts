import { Component, OnInit } from '@angular/core';  
import { StudentService } from '../student.service';  
  
@Component({  
  selector: 'app-student-details',  
  templateUrl: './student-details.component.html',  
  styleUrls: ['./student-details.component.css']  
})  
export class StudentDetailsComponent implements OnInit {  
  
  public students = [];  
  constructor(private studentService : StudentService) {   
    this.students = studentService.getStudents();  
  }  
  ngOnInit() {  
  }  
}  