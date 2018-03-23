import {NgModule} from "@angular/core";
import {ProductComponent} from "./components/product.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        ProductComponent,
    ],
    bootstrap: [
        ProductComponent
    ]
})
export class AppModule{ }