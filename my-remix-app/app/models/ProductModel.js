export default class ProductModel {
    constructor(code, imageUrl, name, dropRatio, price, countOfPrices, followCount) {
      this.code = code;
      this.imageUrl = imageUrl;
      this.name = name;
      this.dropRatio = dropRatio;
      this.price = price;
      this.countOfPrices = countOfPrices;
      this.followCount = followCount;
    }
  }