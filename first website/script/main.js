// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");

// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "oimmain.webp") {
        myImage.setAttribute("src", "pexels-souvenirpixels-414612.jpg");
    } else {
        myImage.setAttribute("src", "oimmain.webp");
    }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("H1");
function setUserName() {
    const myName = prompt("please enter your name.");
    if (!myName){
        setUserName();
    }else{
    localStorage.setItem("name", myName);//"name" is the key under which the value of myName (entered by the user) is saved.
    myHeading.textContent = `MIT is cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `MIT is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
});