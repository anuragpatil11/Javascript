/*let newText = document.querySelector("h2"); // access the element 
console.dir(newText);
newText.innerText = newText.innerText + " from Apna college"; // concatenate
console.log(newText.innerText);

let divs = document.querySelectorAll(".box");
divs[0].innerText = " hello i am first div. ";
divs[1].innerText = " hello i am second div. ";
divs[2].innerText = " hello i am third div. ";
*/


// add an element

let newbtn = document.createElement("button"); // create an element button which we want to add
newbtn.innerText = "click me"; // text inside btn tag 
newbtn.style.backgroundColor="black"; // background color of button
newbtn.style.color="white"; // text color of button
let body = document.querySelector("body") // to add btn we have to select the node (body)
body.prepend(newbtn); // prepend method is used to add the element inside the node at the top

let para = document.querySelector("p");
// para.getAttribute("class");
// 'para-1'
// para.setAttribute("class","para-2");

para.classList.add("para-2"); // we use classlist here to give two classes style on one paragraph element
// para.classList.remove("para-2") // remove is used to remove new class 