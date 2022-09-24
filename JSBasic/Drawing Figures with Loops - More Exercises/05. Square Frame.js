function squareFrame(input) {
    let num = Number(input[0]);
    let buff = "";
  
    for (let i = 1; i <= num; i++) {
      for (let a = 1; a <= num; a++) {
        if (a == 1 || a == num) {
          if (i == 1 || i == num) {
            buff += "+ ";
          } else if (a == 1 || a == num) {
            buff += "| ";
          }
        }
        if (a > 1 && a < num) {
          buff += "- ";
        }
      }
      console.log(buff);
      buff = "";
    }
  }