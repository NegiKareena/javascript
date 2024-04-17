const name = "Kareena"
const repoCount = 10
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)// use of backtips string intopolation
const gameName= new String ('Kareena Negi')// created one using new keyword 
/** Output in the console is 
 * String{'Kareena'}(object type (key : value pair )) it contains a lot of methods 
 */
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName) // Output [String: 'Kareena Negi'] ( value remain same as it is store in stack )
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0,2))
const newString="KareenaNegi"
console.log(newString.slice(3,5));
//FOR URL
const url ="https://kareena.com/manage%20"
console.log(url.replace('%20', '-'))
//includes
console.log(url.includes('kareena'))// true or false 
 //split function 
 let onemore ="Kareena_Kareena_Kareena"
 console.log(onemore.split("_"));//give array and split it from _