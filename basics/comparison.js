console.log(2>1);
console.log("02">1)//true (automically converted to numbers but its not recommended to do so )
console.log(null>0)//false
console.log(null>=0)//true as comparison convert null to a number , treating it as 0. that's why (null>=0)is true and (1)null>0 is false.
console.log(null==0); //false // here == works different 
// undefined give zero 

// ** strict check ===
console.log("3"===3);// check type as well  gives false
