// Select the form from the HTML
const form = document.querySelector("form");

// Add an event listener to the form's submit event
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    //Use FormData to extract the input value from the form
    const formData = new FormData(form);
    const colour = formData.get("colour"); // Get the value of the "colour" input field

    // Create an object to store preferences
    const preferences = {
        colour, // Store the colour
    };


  //Save the colour value to Local Storage
    localStorage.setItem("preferences", JSON.stringify(preferences))


  //Optional: Log the saved value for debugging purposes
    console.log("Preferences saved:", preferences);
});

/*
// Get the saved colour value from Local Storage
const savedColour = localStorage.getItem("colour");

// Check if a colour was saved
if (savedColour) {
    // Select the input field
    const input = document.querySelector("input");

    // Set the saved colour as the input field's value
    input.value = savedColour;

    // Optional: Log the retrieved value for debugging purposes
    console.log(`Retrieved colour: ${savedColour}`);
}
*/

// Load preferences from Local Storage on page load
const preferences = JSON.parse(localStorage.getItem("preferences")); // Parse the string back into an object

if (preferences) {
    // Set the input value to the saved colour
    const input = document.querySelector("input");
    input.value = preferences.colour || "#000000"; // Use default if no colour is saved

    console.log("Preferences loaded:", preferences);
}

