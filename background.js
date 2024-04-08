chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: "content_updated.js"}, function() {
    // Handle completion or errors if needed
    console.log('Content script executed in the current tab');
  });
});
