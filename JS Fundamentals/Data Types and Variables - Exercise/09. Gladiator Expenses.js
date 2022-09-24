function gladiatorEquipment(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

  let totalCost = 0;
  let shieldBrokenCount = 0;

  for (let i = 1; i <= lostFightCount; i++) {
    let isHelmetBroken = false;
    let isSwordBroken = false;

    if (i % 2 == 0) {
      totalCost += helmetPrice;
      isHelmetBroken = true;
    }
    if (i % 3 == 0) {
      totalCost += swordPrice;
      isSwordBroken = true;
    }
    if (isHelmetBroken && isSwordBroken) {
      totalCost += shieldPrice;
      shieldBrokenCount++;
    }
    if (shieldBrokenCount % 2 == 0 && shieldBrokenCount > 0) {
      totalCost += armorPrice;
      shieldBrokenCount = 0;
    }
  }
  console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}
//gladiatorEquipment(7, 2, 3, 4, 5);
gladiatorEquipment(23, 12.50, 21.50, 40, 200);