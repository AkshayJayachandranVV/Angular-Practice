import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
      name: string = "IPhone 12";
      price: number = 999.99;
      color: string = "Black Matte";
      stock:number = 4
      getDetails() {
        return this.price * this.price
      }

      onNameChange(){
        this.name = "Mark"
      }

}
