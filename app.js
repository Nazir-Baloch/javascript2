// Chp#21-25====task#1

// var name1 = "Nazir";
// var name2 = "Ahmed";
// var fullName = name1+name2
// console.log(fullName);

// Chp#21-25====task#7
// var text = "Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser."
// var indxNum = text.indexOf('Hyderabad');
// var firstText = text.slice(0,indxNum);
// var replacingText = 'Islam';
// var thirdText = text.slice(indxNum+5);
// console.log(firstText + replacingText + thirdText)

// Chp#21-25====task#5
// var a = "Pakistani";
// console.log(a.charAt(3))

// Chp#21-25====task#3
// var text = "Pakistani";
// var name = text.indexOf('n')
// document.write(name)

// Chp#21-25====task#4
// var text = "Hello World";
// var n = text.lastIndexOf('l')
// document.write(n)

// Chp#21-25====task#6
// var name1 = "Nazir ";
// var name2 = "Ahmed";
// var res = name1.concat(name2);
// document.write(res)

// Chp#21-25====task#8
// var message = "Ali and Sami are best friends.They play cricket and football togather.";
// var message1 = message.replace( /and/g,"&");
// document.write(message1)

// Chp#21-25====task#9
// var a = parseInt("472");
// console.log(a)

// Chp#21-25====task#10
// var name = prompt('Enter Your Name');
// name = name.toUpperCase()
// var arr = ['peanuts']
// for (var  i=0; i<arr.length; i++){
//     if(arr[i] === name){
//         alert('Name is found')
//     } else{alert('Name is not found')}
// }

// Chp#21-25====task#12

//  var num = 35.36;
// num = num.toString();
// newNum = num.split('.').join("");
// document.write("Number: "+num);
// document.write("<br>");
// document.write("Result: "+newNum);

// Chp#21-25====task#14

// var product = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter your search");
// if(product.indexOf(search) !== -1){
//     alert( "yes " + search + " is available in bakery")
// } else{
//     alert( "no " + search + " is not available in bakery")
// }

// Chp#21-25====task#17
// const myString = "Pakistan";
// const stringLength = myString.length;
// console.log('lastChar: ', myString.charAt(stringLength - 1));


// Chp#21-25====task#18

// var str = "The quick brown fox jumps over the lazy dog.";
// var pos = str.lastIndexOf("the");
// console.log(pos);


//  =====Chp# 26-30======

// chp#26-30====task#1(a)
// var num = 3.45214

// chp#26-30====task#1(b)
// // var num = 3.45214
// // var round = Math.round(num)
// // console.log(round)

// chp#26-30====task#1(c)
// // var num = 3.45214
// // var floor = Math.floor(num)
// // console.log(floor)

// chp#26-30====task#1(d)
// var num = 3.45214
// var ceil = Math.ceil(num)
// console.log(ceil)

// chp#26-30====task#2(a)
// var num = -2.673

// chp#26-30====task#2(b)
// // var num = -2.673
// //  var round = Math.round(num)
// //  console.log(round)

// chp#26-30====task#2(c)
// // var num = -2.673
// //  var floor = Math.floor(num)
// //  console.log(floor)

// chp#26-30====task#2(d)
// //  var num = -2.673
// //  var ceil = Math.ceil(num)
// //   console.log(ceil)

// chp#26-30====task#3

// function myFunction() {
//     document.write = Math.abs(-4);
//   }

// chp#26-30====task#4

// var head = prompt("Enter head username")
// var tail = prompt("Enter tail username")
// var toss = Math.random() * 6;
// var floor = Math.floor(toss)
// console.log(floor)

// chp#26-30====task#5
// var headsuser = prompt("Enter head username")
//  var tailsuser = prompt("Enter tail username")
//  var toss = Math.random() * 2;
//  var floor = Math.floor(toss)
//  if(floor === 0){
//      alert("random coin value " + headsuser + " Heads")
//  } else{
//     alert("random coin value " + tailsuser + " Tails")
//  }

// chp#26-30====task#6
//  var random = Math.random() * 101;
//  document.write(random)

// chp#26-30====task#8
// var input = prompt("Enter your number");
//   var random = Math.random() * 11;
//   var floor = Math.floor(random)
//   if(floor === 0){
//       alert("Congratulations...")
//   }else{
//       alert("Try again!")
//   }


// =====Chp# 31-34======

// chp#31-34====task#1
// var rightNow = new Date();
// console.log(rightNow);

// chp#31-34====task#2
// var a = new Date();
// var currentMonth = a.getMonth(5);
// alert(currentMonth);

// chp#31-34====task#3
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// alert(c);


