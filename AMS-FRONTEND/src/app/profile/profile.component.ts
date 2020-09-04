import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public first: string;
  public enroll: string;
  public last: string;
  public email: string;
  public password: string;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public type: string = "password";
  public hideBtn: boolean = false;
  public showBtn: boolean = true;


  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getfaculty();
  }

  public fbFormGroup = this.fb.group({
    first: ['', Validators.required],
    last: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    employeeId: ['', Validators.required],
  });

  async getfaculty() {

    let token = sessionStorage.getItem('token');
    console.log("TOKEN:", token);

    const url = `http://localhost:3200/api/faculties/${token}`;
    console.log(url);
    const result: any = await this.http.get(url).toPromise();
    console.log("RESULT:", result);
    console.log("FIRST:", result[0].first);
    console.log("LAST:", result[0].last);
    console.log("EMP_ID:", result[0].employee_id);

    this.first = result[0].first.toUpperCase();
    this.last = result[0].last.toUpperCase();
    this.enroll = result[0].employee_id;
    this.password = result[0].password;
    this.email = result[0].email;


    console.log("FIRST:", this.first);
    console.log("LAST", this.last);
    console.log("ENROLL", this.enroll);

  }
  show() {

    this.hideBtn = true;
    this.showBtn = false;
    this.type = "text"

  }
  hide() {


    this.showBtn = true;
    this.hideBtn = false;
    this.type = "password";

  }
  async updateForm() {

    try {
      const data = this.fbFormGroup.value;
      console.log("DATAA:",data)
      

      const url = `http://localhost:3200/api/faculties/${sessionStorage.getItem('token')}`;
      console.log("URL:", url);
  
      let result = await this.http.put(url, data).toPromise();
      console.log("RESULTTTT:", result);
    } catch (error) {
      console.log(error);
    }
  

  }

}
