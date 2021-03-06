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

//Getting avg from the sum  

  var avg = sum / items.length;

//Convert to 2 decimal places

  var converted = avg.toFixed(2);

  var str = 'The average price is $' + converted;

//Transfer string to the p element  

  var answer1 = document.querySelector('#answer1');
  var textNode = document.createTextNode(str);

  answer1.appendChild(textNode);

    // Create a list & add to document(HTML) at given selector
 function addList(selector, list) {
   var container = document.querySelector(selector);
   var ul = document.createElement('ul');

   list.forEach(function(item){
     var li = document.createElement('li');
     var node = document.createTextNode(item);

     li.appendChild(node);
     ul.appendChild(li);
   });

   container.appendChild(ul);
 };

// Create a pargraph and add to document(HTML) at given selector
  function addParagraph(selector, text) {
    var container = document.querySelector(selector);
    var p = document.createElement('p');
    var node = document.createTextNode(text);
    p.appendChild(node);
    container.appendChild(p);
  };



//Answer 2 

  //searching and pushing out items between 14 - 18 dollars

var brandNew = [];

var avgprice = items.filter(function (item) {
  if (item.price > 14  && item.price < 18) {
    brandNew.push(item.title);
  };
});

  //listing the items

  addList('#answer2', brandNew);

  //Answer 3

  //filtering out title and price of items with GBP code

var fortyOz1 = [];
var fortyOz2 = [];

var maltLiquor = items.filter(function (item) {
  if (item.currency_code === 'GBP') {
    fortyOz1.push(item.title);
    fortyOz2.push(item.price);
  };
});  

  //posting answers to html and adding pound code before price

  var answer3a = document.querySelector('#answer3a');
  var textNode3a = document.createTextNode(fortyOz1 + ' costs \u00A3' + fortyOz2);

  var answer3b = document.querySelector('#answer3b');
  var textNode3b = document.createTextNode(fortyOz2);

  answer3a.appendChild(textNode3a);


  //Answer 4

  //looking for objs that have the material wood and pushing them to another array

  var woodyWood = [];

  var hardKnocks = items.filter(function (obj) {
    if (obj.materials.indexOf('wood') !== -1) {
      woodyWood.push(obj.title);
    };
});


  //taking new array and pushing answers to other vars

  var wood1 = woodyWood.shift();
  var wood2 = woodyWood.shift();
  var wood3 = woodyWood.shift();
  var wood4 = woodyWood.shift();
  var wood5 = woodyWood.shift();

  //sending all individual vars to html list

  var answer4a = document.querySelector('#answer4a');
  var textNode4a = document.createTextNode(wood1);

  answer4a.appendChild(textNode4a);

  var answer4b = document.querySelector('#answer4b');
  var textNode4b = document.createTextNode(wood2);

  answer4b.appendChild(textNode4b);

  var answer4c = document.querySelector('#answer4c');
  var textNode4c = document.createTextNode(wood3);

  answer4c.appendChild(textNode4c);

  var answer4d = document.querySelector('#answer4d');
  var textNode4d = document.createTextNode(wood4);

  answer4d.appendChild(textNode4d);

  var answer4e = document.querySelector('#answer4e');
  var textNode4e = document.createTextNode(wood5);

  answer4e.appendChild(textNode4e); 

  //Answer 5

  //Looking for obj with that has more than 8 materials

  var manyMats = items.filter(function (obj) {
    if (obj.materials.length > 8) {
      return true
    };  
});

  //taking the answer and displaying how many materials it has and adding a list of the materials

    manyMats.forEach(function (obj) {
      addParagraph('#answer5', obj.title + ' has' + obj.materials.length + ' materials:');
      addList('#answer5', obj.materials);
    });  

  //Answer 6

  var createMan = items.filter(function (obj) {
    return obj['who_made'] === 'i_did';
  });

  addParagraph('#answer6', createMan.length + ' were made by their sellers');


}());



