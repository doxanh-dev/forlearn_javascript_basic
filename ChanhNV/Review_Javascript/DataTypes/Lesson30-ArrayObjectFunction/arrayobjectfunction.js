
//array.valueOf
var arrayvalueOf = ['Stuty', 'Javascript', 'Reactjs', 'Vuejs', 'AngularJs']
document.write('Function array.valueOf: ' +'</br>' + arrayvalueOf.valueOf() + '</br>' );

// array.push()
//Add and print
arrayvalueOf.push('Jquery');
document.write('After add content: ' +arrayvalueOf.valueOf() + '</br>');

//array.pop()
//Remove and print
arrayvalueOf.pop();
document.write('After pop array: ' + arrayvalueOf.valueOf() + '</br>');

//array.shift()
// shift and print
arrayvalueOf.shift();
document.write('After shift array: ' + arrayvalueOf.valueOf() + '</br>');

//array.unshift()
arrayvalueOf.unshift('hello');
document.write('After unshift array: ' + arrayvalueOf.valueOf() + '</br>');

//array.splice()
arrayvalueOf.splice(1, 2, 'Java', 'basic');
document.write('After splice: ' + arrayvalueOf.valueOf() + '</br>');


//array.sort()
arrayvalueOf.sort();
document.write('After sort: ' + arrayvalueOf.valueOf() + '</br>');

//array.reverse()
arrayvalueOf.reverse();
document.write('After reverse: ' + arrayvalueOf.valueOf() + '</br>');

//array.concat()
var array02 = ['CSharp', 'Python']
var arrayParent = arrayvalueOf.concat(array02);
document.write('After concat arrayParent: ' + arrayParent.valueOf() + '</br>');

//array.slice()
var arrayNew = arrayParent.slice(3, 5);
 
// In ra thử
document.write('After slice arrayNew: ' + arrayNew.valueOf() + '</br>');
