import { Injectable } from '@angular/core';
import { ProductJson } from '../models/product';
import { ProductView } from '../models/productview';

@Injectable()
export class ProductViewMapper {
    constructor() { }  

    mapProductList(json: ProductJson[]): ProductView[] {
        if (json) return json.map(this.mapProduct);
        return [];
    }

    private mapProduct(json: ProductJson): ProductView {
        return {
        ServiceName: json["ServiceName"],
        ProductName: json["ProductName"],
        TotalVolume: (json.CreditVolume == undefined? 0: json.CreditVolume*-1) + (json.DebitVolume == undefined? 0: json.DebitVolume) 
        };
    }

}