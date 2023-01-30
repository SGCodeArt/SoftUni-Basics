function yardGreening(input) {
    let pricePerSquareM = 7.61;
    let totalSquareM = Number(input[0]);
    let discountP = 0.18; 
    let finalPriceNoDiscount = pricePerSquareM * totalSquareM;
    let discount = discountP * finalPriceNoDiscount;
    let finalPrice = finalPriceNoDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["150"]);