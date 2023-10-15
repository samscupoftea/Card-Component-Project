//  // Get a reference to the button element by its ID
//  let btn = document.querySelector(".btn2");
//  let luckNumber = document.querySelector(".luckyNumber");

//  // Add a click event listener to the button
//  btn.addEventListener("click", function () {
//      // Generate a random number between 1 and 20
//      let randomNumber = Math.floor(Math.random() * 20) + 1;

//      // Display the random number
//      luckyNumber.textContent = "Random Number: " + randomNumber;
//  });
//  console.log("helloworld");




// document.querySelector('.luckyNumber').textContent = 'Between 1-20 🐹';

// document.querySelector('.btn2').addEventListener('click', function(){
//     let randomNumber = Math.floor(Math.random() * 20) + 1;
//     luckyNumber.textContent = "Random Number: " + randomNumber;
// });


document.querySelector('.luckyNumber').textContent = 'Between 1-20 🐹';

let luckyNumber = document.querySelector('.luckyNumber'); // Define the luckyNumber variable here

document.querySelector('.btn2').addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    luckyNumber.textContent = "Random Number: " + randomNumber; // Use the luckyNumber variable to update the content
});
