import {Component} from "@angular/core";
import {ProductRepository} from "../service/product-repository.service";

@Component({
    selector: 'app',
    templateUrl: 'app/components/product.component.html'
})
export class ProductComponent{
    productRepository = new ProductRepository();

}