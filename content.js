
addElements();
addScripts();



function addElements() {
    // Configuration Label
    var configLabel = document.createElement('p');
    configLabel.textContent = "Configuration Item: ";
    configLabel.id = "configLabel";
    configLabel.style.marginBottom = '8px'; // Adjust bottom margin
    configLabel.style.flex = '1'; // Set flex property
    document.body.insertBefore(configLabel, document.body.firstChild);

    // Service Label
    var serviceLabel = document.createElement('p');
    serviceLabel.textContent = "Service: ";
    serviceLabel.id = "serviceLabel";
    serviceLabel.style.marginBottom = '8px'; // Adjust bottom margin
    serviceLabel.style.flex = '1'; // Set flex property
    document.body.insertBefore(serviceLabel, document.body.firstChild);

    // Actions Button
    var actionsButton = document.createElement('button');
    actionsButton.textContent = "Actions";
    actionsButton.id = "actionsButton";
    actionsButton.style.borderRadius = '5px'; // Set corner radius
    actionsButton.style.marginRight = '8px'; // Adjust right margin
    actionsButton.style.padding = '5px 10px'; // Adjust padding
    actionsButton.style.display = 'block'; // Place on a new line
    document.body.insertBefore(actionsButton, document.body.firstChild);

    // Description Button
    var descriptionButton = document.createElement('button');
    descriptionButton.textContent = "Description";
    descriptionButton.id = "descriptionButton";
    descriptionButton.style.borderRadius = '5px'; // Set corner radius
    descriptionButton.style.marginRight = '8px'; // Adjust right margin
    descriptionButton.style.padding = '5px 10px'; // Adjust padding
    descriptionButton.style.display = 'block'; // Place on a new line
    document.body.insertBefore(descriptionButton, document.body.firstChild);

    // KA Input
    var kaInput = document.createElement('input');
    kaInput.placeholder = 'Input KA number';
    kaInput.id = "kaInput";
    kaInput.style.marginBottom = '8px'; // Adjust bottom margin
    kaInput.style.padding = '5px'; // Adjust padding
    kaInput.style.display = 'block'; // Place on a new line
    document.body.insertBefore(kaInput, document.body.firstChild);

    // Name Input
    var nameInput = document.createElement('input');
    nameInput.placeholder = 'Input Name';
    nameInput.id = "nameInput";
    nameInput.style.marginBottom = '8px'; // Adjust bottom margin
    nameInput.style.padding = '5px'; // Adjust padding
    nameInput.style.display = 'block'; // Place on a new line
    document.body.insertBefore(nameInput, document.body.firstChild);

    // Store Input
    var storeInput = document.createElement('input');
    storeInput.placeholder = 'Input Store number';
    storeInput.id = "storeInput";
    storeInput.style.marginBottom = '8px'; // Adjust bottom margin
    storeInput.style.padding = '5px'; // Adjust padding
    storeInput.style.display = 'block'; // Place on a new line
    document.body.insertBefore(storeInput, document.body.firstChild);

    // Container for configLabel and serviceLabel
    var labelsContainer = document.createElement('div');
    labelsContainer.style.display = 'flex'; // Use flexbox
    labelsContainer.style.justifyContent = 'flex-end'; // Align to the right
    document.body.insertBefore(labelsContainer, document.body.firstChild);
    labelsContainer.appendChild(configLabel);
    labelsContainer.appendChild(serviceLabel);
}



function addScripts() {
    descriptionButton.addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value;
        var nameValue = document.getElementById('nameInput').value;
        var description = ka_data[kaValue]['Description'].join('\n');
        description = description.replace('{0}', nameValue).replace('{1}', storeValue);
        
        copyToClipboard(description)

        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service']
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item']
    }); 

   actionsButton.addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value;
        var nameValue = document.getElementById('nameInput').value;
        var actions = ka_data[kaValue]['Actions & Solutions'].join('\n');
        actions = actions.replace('{1}', storeValue);
        
        copyToClipboard(actions)

        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service']
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item']
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






















ka_data = {
    
    '8287' : 
        {
            "Subject" : "Sailpoint Password Reset",
            "Service" : "Identity and Messaging Services",
            "Configuration Item": "Sailpoint (APL)",
            "Type" : "Service Request/Account Maintenance/NT Password Reset/Unlock",
        
            "Description" : [
                "Sailpoint Password Reset",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-2",
                "-",
                "User needs a password reset",
                "Resetting through Sailpoint"
            ],
            
            "Actions & Solutions" : [
                "looked up the user on SDHQ > saw they needed a password reset",
                "went to sailpoint > Admin Options > Caller Verification > sent user verification Code",
                "had user read off the validation Code > success",
                "manage access > manage passwords > searched for the user account > manage",
                "change > set up temporary password",
                "remoted into wpaf{1}-2 > opened edge > went to sailpoint > signed in with temporary credentials",
                "user set up new password successfully",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },
    
    '9667' : 
        {
            "Subject" : "US Ingenico Troubleshooting",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Elevate (APL)",
            "Type" : "Service Request/Hardware",
        
            "Description" : [
                "US Ingenico Troubleshooting",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-2",
                "-",
                "Credit card readers not working",
                "Locked up"
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-2 > closed elevate" > "deleted 'C:\PPG\Elevate Kiosk Profile' >",
                "on my pc went to meraki > looked up the switch > found the credit card reader ports (VLAN 44)",
                "cycled both ports on the switch > launched elevate > had user run through a transaction",
                "success",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '9085' : 
        {
            "Subject" : "User can't get into Elevate",
            "Service" : "Business Application",
            "Configuration Item": "Elevate (APL)",
            "Type" : "Incident/Business Application/North America",
        
            "Description" : [
                "User can't get into Elevate",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-2",
                "-",
                "User can't get into Elevate",
                "Needs assistance logging in"
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-2 > had user open elevate",
                "clicked transaction journal > log in with username/password > user entered networkID@ppg.com",
                "user logged in with password > clicked eyeball to see pin",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '8760' : 
        {
            "Subject" : "MFA setup for user",
            "Service" : "Endpoint Services",
            "Configuration Item": "Intune",
            "Type" : "Service Request/M365/Teams",
        
            "Description" : [
                "MFA setup for user",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User trying to get into a resource",
                "we need more information from you"
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > right click on edge > run as other user > had user enter credentials",
                "navigated to https://mysignins.microsoft.com/security-info  >",
                "user prompted for credentials again > can't access this page",
                "start menu > silouhette looking icon > log out ",
                "log in as 'other user' > had user enter their networkID > waited for login",
                "launched Edge >  https://mysignins.microsoft.com/security-info >",
                "user set up authentication over phone > user entered in security code > success",
                "logged out of profile on windows > logged into store account > user was able to access resource",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '9741' : 
        {
            "Subject" : "User can't open the store in Elevate",
            "Service" : "Endpoint Services",
            "Configuration Item": "Intune",
            "Type" : "Service Request/M365/Teams",
        
            "Description" : [
                "MFA setup for user",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User trying to get into a resource",
                "we need more information from you"
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > right click on edge > run as other user > had user enter credentials",
                "navigated to https://mysignins.microsoft.com/security-info  >",
                "user prompted for credentials again > can't access this page",
                "start menu > silouhette looking icon > log out ",
                "log in as 'other user' > had user enter their networkID > waited for login",
                "launched Edge >  https://mysignins.microsoft.com/security-info >",
                "user set up authentication over phone > user entered in security code > success",
                "logged out of profile on windows > logged into store account > user was able to access resource",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        }
    }