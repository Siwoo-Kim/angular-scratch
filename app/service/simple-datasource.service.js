"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_model_1 = require("./model/product.model");
var SimpleDatasource = /** @class */ (function () {
    function SimpleDatasource() {
        this.products = [
            new product_model_1.Product(1, "Kayak", "Watersports", 275),
            new product_model_1.Product(2, "Lifejacket", "Watersports", 48.95),
            new product_model_1.Product(3, "Soccer Ball", "Soccer", 19.50),
            new product_model_1.Product(4, "Corner Flags", "Soccer", 34.95),
            new product_model_1.Product(5, "Thinking Cap", "Chess", 16)
        ];
    }
    SimpleDatasource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDatasource;
}());
exports.SimpleDatasource = SimpleDatasource;
