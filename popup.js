document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    document.getElementById('addTextButton').addEventListener('click', function() {
        const storeValue = document.getElementById('storeInput').value;
        const kaValue = document.getElementById('kaInput').value;
        const nameValue = document.getElementById('nameInput').value;
        let textToAdd;

        // Using a nested switch or if conditions to decide based on the combination.
        // This needs to be cleaned up and have a separate function based on the KA number entered.
        switch(storeValue) {
            case '8000':
                switch(kaValue) {
                    case 'KA1':
                        textToAdd = 'hello';
                        break;
                    case 'KA2':
                        textToAdd = 'world';
                        break;
                    default:
                        textToAdd = 'error';
                        break;
                }
                break;
            case '9000':
                switch(kaValue) {
                    case 'KA1':
                        textToAdd = 'battt';
                        break;
                    case 'KA2':
                        textToAdd = 'man';
                        break;
                    default:
                        textToAdd = 'error';
                        break;
                }
                break;
            default:
                textToAdd = 'Error';
                break;
        }

        if (textToAdd) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {text: textToAdd});
            });
        } else {
            // Handle or inform the user about invalid input, if necessary.
        }
    });
});
=======
    document.getElementById('descriptionButton').addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value;
        var nameValue = document.getElementById('nameInput').value;
        var description = ka_data[kaValue]['Description'].join('\n');
        description = description.replace('{0}', nameValue).replace('{1}', storeValue);
        
        copyToClipboard(description)
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('actionsButton').addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value;
        var nameValue = document.getElementById('nameInput').value;
        var actions = ka_data[kaValue]['Actions & Solutions'].join('\n');
        actions = actions.replace('{1}', storeValue);
        
        copyToClipboard(actions)
    });
});


function copyToClipboard(text) {
    var dummy = document.createElement("textarea");

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
>>>>>>> 676d64ef0bcb3bced749b7ba10dffb844db3504c
