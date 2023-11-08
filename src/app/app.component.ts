import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  name :string='nitin pawar';
  date=Date.now();

 /*  color="red";

  arr=['one','two','three','four','five'];

  status=false;
  val=3;
  
objArr:Employee[] =[{empName:'abc',empSalary:12000},
{empName:'xyz',empSalary:23000}];

  str='morning';

  changeColor(){
    this.color='yellow'; }*/
  
}

/* 
class Employee{
  empName :string='';
  empSalary:Number=0;
} */