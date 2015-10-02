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



//Answer 2
var brandNew = [];

var avgprice = items.filter(function (item) {
  if (item.price > 14  && item.price < 18) {
    brandNew.push(item.title);
    // console.log(brandNew);
  };
});
  console.log(brandNew);


  var answer2 = document.querySelector('#answer2');
  // var textNode2 = document.createTextNode(brandNew);

  // answer2.appendChild(textNode2);
  var numberOfListItems = brandNew.length;

  brandNew.forEach(function (x) {
  answer2.appendChild(document.createTextNode(x + "\n\n\n"));
});

}());
