// var names = ['Drey', 'Denis', 'Misha'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Drey'));
//
// var person = {
//   name: 'Drey',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(4, 7));

// addExpression
var addExpression = (a, b) => a + b;

console.log(addExpression(1, 2));
