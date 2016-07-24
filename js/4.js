'use strict';
//解构对象 - Object Destructuring 

function breakfirst(){
	return {
		dessert:'cake',
		drink:'coffe',
		fruit:'apple'
	};
}


let {
	dessert:dessert,
	drink:drink,
	fruit:fruit
} = breakfirst();


console.log(dessert,drink,fruit);