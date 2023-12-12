
addElements();
addScripts();

//#0071AA - Elevate color
//#F9FCFC - Elevate font color
//Roboto - Elevate font


function addElements() {
    // Configuration Label
    var configLabel = document.createElement('p');
    configLabel.textContent = "Configuration Item: ";
    configLabel.id = "configLabel";
    configLabel.style.marginBottom = '8px'; // Adjust bottom margin
    configLabel.style.flex = '1'; // Set flex property

    // Service Label
    var serviceLabel = document.createElement('p');
    serviceLabel.textContent = "Service: ";
    serviceLabel.id = "serviceLabel";
    serviceLabel.style.marginBottom = '8px'; // Adjust bottom margin
    serviceLabel.style.flex = '1'; // Set flex property

    //Type label
    var typeLabel = document.createElement('p');
    typeLabel.textContent = "Type: ";
    typeLabel.id = "typeLabel";
    typeLabel.style.marginBottom = '8px'; // Adjust bottom margin
    typeLabel.style.flex = '1'; // Set flex property

    // Actions Button
    var actionsButton = document.createElement('button');
    actionsButton.textContent = "Actions";
    actionsButton.id = "actionsButton";
    actionsButton.style.borderRadius = '5px'; // Set corner radius
    actionsButton.style.marginRight = '8px'; // Adjust right margin
    actionsButton.style.padding = '5px 10px'; // Adjust padding
    actionsButton.style.height = '30px';
    actionsButton.style.display = 'block'; // Place on a new line
    actionsButton.style.color = '#F9FCFC'
    actionsButton.style.backgroundColor = '#0071AA'
    actionsButton.style.border = 'none'

    // Description Button
    var descriptionButton = document.createElement('button');
    descriptionButton.textContent = "Description";
    descriptionButton.id = "descriptionButton";
    descriptionButton.style.borderRadius = '5px'; // Set corner radius
    descriptionButton.style.marginRight = '8px'; // Adjust right margin
    descriptionButton.style.padding = '5px 10px'; // Adjust padding
    descriptionButton.style.height = '30px';
    descriptionButton.style.display = 'block'; // Place on a new line
    descriptionButton.style.color = '#F9FCFC'
    descriptionButton.style.backgroundColor = '#0071AA'
    descriptionButton.style.border = 'none'

    // KA Input
    var kaInput = document.createElement('input');
    kaInput.placeholder = 'Input KA number';
    kaInput.id = "kaInput";
    kaInput.style.marginBottom = '8px'; // Adjust bottom margin
    kaInput.style.padding = '5px'; // Adjust padding
    kaInput.style.display = 'block'; // Place on a new line

    // Name Input
    var nameInput = document.createElement('input');
    nameInput.placeholder = 'Input Name';
    nameInput.id = "nameInput";
    nameInput.style.marginBottom = '8px'; // Adjust bottom margin
    nameInput.style.padding = '5px'; // Adjust padding
    nameInput.style.display = 'block'; // Place on a new line

    // Store Input
    var storeInput = document.createElement('input');
    storeInput.placeholder = 'Input Store number';
    storeInput.id = "storeInput";
    storeInput.style.marginBottom = '8px'; // Adjust bottom margin
    storeInput.style.padding = '5px'; // Adjust padding
    storeInput.style.display = 'block'; // Place on a new line


    var suggestedKA = document.createElement('p');
    suggestedKA.id = 'suggestedKA'
    suggestedKA.textContent = 'Empty'
    suggestedKA.style.flex = '1';

    var searchInput = document.createElement('input');
    searchInput.placeholder = 'Search word in title';
    searchInput.id = "searchInput";
    searchInput.style.flex = '1';

    var searchButton = document.createElement('button');
    searchButton.placeholder = 'Search word in title';
    searchButton.id = "searchButton";
    searchButton.textContent = "Search"
    searchButton.style.borderRadius = '5px'; // Set corner radius
    searchButton.style.marginRight = '8px'; // Adjust right margin
    searchButton.style.color = '#F9FCFC'
    searchButton.style.backgroundColor = '#0071AA'
    searchButton.style.border = 'none'
    searchButton.style.flex = '1';

    var clearButton = document.createElement('button');
    clearButton.id = "clearButton"
    clearButton.textContent = "Clear"
    clearButton.style.borderRadius = '5px'; // Set corner radius
    clearButton.style.marginRight = '8px'; // Adjust right margin
    clearButton.style.color = '#F9FCFC'
    clearButton.style.backgroundColor = '#0071AA'
    clearButton.style.border = 'none'

    
    

    // Empty Container (Right Div)
    var rightContainer = document.createElement('div');
    //rightContainer.style.flex = '1'; // Take up remaining space
    rightContainer.style.height = "10%"
    rightContainer.appendChild(searchButton);
    rightContainer.appendChild(clearButton);
    rightContainer.appendChild(suggestedKA);
    rightContainer.appendChild(searchInput);
    rightContainer.style.fontFamily = "Roboto, sans-serif"
    rightContainer.style.background = "linear-gradient(to bottom right, #59cefc 70%, #EC058E)"
    document.body.insertBefore(rightContainer, document.body.firstChild);

    // Container for configLabel and serviceLabel (Left Div)
    var leftContainer = document.createElement('div');
    leftContainer.style.display = 'flex'; // Use flexbox
    leftContainer.style.justifyContent = 'flex-end'; // Align to the right
    leftContainer.appendChild(serviceLabel);
    leftContainer.appendChild(configLabel);
    leftContainer.appendChild(typeLabel);
    leftContainer.appendChild(descriptionButton);
    leftContainer.appendChild(actionsButton);
    leftContainer.appendChild(kaInput);
    leftContainer.appendChild(nameInput);
    leftContainer.appendChild(storeInput);
    leftContainer.style.fontFamily = "Roboto, sans-serif"
    leftContainer.style.background = "#59CEFC"
    document.body.insertBefore(leftContainer, document.body.firstChild);
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
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type']
    }); 

   actionsButton.addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value;
        var nameValue = document.getElementById('nameInput').value;
        var actions = ka_data[kaValue]['Actions & Solutions'].join('\n');
        actions = actions.replaceAll('{1}', storeValue);
        
        copyToClipboard(actions)

        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service']
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item']
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type']
    });

    searchButton.addEventListener('click', function() {
        var searched = document.getElementById('searchInput').value;
        //var actions = ka_data[kaValue]['Actions & Solutions'].join('\n');
        //actions = actions.replace('{1}', storeValue);
        
        //copyToClipboard(actions)
        document.getElementById('suggestedKA').innerHTML = " "

        for (var key in ka_data) {
            if (ka_data[key]["Subject"].toLowerCase().includes(searched.toLowerCase())) {
                document.getElementById('suggestedKA').innerHTML += "  " + key + " " + ka_data[key]["Subject"]
            }
        }
    });

    clearButton.addEventListener('click', function() {
        document.getElementById('serviceLabel').innerHTML = "Service: "
        document.getElementById('configLabel').innerHTML = "Configuration Item: "
        document.getElementById('typeLabel').innerHTML = 'Type: '
        document.getElementById('kaInput').value = "";
        document.getElementById('nameInput').value = "";
        document.getElementById('storeInput').value = "";

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
                "remoted into wpaf{1}-2 > closed elevate" > "deleted 'C:\\PPG\\Elevate Kiosk Profile' >",
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
            "Subject" : "User can't open the store in Elevate, cash drawer",
            "Service" : "Business Application",
            "Configuration Item": "Elevate (APL)",
            "Type" : "Incident/Business Applications/North America",
        
            "Description" : [
                "User can't open the store in Elevate, cash drawer",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-2",
                "-",
                "Cash drawer says the cash drawer is not closed when it is",
                "Cash drawer not detected"
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf9303-2 > saw the issue > closed elevate >  restarted pc",
                "had user disconnect the cash drawer for 30 seconds > plug back in > launched elevate > user was able to open the store",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '9822' : 
        {
            "Subject" : "User needs Moneris Receipt",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Elevate",
            "Type" : "Service Request/Hardware/Other",
        
            "Description" : [
                "User needs moneris receipt",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "Transaction went through in Moneris, froze in Elevate",
                "User wants to put through auth codes on X1"
            ],
            
            "Actions & Solutions" : [
                "from my pc went to the monerisGo portal > looked up the store > looked up the transaction by the amount and date >",
                "clicked send > sent the receipt to store email > ",
                "informed user they could close the transaction on the X1 with authorization codes > user understood",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '7784' : 
        {
            "Subject" : "People pulse password reset",
            "Service" : "Business Application",
            "Configuration Item": "PeoplePulse (APL)",
            "Type" : "Incident/Business Applications/North America",
        
            "Description" : [
                "People pulse password reset",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User is trying to get into Workday",
                "Needs a people pulse password reset"
            ],
            
            "Actions & Solutions" : [
                "from my pc went to hrportal > looked up the user by 6 digit ppg ID > verified ID > clicked reset password >",
                "remoted into wpaf8523-x1 > pasted reset password link in browser > user rest password > was able to log into people pulse",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '6889' : 
        {
            "Subject" : "Store Hard Down Meraki",
            "Service" : "Network Services",
            "Configuration Item": "Meraki Router",
            "Type" : "Incident/Hardware/Network/Router",
        
            "Description" : [
                "Store Hard Down Meraki",
                "-",
                "Name: {0}",
                "Device: {1}-all",
                "-",
                "All store devices are down",
                "No network connection to anything"
            ],
            
            "Actions & Solutions" : [
                "from my pc ran a ping in men and mice > all red",
                "Went to the store's router in Meraki > all offline > had user locate network equipment >",
                "disconnected switch from router, and router from modem > power cycled all three > ",
                "after about 2-3 minutes, reconnected router to the switch > waited one minute > reconnected modem to router  ",
                "Store came online in meraki > user was able to user elevate",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '7758' : 
        {
            "Subject" : "Datacolor setup for Dealer",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Spectrophotometer (APL)",
            "Type" : "Incident/Business Applications/North America/AC USCA Next Gen",
        
            "Description" : [
                "Datacolor setup for Dealer",
                "-",
                "Name: {0}",
                "Device: {1}-all",
                "-",
                "User has a datacolor that needs setup",
                "It is currently not working"
            ],
            
            "Actions & Solutions" : [
                "bomgared into the Dealer PC > closed formula pro > ",
                "C:\\PPG\\Spectro Instrument Drivers 4.3.3.6\\Disk1 > installed spectro drivers > comet flash file did not self register > ",
                "C:\\PPG\\DatacolorFix > ran fix file twice > installed spectrum drivers ",
                "opened configure instrument > did not find the datacolor on the comports > restarted PC >",
                "configure insturment > found the datacolor on com port 4 > installed the datacolor > ran a calibration with user > passed ",
                "opened formula pro > color match > ready to measure > successful Color match",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '5372' : 
        {
            "Subject" : "SRV/server replacement for canada Store",
            "Service" : "Hardware Support Services",
            "Configuration Item": "POS SRV Builds",
            "Type" : "Service Request/PC Builds",
        
            "Description" : [
                "SRV replacement for canada Store",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-srv",
                "-",
                "user's server is offline",
                "cannot log into it",
                "Service Tag: "
                
            ],
            
            "Actions & Solutions" : [
                "ran a ping in men and mice > saw that the srv was red, offline",
                "had user locate the SRV computer in the store > had user power it on > still not coming online",
                "had user plug in monitor to the SRV > 'no boot device found' > had user restart the PC ",
                "held F2 while rebooting to get into the BIOS > settings > general > boot sequence > ",
                "Unchecked all except the 'toshiba' in the boot sequence > apply > save > exit > restart",
                "same issue, 'no boot device found' > gathered service tag > had user unplug the SRV ",
                "Ran 'H:\\Common\\Powershell\\10x Server Replacement'  script from my pc >  ran poslog.psl from XCENTER DB",
                "SELECT * FROM trn_poslog_data (nolock) where rtl_loc_id = '{1}' and business_date = '2018-04-09 00:00:00.000' ",
                "Emailed out the finance team",
                "",
                "Escalating to Site IT",
                "",
                "Hello team,",
                "Store {1}'s server went and needs to be replaced.  Are you able to send a new one?"
            ]
        },

    '7109' : 
        {
            "Subject" : "Fluid Management Tinter support",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Auto-Tinter - Fluid Management (APL)",
            "Type" : "Incident/Business Applications/North America/AC USCA Next Gen",
        
            "Description" : [
                "Fluid Management Tinter support",
                "-",
                "Name: {0}",
                "Device: {1}",
                "-",
                "Tinter not tinting or purging",
                "Acutinter",
                "Serial Number: "
                
            ],
            
            "Actions & Solutions" : [
                "bomgared into dealer PC > closed formula pro > had user disconnect tinter from PC >",
                "power down tinter > restart PC > reconnect tinter to PC > power back on Tinter",
                "opened service.exe > pulse test passed > opened formula pro > purge > success",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '7252' : 
        {
            "Subject" : "HP 400 Series Printer",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Printer",
            "Type" : "Incident/Hardware/Printer/HP",
        
            "Description" : [
                "HP 400 Series Printer",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-2",
                "-",
                "User has an HP 400 series",
                "Needs it set up",
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-2 > transfered LJ-M401-full-solution-15190.exe from my PC to \\wpaf{1}-2\\c$\\PPG > ",
                "made sure the printer was connected to the network > found the printer at IP_ADDRESS > ",
                "Ran the LJ-M401 software I transfered > set up the printer at IP_ADDRESS > success",
                "control panel > view devices and printers > right clicked the HP > rename to PRINTER2 > set as default",
                "opened SED from C:\\PPG\\Store Equipment Driver\\Utility > set large printer to PRINTER2 > success",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '9760' : 
        {
            "Subject" : "Elevate Internal Server error",
            "Service" : "Business Application",
            "Configuration Item": "Elevate",
            "Type" : "Incident",
        
            "Description" : [
                "Elevate Internal Server error",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-2",
                "-",
                "User is trying to perform an action in Elevate",
                "They get an internal server error",
                "TraceID - "
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-2 > saw the issue > gathered TraceID ",
                "Closed elevate > deleted C:\\PPG\\Elevate Kiosk Profile > deleted contents of C:\\PPGLogs ",
                "restarted P > opened Elevate > had user try the action again > issue persists",
                "messaged out systems team > they took a look at it > closed elevate, tried action again > success",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '8928' : 
        {
            "Subject" : "EPro prompted for credentials",
            "Service" : "Business Application",
            "Configuration Item": "ePro (APL)",
            "Type" : "Service Request",
        
            "Description" : [
                "EPro prompted for credentials",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User is trying to log into ePro from managerSSO",
                "They are prompted for credentials"
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > saw the issue > three dots in edge > cache > cleared cache all time ",
                "went back to managerSSO start screen > ePro > user was able to log into ePro without credentials",
                "offered ePro contact to user if continues Phone: 844-217-0017 Email: customersupport@bravosolution.com",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        }
    
    }
