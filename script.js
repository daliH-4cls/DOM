console.log("Script started");

// Variable to track number of clicks
let clicks = 0;

// Variable to store the click counter h1
let clickDisplay = document.getElementById("click-display");

// Set initial text for click counter
clickDisplay.innerText = "Clicks: " + clicks;

// Called each time the image is clicked
function handleClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + 1;

    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;
}