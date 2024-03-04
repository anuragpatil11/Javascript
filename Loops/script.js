// console.log("hello Anurag");
// console.log("hello Anurag");
// console.log("hello Anurag");
// console.log("hello Anurag");
// console.log("hello Anurag");

// for-loop

// for (let i = 1; i <= 5 ; i++){
//     console.log("hello Anurag");
// }

// while-loop

// let i=1;
// while (i<=7) {
//     console.log("hello Anurag");
// }

//do-while

// let i=20;
// do {
//     console.log("hello Anurag");
// } while (i<=10);

//for of

// let str="helloAnurag";
// for (let i of str) { // iterator it print iterator(i) 
//     console.log(i);
// }

// for-in

// let student = {
//     //key : value
//     name:"anurag",
//     branch:"it",
//     address:"burhanpur"
// }

// for (const key in student) {
//     console.log(key,student[key]);   // it prints the key of the object(student)
// }

// Practice

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

let gnum=5;
let num = prompt("Enter the Guess num: ");
console.log(num);
while(gnum != num){
    num=prompt("Guess again!!:");
}
console.log("hurrey u gussed right num !!");
