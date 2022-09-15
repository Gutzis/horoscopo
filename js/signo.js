function signoCalculo(dataAniversario) {
  const mes = dataAniversario.getMonth() + 1;
  const dia = dataAniversario.getDate();
  let signo;
  switch (mes) {
    case 1:
      if (dia >= 20) {
        signo = 11;
      } else {
        signo = 10;
      }
      break;
    case 2:
      if (dia >= 19) {
        signo = 12;
      } else {
        signo = 11;
      }
      break;
    case 3:
      if (dia >= 21) {
        signo = 1;
      } else {
        signo = 12;
      }
      break;
    case 4:
      if (dia >= 21) {
        signo = 2;
      } else {
        signo = 1;
      }
      break;
    case 5:
      if (dia >= 21) {
        signo = 3;
      } else {
        signo = 2;
      }
      break;
    case 6:
      if (dia >= 21) {
        signo = 4;
      } else {
        signo = 3;
      }
      break;
    case 7:
      if (dia >= 23) {
        signo = 5;
      } else {
        signo = 4;
      }
      break;
    case 8:
      if (dia >= 23) {
        signo = 6;
      } else {
        signo = 5;
      }
      break;
    case 9:
      if (dia >= 23) {
        signo = 7;
      } else {
        signo = 6;
      }
      break;
    case 10:
      if (dia >= 23) {
        signo = 8;
      } else {
        signo = 7;
      }
      break;
    case 11:
      if (dia >= 22) {
        signo = 9;
      } else {
        signo = 8;
      }
      break;
    case 12:
      if (dia >= 22) {
        signo = 10;
      } else {
        signo = 9;
      }
      break;
  }
  return signo - 1;
}