(function (totalAvg) {
  

  console.log(items);
  var arrayPrice = [];

  items.map(function() {
      for (i = 0; i < 25; i++)
       var item = items[i].price * parseInt(items[i].quantity);
         arrayPrice.push(item);
  }); //end of map method;

  console.log(arrayPrice);
}());