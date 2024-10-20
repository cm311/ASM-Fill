if (!document.getElementById("container")) {
    loadStyleSheet();
    addElements();
} else {
    var container = document.getElementById("container");

    container.innerHTML = "";
    container.remove();
}

function addElements() {
    var xhr = new XMLHttpRequest();
    
    // Load the external HTML file (elements.html)
    xhr.open('GET', chrome.runtime.getURL('elements.html'), true);

    // Define what happens when the request is successful
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Create a temporary div element to hold the loaded HTML
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = xhr.responseText;

            // Insert the loaded HTML at the top of the body, so other content goes below
            document.body.insertBefore(tempDiv, document.body.firstChild);

            // Once the HTML is loaded, add the necessary event listeners
            addScripts();
        } else {
            console.error('Error loading HTML: ', xhr.statusText);
        }
    };

    // Define what happens in case of an error
    xhr.onerror = function () {
        console.error('Error loading HTML:', xhr.statusText);
    };

    // Send the request
    xhr.send();
}

function loadStyleSheet() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('elements_style.css');  // Load the CSS file
    document.head.appendChild(link);  // Append it to the document's <head>
}

function addScripts() {
    var descriptionButton = document.getElementById('descriptionButton');
    var actionsButton = document.getElementById('actionsButton');
    var searchButton = document.getElementById('searchButton');
    var clearButton = document.getElementById('clearButton');
    var searchContact = document.getElementById('searchContact');
    var fetchKAs = document.getElementById('fetchKAs');

    descriptionButton.addEventListener('click', function () {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value.trim();
        var nameValue = document.getElementById('nameInput').value;
        var description = ka_data[kaValue]['Description'];
        description = description.replace('{0}', nameValue).replace('{1}', storeValue);
        
        copyToClipboard(description);
        
        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service'];
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item'];
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type'];
    });

    actionsButton.addEventListener('click', function () {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value.trim();
        var nameValue = document.getElementById('nameInput').value;
        var actions = ka_data[kaValue]['Actions & Solutions'];
        actions = actions.replaceAll('{1}', storeValue);
        
        copyToClipboard(actions);

        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service'];
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item'];
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type'];
    });

    searchButton.addEventListener('click', function () {
        var searched = document.getElementById('searchInput').value;
        document.getElementById('suggestedKA').innerHTML = "   ";

        for (var key in ka_data) {
            if (ka_data[key]["Subject"].toLowerCase().includes(searched.toLowerCase())) {
                document.getElementById('suggestedKA').innerHTML += "    " + key + " " + ka_data[key]["Subject"];
            }
        }
    });

    searchContact.addEventListener('click', function () {
        var searched = document.getElementById('contactInput').value;
        console.log(searched);
        
        document.getElementById('contactInfo').innerHTML = "   ";

        for (var key in contacts) {
            if (contacts[key]["Entity:"].toLowerCase().includes(searched.toLowerCase())) {
                document.getElementById('contactInfo').innerHTML += " " + contacts[key]["Entity:"] + "  " + contacts[key]["Phone:"] +
                    "   " + contacts[key]["Email:"] + "          ";
            }
        }
    });

    clearButton.addEventListener('click', function () {
        document.getElementById('serviceLabel').innerHTML = "Service: ";
        document.getElementById('configLabel').innerHTML = "Configuration Item: ";
        document.getElementById('typeLabel').innerHTML = 'Type: ';
        document.getElementById('kaInput').value = "";
        document.getElementById('nameInput').value = "";
        document.getElementById('searchInput').value = "";
        document.getElementById('storeInput').value = "";
        document.getElementById('suggestedKA').textContent = ' ';
        document.getElementById('contactInput').value = '';
        document.getElementById('contactInfo').textContent = ' ';
    });

    fetchKAs.addEventListener('click', function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://asm-site-update-baa2f1b3e712.herokuapp.com/list/');
        xhr.responseType = 'json';
        
        xhr.onload = function () {
            if (xhr.status === 200) {
                jsonData = xhr.response;
                console.log(jsonData);
                ka_data = jsonData;
            } else {
                console.error('Error fetching JSON:', xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            console.error('Error fetching JSON:', error);
        };

        xhr.send();
    });
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

// Sample Data: Replace with your real data
contacts = {
    "1": { "Entity:": "Apex (US)", "Phone:": null, "Email:": "example@example.com", "Individual:": null },
    // ... more contact data
};

ka_data = {
    // Your KA data goes here
};
