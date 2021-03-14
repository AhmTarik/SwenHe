
module.exports = class coffeeProductSchema {
    constructor(code, productType, waterLine, coffeFlavor, packSize) {
        this.code = code;
        this.productType = productType;
        this.waterLine = waterLine;
        this.coffeFlavor = coffeFlavor;
        this.packSize = packSize;
    }
}