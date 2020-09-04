import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flogin',
  templateUrl: './flogin.component.html',
  styleUrls: ['./flogin.component.css']
})
export class FloginComponent implements OnInit {


  public invalidCredential = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  public fbFormGroup = this.fb.group({
    employeeId: ['', Validators.required],
    password: ['', Validators.required],
  });


  async login() {
    const data = this.fbFormGroup.value;
    console.log(data)

    // ajax call
    const url = 'http://localhost:3200/api/faculties/authenticate';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.length) {
      sessionStorage.setItem('token',data.employeeId );
      this.router.navigate(['dashboard']);
    } else {
      this.invalidCredential = true;
    }
  }
}