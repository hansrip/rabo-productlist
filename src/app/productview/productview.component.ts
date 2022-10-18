import { Component, Input, OnInit } from '@angular/core';
import { ProductView } from '../models/productview';
import { ProductViewService } from '../services/productview.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  providers:  [ ProductViewService]
})
export class ProductViewComponent implements OnInit {
  productView: ProductView[] = [];
  @Input() tooltipValue: string = "";

  constructor(
    private productViewservice: ProductViewService
  ) { }

  async ngOnInit() {
    this.productView =  await this.productViewservice.getProductView();
  }
}