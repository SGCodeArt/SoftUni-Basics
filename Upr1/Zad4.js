function compulsoryLit(input) {
    let currentBookPages = Number(input[0]);
    let PagesPerHour = Number(input[1]);
    let DaysCount = Number(input[2]);

    let TotalHours = currentBookPages / PagesPerHour;
    let hoursPerDay = TotalHours / DaysCount;
    console.log(hoursPerDay);
    
}

compulsoryLit(["212", "20", "2"]);
