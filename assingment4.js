let num = prompt("Enter a number: ");

for (let i = 1; i <= 10; i++) {
document.write(`${num} x ${i} = ${num * i }`+ "<br>") + "<br>";
  }+"<br>"
  


      let cars = [  "Apple" + "<br>" , "Banana" + "<br>", "Grapes" + "<br>", "Mango" + "<br>" , "Strawberry" +"<br>"];
     document.write(cars + "<br>")

  
 let counting = [ "Counting :-"+ " " +1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,]
 document.write(counting + "<br>")

 let reversecounting = [ "Reverse Counting :-" + " " + 15,14,13,12,11,10,9,8,7,6,5,4,3,2,1] 
 document.write(reversecounting + "<br>")

 let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let odd = []
let even = []

for( let i = 0 ; i < number.length ; i++ ){
    if (number[i]%2 == 0) {
        even.push(number[i]) 
    }
    else(
        odd.push(number[i]) 
    )
}
document.write( "odd :-"+ " " + odd + "<br>");
document.write( "even :-"+ " " +even + "<br>");

let series = [ "Series :-" + " " + "1k","2k","3k","4k","5k","6k","7k","8k","9k","10k"]

document.write(series +"<br>")

alert ('Welcome to rahmat - e - shree bakery')

prompt ('What do you want sir/mam ')

let bakery = ["Pastry","Cake","Cookie",]


if (prompt = "Pastry" ) {
alert ('pastry is availabel')
} else {
  document.write('sorry we dont have another thing')
}