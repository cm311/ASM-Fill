let ka_num = prompt("enter the KA number");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentTab = tabs[0]; 
    console.log(currentTab.id); // Logs the ID of the currently active tab in the current window

    // You can now use currentTab.id for any operations, e.g., executeScript
});


chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setContent
    });

function setContent() {

}