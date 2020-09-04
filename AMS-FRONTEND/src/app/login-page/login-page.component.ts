import { Component, OnInit } from '@angular/core';
import {faJedi} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public faJedi = faJedi;
  constructor() { }

  ngOnInit(): void {
  }

}
