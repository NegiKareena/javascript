// stack memory is used in primitive type it means whatever variable you have declared
/* you get a copy of it and for the refernce variable you get the reference of the variable 
so all the changes that take place will reflect in original as well 
 */
let myName = "Kareena"// store in stack 
let anothername = myName //store in stack copy is given 
console.log(anothername)// Kareena
anothername = "Kareena Negi"
console.log(anothername)// Kareena Negi
console.log(myName)//Kareena (No change in original value )


// for non primitive type 
let userOne ={
    email:"hi@google.com",
    upi:"user@ybi"
}
let userTwo= userOne // refernce of the userOne is given to userTwo
userTwo.email="hihihiaa2google.com"
console.log(userTwo.email);//hi@google.com
console.log(userOne.email);//changed to hihihiaa2google.com