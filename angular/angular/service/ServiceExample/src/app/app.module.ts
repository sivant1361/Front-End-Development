import { BrowserModule } from '@angular/platform-browser';  
import { NgModule, Pipe } from '@angular/core';  
import {FormsModule} from '@angular/forms';  
import { AppComponent } from './app.component';  
import { StudentDetailsComponent } from './student-details/student-details.component';  
import { StudentMarksComponent } from './student-marks/student-marks.component';   
  
@Pipe({  
  name: "namePipe"  
})  
  
class NamePipe{  
  transform(value : string, defaultValue : string) : string{  
    if(value != ""){  
      return value;  
    } else {  
      return defaultValue;  
    }  
  }  
}  
  
@NgModule({  
  declarations: [  
    AppComponent,  
    NamePipe,  
    StudentDetailsComponent,  
    StudentMarksComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  