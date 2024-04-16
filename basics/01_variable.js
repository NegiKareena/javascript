const accountId = 144553// ek baar se hi constant 
let accountEmail= "kareena@gmail.com"// use let 
var accountPassword="12345"// this is not use generally //block scope  and functional scope problem is here 
accountCity="Jaipur"// not a good idea 
let accountState;// haven't assign any value so it give out put as undefined 
 
// accountId=2 will give error 
accountEmail= "Kareenanegi@gmail.com"
accountPassword="232"
accountCity="Chd"
console.table(accountId, accountEmail, accountPassword, accountCity,accountState)// table can access  multiple 
