let score =33
// some times you don't now what type of the value you get 
console.log(typeof score); // output number
let marks="33abc"
let valueInNumber= Number(score)// remember N is caps (covert ho jaayega but marks ki value m to abc h that's not correct)
console.log(typeof valueInNumber);// output number
console.log(valueInNumber)//Nan Not a number 

let mark=null
let valueInNum= Number(score)// remember N is caps (covert ho jaayega but marks ki value m to abc h that's not correct)
console.log(typeof valueInNum);// output number
console.log(valueInNum)//0
/*
"33"=>33
"33abc"=>NaN
null=>0
similarlily for undefined  => Nan 
for boolean true => 1 and false=>

*/

let islogin = "Kareena"
let booleanType= Boolean(islogin)
console.log(booleanType);// output is true 
/*
1=> true ; 0 => false
""=> false
"k"=>true
*/

//*********Operations */
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122**
console.log(1+2+"3")//32   *** WOW
console.log(true)// output true 
console.log(+true)//1 

