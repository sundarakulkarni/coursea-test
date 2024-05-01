if (equalDistribution) {
  var sumDice = random.nextInt(2 * maxDie - 2 * minDie + 1) + 2 * minDie;
  //print(sumDice);
  var die1, die2;
  do {
    die1 = random.nextInt(maxDie - minDie + 1) + minDie;
    die2 = sumDice - die1;
  } while (die2 > maxDie || die2 < minDie);

  die[0] = die1;
  die[1] = die2;
  //print('sumDice: $sumDice\nDice 1: ${die[0]}\nDice 2: ${die[1]}');
} else {
  die[0] = minDie + random.nextInt(maxDie - minDie + 1);
  die[1] = minDie + random.nextInt(maxDie - minDie + 1);
}
