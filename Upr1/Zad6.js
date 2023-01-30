function Repainting(input) {
    let NecessaryAmountOfNail = Number(input[0]);
    let NecessaryAmountOfPaint = Number(input[1]);
    let AmountOfThinner = Number(input[2]);
    let Hours = Number(input[3]);

    let CountForNail = (NecessaryAmountOfNail + 2) * 1.50;
    let CountForPaint = (NecessaryAmountOfPaint * 1.10) * 14.50;

    let CountForThinner = (AmountOfThinner * 5);
    let AmountForBags= 0.40;
    let TotalAmountForMaterials = CountForNail + CountForPaint + CountForThinner + AmountForBags;
    let TotalAmountForMasters = (TotalAmountForMaterials * 0.30) * Hours;

    let TheSumOfAllCosts = TotalAmountForMaterials + TotalAmountForMasters;
    console.log(TheSumOfAllCosts);

}
Repainting(["10", "11", "4", "8"]);