document.addEventListener('DOMContentLoaded', function() {
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
                textToAdd = '';
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
