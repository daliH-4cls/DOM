console.log("Script started");

// Variable to track number of clicks
let clicks = 0;

let clickValue = 1;

// Variable to store the click counter h1
let clickDisplay = document.getElementById("click-display");
// Variable to store the level display
let levelDisplay = document.getElementById("level-display");

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
        alert("Gongrats! Level 2");
        clickValue = 2;
        levelDisplay.innerText = "Level 2";
    }
    // Jumps to level 3, 5 clicks worth
    else if (clicks == 50) {
        alert("Congrats! Level 3");
        clickValue = 5;
        levelDisplay.innerText = "Level 3";
    }
}