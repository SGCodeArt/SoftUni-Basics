function depositCalculator(input) {

    let depositSuum = Number(input[0]);
    let depositPeriodMonths = Number(input[1]);
    let yearlyIncreasePercent = Number(input[2]);

    let yearlyIncreaseDesimal = yearlyIncreasePercent / 100;

    let sum = depositSuum + depositPeriodMonths * ((depositSuum * yearlyIncreaseDesimal) / 12);
    console.log(sum);
    
}

depositCalculator(["200", "3", "5.7"]);
