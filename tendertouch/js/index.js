function filterDivs() {
    var inputText = document.getElementById('filterInput').value.toLowerCase();

    var guideItems = document.querySelectorAll('.care-guide-item');

    let found = false;

    guideItems.forEach(function(div) {
        if (div.id.toLowerCase().includes(inputText.replace(/\s+/g, ''))) { //removes space: https://flaviocopes.com/how-to-replace-whitespace-javascript/
            div.style.display = 'block'; 
            found = true; 
        } else {
            div.style.display = 'none'; 
        }
    });


    var noGuidesDiv = document.getElementById('none-found');
    if (found) {
        noGuidesDiv.style.display = 'none'; 
    } else {
        noGuidesDiv.style.display = 'block'; 
    }
}

