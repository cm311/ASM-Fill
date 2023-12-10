console.log('hello');

addElements();
addScripts();


function addElements() {
    var storeInput = document.createElement('input')
    var nameInput = document.createElement('input')
    var kaInput = document.createElement('input')
    var descriptionButton = document.createElement('button')
    var actionsButton = document.createElement('button')

}

function addScripts() {
    document.getElementById('descriptionButton').addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value;
        var nameValue = document.getElementById('nameInput').value;
        var description = ka_data[kaValue]['Description'].join('\n');
        description = description.replace('{0}', nameValue).replace('{1}', storeValue);
        
        copyToClipboard(description)
    });

    document.getElementById('actionsButton').addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value;
        var nameValue = document.getElementById('nameInput').value;
        var actions = ka_data[kaValue]['Actions & Solutions'].join('\n');
        actions = actions.replace('{1}', storeValue);
        
        copyToClipboard(actions)
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
