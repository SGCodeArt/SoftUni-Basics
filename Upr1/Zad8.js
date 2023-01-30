function BasketballEquipment(input) {

  let BasketballPracticeFee = Number(input[0]);

  let BasketballSneakers = BasketballPracticeFee - ( BasketballPracticeFee * 0.40);
  let BasketballTracksuit = BasketballSneakers - (BasketballSneakers * 0.20);
  let BasketballBall = 0.25 * BasketballTracksuit;
  let BasketballAcksessoar = 0.20 * BasketballBall;
 

  let TotalPriceForTheGrea = BasketballPracticeFee + BasketballSneakers + BasketballTracksuit + BasketballBall + BasketballAcksessoar;

  console.log(TotalPriceForTheGrea);
    
}
BasketballEquipment(["550"]);