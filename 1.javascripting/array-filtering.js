const number = [1,2,3,4,5,6,7,8,9,10];

function evenNumbers (number) {
    return number % 2 === 0;
}
const filtered = number.filter(evenNumbers);
// const filtered = number.filter(function (number) {
//     return number % 2 === 0
// })
console.log(filtered);