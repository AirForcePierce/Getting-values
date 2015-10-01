// Answer 1

(function () {

//Mapping out array of all prices

  var prices = items.map(function (item) {
    return item.price;
  });

  // console.log(prices);

//Getting the sum of all prices

  var sum = prices.reduce( function (prev, next) {
    return prev + next;
  })

  // console.log(sum);

//Getting avg from the sum  

  var avg = sum / items.length;
  // console.log(avg);

//Convert to 2 decimal places

  var converted = avg.toFixed(2);
  // console.log(converted);

  var str = 'The average price is $' + converted;
  // console.log(str);

//Transfer string to the p element  

  var answer1 = document.querySelector('#answer1');
  var textNode = document.createTextNode(str);

  answer1.appendChild(textNode);


}());


//Answer 2

(function () {

    var prices = items.map(function (item) {
    return item.price;
  });

  console.log(prices);




});












// (function (totalAvg) {
  

//   console.log(items);
//   var arrayPrice = [];

//   items.map(function() {
//       for (i = 0; i < 25; i++)
//        var item = items[i].price * parseInt(items[i].quantity);
//          arrayPrice.push(item);
//   }); //end of map method;

//   console.log(arrayPrice);
// }());