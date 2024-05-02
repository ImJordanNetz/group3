function filterDivs() {
    // Retrieve the input text and convert it to lowercase for case-insensitive matching
    var inputText = document.getElementById('filterInput').value.toLowerCase();

    // Get all divs with class 'care-guide-item'
    var guideItems = document.querySelectorAll('.care-guide-item');

    // Assume no matches found initially
    let found = false;

    guideItems.forEach(function(div) {
        // Normalize the div's ID and check if it includes the normalized input text
        if (div.id.toLowerCase().includes(inputText.replace(/\s+/g, ''))) {
            div.style.display = 'block'; // Show the div
            found = true; // At least one match was found
        } else {
            div.style.display = 'none'; // Hide the div
        }
    });

    // Handle the case where no matching guides are found
    var noGuidesDiv = document.getElementById('none-found');
    if (found) {
        noGuidesDiv.style.display = 'none'; // Hide the 'No Guides Found' div if matches are found
    } else {
        noGuidesDiv.style.display = 'block'; // Show the 'No Guides Found' div if no matches are found
    }
}
