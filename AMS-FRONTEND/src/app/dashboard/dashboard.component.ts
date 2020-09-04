import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {faBars} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public first: string;
  public enroll: string;
  public last: string;
  public email: string;
  public password: string;
  public faBars= faBars;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getfaculty();


  }
  async getfaculty() {

    let token = sessionStorage.getItem('token');
    console.log("TOKEN:",token);

    const url = `http://localhost:3200/api/faculties/${token}`;
    console.log(url);
    const result: any = await this.http.get(url).toPromise();
    console.log("RESULT:",result);
    console.log("FIRST:", result[0].first);
    console.log("LAST:",result[0].last);
    console.log("EMP_ID:",result[0].employee_id);

    this.first = result[0].first.toUpperCase();
    this.last = result[0].last.toUpperCase();
    this.enroll = result[0].employee_id;
    this.password = result[0].password;

    

  }
  logout(){

    sessionStorage.removeItem("token")
    this.router.navigate(['flogin']);
  }
  openNav(){
    document.getElementById("myNav").style.width = "100%";

  }
   closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
}
