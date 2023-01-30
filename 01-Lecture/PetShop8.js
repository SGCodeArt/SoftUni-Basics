function petShop(input) {
    let dogFoodPricePerPackage = 2.50;
    let catFoodPricePerPackage = 4;
    let numberOfPackagesDogFood = Number(input[0]);
    let numberOfPackagesCatFood = Number(input[1]);
    let result= (dogFoodPricePerPackage * numberOfPackagesDogFood) + (catFoodPricePerPackage * numberOfPackagesCatFood);

    // console.log(`${result} lv.`); interpolaciq
    // console.log(result + ' lv.'); konkatenaciq
    console.log(`${result} lv.`);
   
}
petShop(["13", "9"]);