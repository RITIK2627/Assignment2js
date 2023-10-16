// Constants for query selector
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const myStudentId = document.getElementById("myStudentId");

// Array to store image source locations
const imageSources = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];

// Function to change background color based on user input
function changeCustomColor() {
    // Get user input as an integer
    const userInput = parseInt(customNumberInput.value);
    // Change the background color based on user input
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
    // Display student ID 
    myStudentId.textContent = "My Student ID: 200544013";
}

// Function to change background color randomly
function changeRandomColor() {
    // Generate a random number between 1 and 100
    const randomValue = Math.floor(Math.random() * 100) + 1;
    // Call changeCustomColor with the random value
    changeCustomColor(randomValue);
    // Set the input field value to the random value
    customNumberInput.value = randomValue;
}

// Function to generate options for select list
function addList() {
    // Loop through imageSources and create options for the select list
    for (let i = 0; i < imageSources.length; i++) {
        const option = document.createElement("option");
        option.value = imageSources[i];
        option.text = `Image ${i + 1}`;
        imageSelect.appendChild(option);
    }
}

// Function to change the displayed image
function changeImage() {
    // Get the selected image source from the select list
    const selectedImageSrc = imageSelect.value;
    // Set the image element's source to the selected source
    images.src = selectedImageSrc;
}

// Event listeners
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);

// Initialize the select list with image options
addList();
