//Primitive 
//7 types :String , Number, Boolean , null , undefined, Symbol , BigInt (last mai n )
// Reference Type (Non -primitive type )
//Arrays , Objects ,Functions 

//Javascript is dynamically type 
//symbol
const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);//false (Symbol stands for uniqueness)
const heroes =["Hi","hey", "Yes"];
let myObj={
    name:"Kareena", 
    age :21, 
}
const myfunc= function(){
    console.log("Heee");
}

//IMPORTANT 
// BigInt ka datatype (typeof use krke )undefined 
//similarily for null it is object 
// undefined undefined 
//myfunc ks type of  function aayega  (but it is object functions)