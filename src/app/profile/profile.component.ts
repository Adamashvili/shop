import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(public service: ApiService) {
    this.getUserData()
  }

  getUserData() {
    this.service.getUser().subscribe( (data: any) => {
      console.log(data);
      
    } )
  }
}
