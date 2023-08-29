chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
    console.log("success");
    console.log(request.text);
    
  const elements = document.querySelectorAll('.e-content'); // put the class name that needs to be targeted here

    console.log(elements.length);
  elements.forEach(element => {
    console.log("it is working");
    element.innerHTML = "<p>" + request.text + "</p>";
  });
});
