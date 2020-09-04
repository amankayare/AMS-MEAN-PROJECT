import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public success: boolean = false;
  public error: boolean = false;
  public result: any = [];
  public class: string;
  public msg: boolean = false;
  public msgDetail: string;


  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  ngOnInit(): void {

  }

  public fbFormGroup = this.fb.group({
    first: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern(`^[a-z]*$`)]],
    last: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25),Validators.pattern(`^[a-z]*$`)]],
    email: ['', [Validators.required, Validators.email,Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)]],
    password: ['', [Validators.required ,Validators.minLength(8)]],
    enrollment: ['', [Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern(`^[0-9]*$`)]],
    check: ['', Validators.required],
  });

  async addStudent() {

    try {
      this.msg = false;

      console.log('pressed')
      const data = this.fbFormGroup.value;
      console.log(data)
      const url = 'http://localhost:3200/api/students';

      this.result = await this.http.post(url, data).toPromise();
      console.log(this.result);

      if(this.result[0].enrollment && this.result[1].email){
        this.msg = true;
        this.success = false;
        this.error = true;
        this.msgDetail = "Student with same enrollment and email already exists";

      }
      else if (this.result[0].enrollment) {
        this.msg = true;
        this.success = false;
        this.error = true;
        this.msgDetail = "Student with same enrollment already exists";

      }else if (this.result[0].email){
        this.msg = true;
        this.success = false;
        this.error = true;
        this.msgDetail = "Student with same email already exists";

      }
      
      else {
        this.msg = true;
        this.error = false;
        this.success = true;
        this.msgDetail = "Student added successfully";
        this.fbFormGroup.reset();

      }

    } catch (error) {

      console.log(error)
    }

  }


}