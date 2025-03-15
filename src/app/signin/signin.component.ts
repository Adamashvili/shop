import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public service: ApiService, public cookie: CookieService, public router: Router){}

  public formInfo: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })


  login() {
    this.service.signIn(this.formInfo.value).subscribe({
      next: (data: any) => {
        this.cookie.set("user", data.access_token)
        this.router.navigate(["/"])
      },
      error: () => {}
    })
    
  }
}
