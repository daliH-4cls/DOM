console.log("Script started");

// Variable to track number of clicks
let clicks = 0;

let clickValue = 1;

// Variable to store the click counter h1
let clickDisplay = document.getElementById("click-display");

// Set initial text for click counter
clickDisplay.innerText = "Clicks: " + clicks;

// Called each time the image is clicked
function handleClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + clickValue;

    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;

    // Jumps to level 2, 2 clicks worth
    if (clicks == 10) {
        alert("Level 2");
        clickValue = 2;
    }
    // Jumps to level 3, 5 clicks worth
    else if (clicks == 50) {
        alert("Level 3");
        clickValue = 5;
    }
}