import { Component, OnInit } from '@angular/core';
// Services
import { OSAuthService } from 'services/http/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private osAuth: OSAuthService) {
  }

  ngOnInit() {
  }

  login(userName: string, password: string) {
    this.osAuth.login(userName, password);
  }

}
