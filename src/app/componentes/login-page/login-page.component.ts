import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-logi-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private pf: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.pf.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });
  }

  onSubmit() {
    const credenciales = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    return credenciales;
  }

}

