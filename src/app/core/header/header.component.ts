import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/services/login.service';
LoginService
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private LoginService:LoginService ) { }
    login(){
      this.LoginService.login()
    }
  ngOnInit() {
  }

}
