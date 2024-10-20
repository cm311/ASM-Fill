<<<<<<< HEAD
console.log("Hello");
=======
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: "content_updated.js"}, function() {
    // Handle completion or errors if needed
    console.log('Content script executed in the current tab');
  });
});
>>>>>>> 676d64ef0bcb3bced749b7ba10dffb844db3504c
