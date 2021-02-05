const ages = [12,35,2,22,15,14]
const ages2 = [35,66,54,13,25,45]
const ages3 = [65,21,215,45,45,41]
const agesAll = ages.concat(ages2).concat([5]).concat(ages3);
console.log(agesAll);
const agesAll2 = [...ages, ...ages2, 45 , ...ages3]
console.log(agesAll2);

const largeNumber = [2,65,25,35,88,65,99]
const maximum = Math.max(...largeNumber);
console.log(maximum);