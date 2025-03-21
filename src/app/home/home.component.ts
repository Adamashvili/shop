import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(public service: ApiService, public cookies: CookieService) {}
  ngOnInit(): void {
    this.getAll();
  }

  public allCards: any[] = [];
  public noImage: string =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  getAll() {
    this.service.getAllProducts().subscribe( {
      next: (data: any) => this.allCards = data.products,
      error: () => {},
    });
  }

  addToCart(item: any) {
    if(this.cookies.get("user")) {
      let cardInfo = {
        id: item._id,
        quantity: 1,
      };
      this.service.getUser().subscribe((data: any) => data.cartID ? this.service.updateCart(cardInfo).subscribe() : this.service.postToCart(cardInfo).subscribe());
    }
    else {
      alert("არ ხართ ავტორიზებული!!!")
    }
   
  }
}
