function SuppliesForSchool(input) {

    let NumberOfPacketsOfPens = Number(input[0]);
    let NumberOfTokenPakets = Number(input[1]);
    let LitersOfDetergent = Number(input[2]);
    let PercentReduced = Number(input[3]);

    let CoutPaccketsOfPens = NumberOfPacketsOfPens * 5.80;
    let CountOfTokenPakets = NumberOfTokenPakets * 7.20;
    let CountOfDetergent = LitersOfDetergent * 1.20;
    let CountOfAllMaterials = CoutPaccketsOfPens + CountOfTokenPakets + CountOfDetergent
    let CountWithDiscount = CountOfAllMaterials - (CountOfAllMaterials * 0.25)

    console.log(CountWithDiscount);

    
}
SuppliesForSchool(["2", "3", "4", "25"]);