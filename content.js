chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
    console.log("success");    
    
  const elements = document.querySelectorAll('.text-color-text'); // put the class name that needs to be targeted here
  elements.forEach(element => {
    console.log("it is working");
    element.innerText += request.text;
  });
});
