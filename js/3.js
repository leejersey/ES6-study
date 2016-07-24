'use strict';
//解构数组 - Array Destructuring 

function breakfirst(){
	return ['cake','coffe','apple'];
}

// var temp = breakfirst(),
// 	dessert = temp[0],
// 	drink = temp[1],
// 	fruit = temp[2];

// console.log(dessert,drink,fruit);


let [dessert,drink,fruit] = breakfirst();


console.log(dessert,drink,fruit);
