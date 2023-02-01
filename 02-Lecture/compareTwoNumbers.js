function greaterNumber(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let result = "Greater Number: " ;

    if (a > b) {
        console.log(result + a);
    } else {
        console.log(result + b);         
    }
    
}

greaterNumber([7,3]);