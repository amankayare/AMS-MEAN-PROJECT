import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  public list: any = [];

  constructor( private http: HttpClient ) { }

 async ngOnInit() {

  this.getAllStudents();
  
  }


  async getAllStudents() {
    try {
      let url = "http://localhost:3200/api/students/allstudent";
      let result = await this.http.get(url).toPromise();
      this.list = result;
      console.log(this.list);
    } catch (error) {
       console.log(error)
    }

  }
}
