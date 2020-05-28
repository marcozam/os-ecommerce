import { Component, OnInit } from '@angular/core';
// Services
import { OSAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  value: { username: string, password: string } = { username: '', password: '' };

  constructor(private osAuth: OSAuthService) {
  }

  ngOnInit() {
  }

  login() {
    const { username, password } = this.value;
    this.osAuth.login(username, password);
  }

}
