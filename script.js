 // Get a reference to the button element by its ID
 let btn = document.querySelector(".btn2");
 let luckNumber = document.querySelector(".luckyNumber");

 // Add a click event listener to the button
 btn.addEventListener("click", function () {
     // Generate a random number between 1 and 20
     let randomNumber = Math.floor(Math.random() * 20) + 1;

     // Display the random number
     luckyNumber.textContent = "Random Number: " + randomNumber;
 });
 console.log("helloworld");