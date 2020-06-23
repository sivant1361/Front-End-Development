
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management ';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "rose",
		last_name : "rose",
		email : "rose@gmail.com",
		phone : 123456789,
		department : "Science"
	},
	{
		id : 2,
		first_name : "Oman",
		last_name : "Oma",
		email : "oman@gmail.com",
		phone : 345567890,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Tina",
		last_name : "Dillon",
		email : "tim@gmail.com",
		phone : 1234566789,
		department : "Science"
	},
	{
		id : 4,
		first_name : "John",
		last_name : "Doe",
		email : "j@gmail.com",
		phone : 6789043231,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Peter",
		last_name : "Parker",
		email : "pete@gmail.com",
		phone : 678903232,
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
