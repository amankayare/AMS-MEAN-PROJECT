import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-attendence',
  templateUrl: './upload-attendence.component.html',
  styleUrls: ['./upload-attendence.component.css']
})
export class UploadAttendenceComponent implements OnInit {

  public list: any = [];
  public attendence: string="";
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllStudents();
  }


  public fbFormGroup = this.fb.group({


    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });




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
   tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    // go through cells
    for (var i=1; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }       

    return data;
}


}
