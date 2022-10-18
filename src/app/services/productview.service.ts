import { Injectable } from '@angular/core';
import { ProductJson } from '../models/product';
import { ProductViewMapper } from './productviewmapper.service'
import { BackendService } from './backend.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductViewService {
  private products: ProductJson[] = [];

  constructor(
    private backend: BackendService,
    private mapper: ProductViewMapper
  ) { }

   async getProductView() {
    // Get the products and map it into a productview
    const products$ = this.backend.getAll();
    this.products = await lastValueFrom(products$);
    var productView = this.mapper.mapProductList(this.products);
      
    // Group the servicename/productname and calculate the totalvolume.
    var i, key, split;
    var array: any[] = productView;   
    var groupeddata = array.reduce((result,currentValue : any) => {
        key = "";
        var keys = ["ProductName", "ServiceName"];
        var  sum = "TotalVolume";
        for(i = 0; i < keys.length; i++) {
            key = key + currentValue[keys[i]] + "_";
        }
        if(!result[key]) {
            result[key] = 0;
        }
        result[key] += parseFloat(currentValue[sum]); 
        return result;
    }, {});
    
    // Rearrange the productview with the unique servicename/productname and calculated volume. 
    productView = [];
    Object.keys(groupeddata).forEach(function(key) {
        split = key.split("_");
        productView.push({ ProductName: split[0], ServiceName:  split[1], TotalVolume: parseFloat(groupeddata[key]) });
    });

    return productView;
  }
}