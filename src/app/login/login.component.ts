import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public passwordToggle = false
  public loading = false
  public loginForm: FormGroup

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {

  }

  buildForm() {
    this.loginForm = this.fb.group({
      name: '',
      password: '',
    })
  }
  togglePassword(event: MouseEvent) {
    event.stopPropagation();
    this.passwordToggle = !this.passwordToggle;
  }

}
