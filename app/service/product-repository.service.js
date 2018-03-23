"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simple_datasource_service_1 = require("./simple-datasource.service");
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
        var _this = this;
        this.products = [];
        this.locator = function (_product, _id) { return _product.id == _id; };
        this.dataSource = new simple_datasource_service_1.SimpleDatasource();
        this.dataSource.getProducts().forEach(function (_product) {
            _this.products.push(_product);
        });
    }
    ProductRepository.prototype.getProducts = function () {
        return this.products;
    };
    ProductRepository.prototype.getProduct = function (id) {
        var _this = this;
        return this.products.find(function (_product) { return _this.locator(_product, id); });
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (!(product.id) || product.id == 0) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            var index = this.products.findIndex(function (_product) { return _this.locator(_product, product.id); });
            this.products.splice(index, 1, product);
        }
    };
    ProductRepository.prototype.generateID = function () {
        var candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
