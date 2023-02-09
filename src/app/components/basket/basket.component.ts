import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {IProducts} from "../../models/products";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements  OnInit{

  constructor(private productService: ProductsService) { }

  basket: IProducts[]
  basketSubscription: Subscription


  ngOnInit(): void {
    this.basketSubscription = this.productService.getProductFromBasket().subscribe(data => {
      this.basket = data;
    })
  }


  ngOnDestroy() {
    if (this.basketSubscription) this.basketSubscription.unsubscribe()
  }

  plusItemFromBasket(item: IProducts) {

    item.quantity += 1;
    this.productService.updateProductToBasket(item).subscribe(() => {
    })
  }

  minusItemFromBasket(item: IProducts) {
  if (item.quantity === 1) {
    this.productService.deleteProductFromBasket(item.id).subscribe(() => {
      let idx = this.basket.findIndex(data => data.id === item.id);
      this.basket.splice(idx, 1)
    })
  } else {

    item.quantity -= 1;
    this.productService.updateProductToBasket(item).subscribe(() => {})
  }

  }
}
