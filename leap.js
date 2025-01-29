function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}
const year = parseInt(prompt("Entrez une année :"), 10);
if (isLeapYear(year)) {
  console.log(`${year} est une année bissextile.`);
} else {
  console.log(`${year} n'est pas une année bissextile.`);
}
