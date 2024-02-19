if (!document.getElementById("botContainer")) {
    var botContainer = document.createElement('div');
    botContainer.id = "botContainer"
    var midContainer = document.createElement('div');
    midContainer.id = "midContainer"
    var topContainer = document.createElement('div');
    topContainer.id = "topContainer"
    var divs = [botContainer, midContainer, topContainer]
    addElements();
    addScripts();
}
else {
    var botContainer = document.getElementById("botContainer");
    var midContainer = document.getElementById("midContainer");
    var topContainer = document.getElementById("topContainer");
    
    botContainer.innerHTML = "";
    botContainer.remove();
    midContainer.innerHTML = "";
    midContainer.remove();
    topContainer.innerHTML = "";
    topContainer.remove();
}

function addElements() {
    createTopElements();
    createMidElements();
    createBotElements();
    
    for(var i = 0; i < divs.length; i++) {
        divs[i].style.display = "flex";
        divs[i].style.fontFamily = "Roboto, sans-serif"
        //divs[i].style.background = "linear-gradient(to bottom right, #59cefc 75%, #EC058E)";
        divs[i].style.background = "#59CEFC"
        console.log(divs[i])
        document.body.insertBefore(divs[i], document.body.firstChild);
    }
}

function createTopElements() {
    var configLabel = document.createElement('p');
    configLabel.textContent = "Configuration Item: ";
    configLabel.id = "configLabel";
    //configLabel.style.marginBottom = '8px'; // Adjust bottom margin
    configLabel.style.flex = '1'; // Set flex property

    // Service Label
    var serviceLabel = document.createElement('p');
    serviceLabel.textContent = "Service: ";
    serviceLabel.id = "serviceLabel";
    //serviceLabel.style.marginBottom = '8px'; // Adjust bottom margin
    serviceLabel.style.flex = '1'; // Set flex property

    //Type label
    var typeLabel = document.createElement('p');
    typeLabel.textContent = "Type: ";
    typeLabel.id = "typeLabel";
    //typeLabel.style.marginBottom = '8px'; // Adjust bottom margin
    typeLabel.style.flex = '1'; // Set flex property

    // Actions Button
    var actionsButton = document.createElement('button');
    actionsButton.textContent = "Actions";
    actionsButton.id = "actionsButton";
    actionsButton.style.borderRadius = '5px'; // Set corner radius
    actionsButton.style.marginRight = '8px'; // Adjust right margin
    actionsButton.style.height = '90%';
    actionsButton.style.color = '#F9FCFC'
    actionsButton.style.backgroundColor = '#0071AA'
    actionsButton.style.border = 'none'

    // Description Button
    var descriptionButton = document.createElement('button');
    descriptionButton.textContent = "Description";
    descriptionButton.id = "descriptionButton";
    descriptionButton.style.borderRadius = '5px'; // Set corner radius
    descriptionButton.style.marginRight = '8px'; // Adjust right margin
    descriptionButton.style.height = '90%';
    descriptionButton.style.color = '#F9FCFC'
    descriptionButton.style.backgroundColor = '#0071AA'
    descriptionButton.style.border = 'none'

    // KA Input
    var kaInput = document.createElement('input');
    kaInput.placeholder = 'Input KA number';
    kaInput.id = "kaInput";
    kaInput.style.marginBottom = '8px'; // Adjust bottom margin
    kaInput.style.padding = '5px'; // Adjust padding

    // Name Input
    var nameInput = document.createElement('input');
    nameInput.placeholder = 'Input Name';
    nameInput.id = "nameInput";
    nameInput.style.marginBottom = '8px'; // Adjust bottom margin
    nameInput.style.padding = '5px'; // Adjust padding

    // Store Input
    var storeInput = document.createElement('input');
    storeInput.placeholder = 'Input Store number';
    storeInput.id = "storeInput";
    storeInput.style.marginBottom = '8px'; // Adjust bottom margin
    storeInput.style.padding = '5px'; // Adjust padding

    topContainer.appendChild(configLabel);
    topContainer.appendChild(serviceLabel);
    topContainer.appendChild(typeLabel);
    topContainer.appendChild(descriptionButton);
    topContainer.appendChild(actionsButton);
    topContainer.appendChild(kaInput);
    topContainer.appendChild(nameInput);
    topContainer.appendChild(storeInput);
    
}

function createMidElements() {
    var searchButton = document.createElement('button');
    searchButton.placeholder = 'Search word in title';
    searchButton.id = "searchButton";
    searchButton.textContent = "Search"
    searchButton.style.borderRadius = '5px'; // Set corner radius
    searchButton.style.marginRight = '8px'; // Adjust right margin
    searchButton.style.marginBottom = '5px';
    searchButton.style.color = '#F9FCFC'
    searchButton.style.backgroundColor = '#0071AA'
    searchButton.style.border = 'none'
    searchButton.style.height = '100%'
    //searchButton.style.flex = '1';

    var clearButton = document.createElement('button');
    clearButton.id = "clearButton"
    clearButton.textContent = "Clear"
    clearButton.style.borderRadius = '5px'; // Set corner radius
    clearButton.style.marginRight = '8px'; // Adjust right margin
    clearButton.style.color = '#F9FCFC'
    clearButton.style.backgroundColor = '#0071AA'
    clearButton.style.border = 'none'
    clearButton.style.height = '90%'

    var searchInput = document.createElement('input');
    searchInput.placeholder = 'Search word in title';
    searchInput.id = "searchInput";
    searchInput.style.height = '90%'

    var suggestedKA = document.createElement('p');
    suggestedKA.id = 'suggestedKA'
    suggestedKA.textContent = ' '
    suggestedKA.style.marginLeft = '2%'
    suggestedKA.style.height = '90%'
    suggestedKA.style.width = '66%'

    
    midContainer.appendChild(searchButton);
    midContainer.appendChild(clearButton);
    midContainer.appendChild(searchInput);
    midContainer.appendChild(suggestedKA);
}

function createBotElements() {
    var searchContact = document.createElement('button');
    searchContact.placeholder = 'Search Contact Info';
    searchContact.id = "searchContact";
    searchContact.textContent = "Search"
    searchContact.style.borderRadius = '5px'; // Set corner radius
    searchContact.style.marginRight = '8px'; // Adjust right margin
    searchContact.style.color = '#F9FCFC'
    searchContact.style.backgroundColor = '#0071AA'
    searchContact.style.border = 'none'
    searchContact.style.height = '80%'

    var contactInput = document.createElement('input');
    contactInput.placeholder = 'Search Contact Info';
    contactInput.id = "contactInput";
    contactInput.style.height = '80%';

    var contactInfo = document.createElement('p');
    contactInfo.id = 'contactInfo'
    contactInfo.textContent = ' '
    contactInfo.style.marginLeft = '2%'
    contactInfo.style.flex = '1'

    botContainer.appendChild(searchContact);
    botContainer.appendChild(contactInput);
    botContainer.appendChild(contactInfo);
}

function addScripts() {
    descriptionButton.addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value.trim();
        var nameValue = document.getElementById('nameInput').value;
        var description = ka_data[kaValue]['Description'].join('\n');
        description = description.replace('{0}', nameValue).replace('{1}', storeValue);
        
        copyToClipboard(description);
        
        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service']
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item']
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type']

    }); 

   actionsButton.addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value.trim();
        var nameValue = document.getElementById('nameInput').value;
        var actions = ka_data[kaValue]['Actions & Solutions'].join('\n');
        actions = actions.replaceAll('{1}', storeValue);
        
        copyToClipboard(actions);

        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service']
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item']
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type']

        
        router_data[storeValue]
    });


    
    searchButton.addEventListener('click', function() {
        var searched = document.getElementById('searchInput').value;
        //var actions = ka_data[kaValue]['Actions & Solutions'].join('\n');
        //actions = actions.replace('{1}', storeValue);
        
        document.getElementById('suggestedKA').innerHTML = "   "

        for (var key in ka_data) {
            if (ka_data[key]["Subject"].toLowerCase().includes(searched.toLowerCase())) {
                document.getElementById('suggestedKA').innerHTML += "    " + key + " " + ka_data[key]["Subject"]
            }
        }
    });

    searchContact.addEventListener('click', function() {
        var searched = document.getElementById('contactInput').value;
        console.log(searched)
        
        document.getElementById('contactInfo').innerHTML = "   "

        for (var key in contacts) {
            console.log(contacts[key])
            if (contacts[key]["Entity:"].toLowerCase().includes(searched.toLowerCase())) {
                document.getElementById('contactInfo').innerHTML += " " + contacts[key]["Entity:"] + "  " + contacts[key]["Phone:"] +
                    "   " + contacts[key]["Email:"] + "          "
            }
        }
    });



    clearButton.addEventListener('click', function() {
        document.getElementById('serviceLabel').innerHTML = "Service: "
        document.getElementById('configLabel').innerHTML = "Configuration Item: "
        document.getElementById('typeLabel').innerHTML = 'Type: '
        document.getElementById('kaInput').value = "";
        document.getElementById('nameInput').value = "";
        document.getElementById('searchInput').value = "";
        document.getElementById('storeInput').value = "";
        document.getElementById('suggestedKA').textContent = ' ';
        document.getElementById('contactInput').value = '';
        document.getElementById('contactInfo').textContent = ' ';

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

contacts = {"1": {"Entity:": "Apex (US) & Apex (CA)", "Phone:": null, "Email:": "afstorespricing@ppg.com\u00a0\u00a0 \u00a0CanadaStorespricing@ppg.com", "Individual:": null}, "2": {"Entity:": "Bell Alliance", "Phone:": "888-214-7896", "Email:": null, "Individual:": null}, "3": {"Entity:": "Bell Canada", "Phone:": "877-877-2426", "Email:": "888-788-2355  or 866-462-3551", "Individual:": null}, "4": {"Entity:": "Cash Desk (US)", "Phone:": null, "Email:": "PPGACCashDesk@ppg.com", "Individual:": null}, "5": {"Entity:": "Cash Desk (CA)", "Phone:": null, "Email:": "CanadaBankingSupport@ppg.com", "Individual:": null}, "6": {"Entity:": "CEI Driver Services", "Phone:": "866.894.0383", "Email:": "driverservices.PPG@ceinetwork.com", "Individual:": null}, "7": {"Entity:": "Color Lab", "Phone:": "412-517-3738", "Email:": "accolorlab@ppg.com", "Individual:": null}, "8": {"Entity:": "Corob Service", "Phone:": "800-728-8408", "Email:": "ext. 225  -- Previously Listed as 255", "Individual:": "Tech: Mike"}, "9": {"Entity:": "Credit (US)", "Phone:": "800-852-7860", "Email:": "afcredit@ppg.com", "Individual:": null}, "10": {"Entity:": "Credit (CA)", "Phone:": null, "Email:": "*Credit CA PAF Stores", "Individual:": null}, "11": {"Entity:": "Credit (Quebec CA)", "Phone:": "800-321-6564", "Email:": "Quebec Region Only\u00a0", "Individual:": null}, "12": {"Entity:": "Credit (PMC)", "Phone:": "855-762-2847", "Email:": null, "Individual:": null}, "13": {"Entity:": "Customer Service (US)", "Phone:": "877-774-3131", "Email:": "StoreOrders@ppg.com   AskStoreCS@ppg.com", "Individual:": null}, "14": {"Entity:": "Customer Service (CA)", "Phone:": "800-387-2253", "Email:": null, "Individual:": null}, "15": {"Entity:": "Customer Service (Dealer Order)", "Phone:": "888-774-1010", "Email:": null, "Individual:": null}, "16": {"Entity:": "Customer Service Dealer Formula Pro Help Desk", "Phone:": "844-916-0606", "Email:": null, "Individual:": null}, "17": {"Entity:": "Central Purchasing - SSO (special sundries)", "Phone:": "844-594-3233", "Email:": "SSO@ppg.com", "Individual:": null}, "18": {"Entity:": "Dealer RITSD Toll Free", "Phone:": "833-562-8030", "Email:": "RITSD-USCA@ppg.com", "Individual:": null}, "19": {"Entity:": "DSR", "Phone:": "877-563-6709", "Email:": "*HARD DOWN CASES after 10 min on hold 918-336-6900", "Individual:": "ppgpaintsupport@dsrglobal.com"}, "20": {"Entity:": "DataColor", "Phone:": "800-982-6496", "Email:": null, "Individual:": null}, "21": {"Entity:": "Dromont (Porter Services)", "Phone:": "980-237-8274", "Email:": "customer.care@dromont.com", "Individual:": null}, "22": {"Entity:": "Dromont(Mark)", "Phone:": "704-388-7914", "Email:": "mark.strickland@dromontgroup.com", "Individual:": null}, "23": {"Entity:": "EFB Support", "Phone:": "866-774-5297", "Email:": "*AC PPG EFB Support", "Individual:": "DO NOT GIVE TO STORES"}, "24": {"Entity:": "Fluid Management HD", "Phone:": "800-462-2466", "Email:": "Old number: 847-520-6008  ", "Individual:": "DO NOT GIVE TO STORES"}, "25": {"Entity:": "Global IT Service Desk", "Phone:": "412-434-2662", "Email:": "itsd-global@ppg.com", "Individual:": null}, "26": {"Entity:": "HR US", "Phone:": "888-774-2121", "Email:": "hrsupportppgac@ppg.com", "Individual:": null}, "27": {"Entity:": "HR Canada", "Phone:": "877-839-1881", "Email:": null, "Individual:": null}, "28": {"Entity:": "HR Puerto Rico", "Phone:": null, "Email:": "idalis.landrau@ppg.com", "Individual:": "Idalis Iandrau"}, "29": {"Entity:": "Hero", "Phone:": "800-494-4376", "Email:": null, "Individual:": null}, "30": {"Entity:": "Inventory Team", "Phone:": null, "Email:": "PPGStoreInventory@ppg.com", "Individual:": null}, "31": {"Entity:": "AC Kronos Support", "Phone:": null, "Email:": "ACKronosSupport@ppg.com", "Individual:": null}, "32": {"Entity:": "Moneris Solutions", "Phone:": "866-319-7450", "Email:": null, "Individual:": null}, "33": {"Entity:": "Operator ", "Phone:": "412-434-3131", "Email:": null, "Individual:": null}, "34": {"Entity:": "Payroll", "Phone:": null, "Email:": "*PAF Payroll Team", "Individual:": null}, "35": {"Entity:": "People Pulse", "Phone:": "833-774-7772", "Email:": null, "Individual:": null}, "36": {"Entity:": "Promotions US Paint", "Phone:": "724-591-6342", "Email:": "carrozzi@ppg.com", "Individual:": "Shannon Carrozzi"}, "37": {"Entity:": "Promotions US Spray and Equipment ", "Phone:": "724-814-9805", "Email:": "rhodes@ppg.com", "Individual:": "Don Rhodes"}, "38": {"Entity:": "Promotions US Spray and Equipment", "Phone:": "508-717-5255", "Email:": "vigue@ppg.com", "Individual:": "Amy Vigue"}, "39": {"Entity:": "Promotions US All Other Sundries", "Phone:": "412-527-2219", "Email:": "mchugh@ppg.com", "Individual:": "Doreen McHugh"}, "40": {"Entity:": "Promotions CA Paint - Sundry", "Phone:": null, "Email:": "rob.mcdonald@ppg.com - gurmukh.banait@ppg.com", "Individual:": "Rob McDonald  - Gurmukh Banait"}, "41": {"Entity:": "Promotions PR Paint/Sundry", "Phone:": null, "Email:": "velezramos@ppg.com", "Individual:": "Arlivonne Velez-Ramos"}, "42": {"Entity:": "ProSight Support", "Phone:": "833-482-0509", "Email:": "prosighthelp@ppg.com", "Individual:": null}, "43": {"Entity:": "QuestZones", "Phone:": "866-462-3551", "Email:": null, "Individual:": null}, "44": {"Entity:": "International Star Rewards (CA\\PR)", "Phone:": "718-609-8500", "Email:": null, "Individual:": null}, "45": {"Entity:": "Star Rewards", "Phone:": "888-598-4455 ", "Email:": null, "Individual:": null}, "46": {"Entity:": "Store Maintenance", "Phone:": null, "Email:": "PPGACStoreMaintenance@ppg.com", "Individual:": null}, "47": {"Entity:": "Tax Dept. Fax", "Phone:": "800-640-4726", "Email:": null, "Individual:": null}, "48": {"Entity:": "Tech Support (Canada/French)", "Phone:": "800-387-2253", "Email:": null, "Individual:": null}, "49": {"Entity:": "Tech Support (Product Questions)", "Phone:": "800-441-9695", "Email:": "\u200basktechservice@ppg.com", "Individual:": null}, "50": {"Entity:": "True Finish", "Phone:": "888-638-9795", "Email:": "Tforders@ppg.com", "Individual:": null}, "51": {"Entity:": "One Recognition and Rewards ", "Phone:": "888-598-4455 (US)  718-609-8500 (International toll) ", "Email:": "totalvisionrecognition@mcfina.com", "Individual:": null}, "52": {"Entity:": "Site Support Windows 10 Replacment Project", "Phone:": "724-720-4408", "Email:": null, "Individual:": null}}




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
                "had user press 2 > 6 > 3 > 4 > F > Control panel > software mangement > evolution > remote upgrade > start remote upgrade",
                "after rebooted, on my pc went to meraki > looked up the switch > found the credit card reader ports (VLAN 44)",
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

    '9800' : 
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

    '9800-1' : 
        {
            "Subject" : "Clear check payment cleared in Elevate",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Elevate",
            "Type" : "Service Request/Hardware/Other",
        
            "Description" : [
                "Clear check payment cleared in Elevate",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User had a transaction that moneris froze on",
                "needs old moneris payment cleared",
                "Stuck in check payment",
                "order number - "
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf8465-2 > got the order number > saw check payment > reached out to systems support with order number > ",
                "told user it should clear in about 30 minutes > closed elevate > cleared elevate kisok profile",
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
                "remoted into wpaf{1}-x1 > pasted reset password link in browser > user rest password > was able to log into people pulse",
                " ",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '7256' : 
        {
            "Subject" : "Dymo Label Troubleshooting",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Printer",
            "Type" : "Incident/Hardware/Printer",
        
            "Description" : [
                "Dymo Label Troubleshooting",
                "-",
                "Name: {0}",
                "Device: wsus{1}-fp2",
                "-",
                "Dymo Label printer is not printing",
                "Needs to be set up correctly"
            ],
            
            "Actions & Solutions" : [
                "remoted into wsus{1}-fp2 > control panel > view devices and printers > right clicked on dymo > general tab",
                "change properties > preferences > advanced > paper size > 30364 Name badge label > OK > closed out",
                "right clicked on the dymo again > advanced tab > printing defaults > advanced > paper size > 30364 Name badge label",
                "(needs changed in both places) > apply > opened formula pro > printed a test label > success ",
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
                "remoted into wpaf{1}-2 > saw the issue > gathered TraceID > check that the srv was online in men and mice",
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
        },

    '8636' : 
        {
            "Subject" : "Concur/Canon Permissions Error uploading receipts",
            "Service" : "Business Application",
            "Configuration Item": "NA OF Concur (APL)",
            "Type" : "Incident/Hardware/Scanner",
        
            "Description" : [
                "Concur/Canon Permissions Error uploading receipts",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User is trying to upload receipts into concur",
                "They get an error"
            ],
            
            "Actions & Solutions" : [
                "remoted into  wpaf{1}-x1 > saw the error",
                "copied all the contents of Concur Scans into a new folder, C:\Concur backup > deleted Concur Scans folder",
                "navigated to > \\wpaf{1}-X1\\C$\\Program Files (x86)\\Hewlett-Packard\\CM\\Agent\\Lib\\System\\Radia\\Software\\ZSERVICE >",
                "deleted CANON_LIDE300_SCANNER and Canon_LIDE300_Permissions folders >",
                "navigated to >  \\wpaf{1}-X1\\C$\\Program Files\\PPG\\Setups > deleted CanonLEDE300_Scanner folder > on X1 launched radia",
                "uninstalled CAnon LIDE 300 model scanner > reinstalled > took about 5 minutes > verified canon permissions > broken > hit repair > ",
                "copied contents of concur backup folder to new Concur scans folder > deleted concur backup folder",
                "User logged into managerSSO > tried to upload scanned pdf > no more errors",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '5214' : 
        {
            "Subject" : "SRV/server offline replacement for US/PR store",
            "Service" : "Hardware Support Services",
            "Configuration Item": "POS SRV Builds",
            "Type" : "Service Request/PC Builds",
        
            "Description" : [
                "SRV/server offline replacement for US/PR store",
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
                "ran poslog.psl from XCENTER DB",
                "SELECT * FROM trn_poslog_data (nolock) where rtl_loc_id = '{1}' and business_date = '2018-04-09 00:00:00.000' ",
                "Emailed out the finance team",
                "",
                "Escalating to Site IT",
                "",
                "Hello team,",
                "Store {1}'s server went and needs to be replaced.  Are you able to send a new one?"
            ]
        },

    '5214-2' : 
        {
            "Subject" : "Register PC offline replacement for US/PR store",
            "Service" : "Hardware Support Services",
            "Configuration Item": "POS SRV Builds",
            "Type" : "Service Request/PC Builds",
        
            "Description" : [
                "Register PC offline replacement for US/PR store",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-2",
                "-",
                "user's register 2 is offline",
                "won't power on",
                "Service Tag: "
                
            ],
            
            "Actions & Solutions" : [
                "ran a ping in men and mice > saw that the wpaf{1}-2 was red, offline",
                "Had user restart the PC > f2 to go into Bios > boot sequence > uncheck all except windows boot manager",
                "restart PC > issue persists > had user unplug the PC completely > hold power button for 30 seconds",
                "plug pc back in > power it back on > Issue persists > had user disconnect ethernet cable from PC",
                "Escalating to Site IT",
                "",
                "Hello team,",
                "Store {1}'s register 2 is no longer booting to windows.  Are you able to send a replacement?"
            ]
        },

    '6727' : 
        {
            "Subject" : "Replenishment order SAP/Optima not dropping to XStore",
            "Service" : "Business Application",
            "Configuration Item": "Optima OEV (APL)",
            "Type" : "Incident/Business Applications/North America/AC USCA Optima OEV",
        
            "Description" : [
                "Replenishment order SAP/Optima not dropping to XStore",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User has a replenishment order",
                "Has not dropped to XStore for the user to receive",
                "SAP #: "
                
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > gathered the SAP number",
                "from my PC ran H:\\Common\\Powershell\\Optima\\OptimaOrderCheck.ps1 > no errors",
                "POST PICTURES AND RESULTS",
                "ran ASN_PO_Check_IMPROVED.ps1 > POST PICTURES AND RESULTS",
                "",
                "Ticket Deferred"
            ]
        },

    '3723' : 
        {
            "Subject" : "User is logged in on a different profile",
            "Service" : "Identity and Messaging Services",
            "Configuration Item": "Active Directory (APL)",
            "Type" : "Service Request/Account Maintenance/NT Password Reset/Unlock",
        
            "Description" : [
                "User is logged in on a different profile",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User logs into the X1",
                "all their icons are missing, but PC still works"
                
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > cmd > whoami > PC was on a different profile",
                "start menu > sign out > sign in as other user > wpaf{1}-1 > now everything looks normal",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '6250' : 
        {
            "Subject" : "User can't access external site, url blocked",
            "Service" : "Internet Services",
            "Configuration Item": "Edge Browser - Microsoft (APL)",
            "Type" : "Incident/Productivity Tools & Applications/Microsoft Edge",
        
            "Description" : [
                "User can't access external site, url blocked",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User is trying to access a work related site",
                "they get a message that it is blocked by zScaler"
                
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf8635-x1 > saw the error",
                "Website/Url: ....",
                "Description of site: ....",
                "",
                "Escalating to Infrastructure",
                "",
                "Hi team, store {1} is trying to ...... but the site is blocked.  Are you able to unblock the site?"
            ]
        },

    '9314' : 
        {
            "Subject" : "Brother printer setup on FP pc",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Printer",
            "Type" : "Incident/Hardware/Printer",
        
            "Description" : [
                "Brother printer setup on FP pc",
                "-",
                "Name: {0}",
                "{1}",
                "-",
                "User has a brother label printer on a formula pro PC",
                "The labels are not printing out correctly"
                
            ],
            
            "Actions & Solutions" : [
                "bomgared into the dealer PC > control panel > view devices and printers > right clicked on the brother > ",
                "had preferences > paper size set up > had user measure the correct paper size > made sure to change it from Advanced tab as well",
                "opened formula pro > settings > printer > made sure the brother was setup as the printer > looked up a formula > printed a label > success",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '3733' : 
        {
            "Subject" : "User can't log into X1, Starlink/tec showing SRV/server",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Store Peripherals",
            "Type" : "Incident/Hardware",
        
            "Description" : [
                "User can't log into X1, Starlink/tec showing SRV/server",
                "-",
                "Name: {0}",
                "Device: {1}-x1",
                "-",
                "User is trying to get into the X1",
                "They just see Xstore on the monitor"
                
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-srv > user saw me remoted in > told user that was the SRV > remoted into wpaf8401-x1 > was able to ",
                "had user press select button on StarLink > user was able to see the X1 and use it now",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '9712' : 
        {
            "Subject" : "Refund for account in elevate",
            "Service" : "Business Application",
            "Configuration Item": "Elevate (APL)",
            "Type" : "Incident/Business Applications/North America",
        
            "Description" : [
                "Refund for account in elevate",
                "-",
                "Name: {0}",
                "Device: {1}-x1",
                "-",
                "User has an invoice they want to return in elevate",
                "the customer was not charged tax, but the return wants to return tax"
                
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > closed elevate > had the user click refund > no receipt instead of scanning the invoice >",
                "entered in the SKUs to return > was not returning tax this time",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '8613' : 
        {
            "Subject" : "Phones dropping calls and can't call out",
            "Service" : "Voice Services",
            "Configuration Item": "Verizon One Talk",
            "Type" : "Incident/Hardware/Telephone",
        
            "Description" : [
                "Phones dropping calls and can't call out",
                "-",
                "Name: {0}",
                "Device: {1}-x1",
                "-",
                "User can't call out at all",
                "Is happening on all the phones and all the calls"
                
            ],
            
            "Actions & Solutions" : [
                "Went to Meraki > looked up the store > switches >",
                "found the ports for the w60b in the switch and SIP (desk phones) > cycled those ports > waited about 2 minutes >",
                "user made a test call > user was able to call out successfully",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '8296' : 
        {
            "Subject" : "User can't log into ClientLink",
            "Service" : "Business Application",
            "Configuration Item": "ClientLink (APL)",
            "Type" : "Incident/Business Applications/North America",
        
            "Description" : [
                "User can't log into ClientLink",
                "-",
                "Name: {0}",
                "Device: {1}-x1",
                "-",
                "'You cannot access this right now'",
                "User can't get in to client link"
                
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > three dots in edge > favorites > three dots > open favorites page >",
                "new favorites > pasted clientLink link https://my345171-sso.crm.ondemand.com/ > deleted the old links that had  https://my345171-sso.crm.ondemand.com/...........",
                "this will force it to generate a new security token each time > tested it > success",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

    '9754' : 
        {
            "Subject" : "Star printer setup/troubleshooting",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Printer",
            "Type" : "Incident",
        
            "Description" : [
                "Star printer setup/troubleshooting",
                "-",
                "Name: {0}",
                "Device: {1}-2",
                "-",
                "User needs their star printer set up",
                "Small receipts are not printing in Elevate"
                
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-2 > ran LAN & Bluetooth setup tool > create a printer queue by specifying the IP address",
                "entered in the top IP from the menu > printed a test page > success",
                "Went to devices and printers > right click on the star printer > renamed it to RECEIPT2",
                "opened store equipment Driver > set tape printer to RECIEPT2 > printed a test page > success",
                "opened Elevate > clicked printer icon in upper right > RECEIPT2 was now showing as receipt printer",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },
    
        '9806' : 
        {
            "Subject" : "Inventory problem after receiving in SSP",
            "Service" : "Business Application",
            "Configuration Item": "Optima OEV (APL)",
            "Type" : "Service Request",
        
            "Description" : [
                "Inventory problem after receiving in SSP",
                "-",
                "Name: {0}",
                "Device: {1}-x1",
                "-",
                "User received an order in SSP",
                "The order is not showing up"     
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > gathered the order details",
                "",
                "Escalating to Application Support",
                "",
                "Hello team, Store {1}'s inventory is off and their order isn't showing up in SSP.  Are you able to assist?"
            ]
        },

        '9090' : 
        {
            "Subject" : "User can't complete order in Elevate/pricing spin",
            "Service" : "Business Application",
            "Configuration Item": "Elevate",
            "Type" : "Incident",
        
            "Description" : [
                "User can't complete order in Elevate/pricing spin",
                "-",
                "Name: {0}",
                "Device: {1}-2",
                "-",
                "User is trying to close an order in Elevate",
                "Blue donut spins over prices and they can't close order"     
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-2 > closed Elevate > deleted C:\\PPG\\Elevate Kiosk Profile",
                "Opened Elevate > had the user recreate the order as a separate order > this time they could close it",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

        '6463' : 
        {
            "Subject" : "User's APC battery backup is dead",
            "Service" : "Hardware Support Services",
            "Configuration Item": "Store Peripherals",
            "Type" : "Service Request/Hardware",
        
            "Description" : [
                "User's APC battery backup is dead",
                "-",
                "Name: {0}",
                "Device: {1}-apc",
                "-",
                "User has an APC battery backup",
                "It is beeping and needs to be replaced"     
            ],
            
            "Actions & Solutions" : [
                "gave user the part number to order through EPro",
                "US: Part number  2521885   CA: Part number 2582806",
                "Told user that if they can't find that on EPro, find one as close to the following",
                "APC Back-UPS 650 VA 8 Outlet battery backup and surge protector",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

        '5447' : 
        {
            "Subject" : "User cannot access AdStock",
            "Service" : "Business Application",
            "Configuration Item": "AdStock (APL)",
            "Type" : "Service Request",
        
            "Description" : [
                "User cannot access AdStock",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User is trying to get into AdStock",
                "can't remember the password"     
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > three dots in edge > cleared cache > ",
                "reloaded adstock page at https://ppgadstock.archwayconnect.com/login/ > went to new URL",
                "user entered in user name and password they had > failure >",
                "Directed user to contact adstock from the info available on website > user understood",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        },

        '5448' : 
        {
            "Subject" : "User cannot get into APEX",
            "Service" : "Identity and Messaging Services",
            "Configuration Item": "Store APEX (APL)",
            "Type" : "Incident/Business Applications/North America/Store APEX",
        
            "Description" : [
                "User cannot get into APEX",
                "-",
                "Name: {0}",
                "Device: wpaf{1}-x1",
                "-",
                "User cannot access APEX",
                "It is prompting for credentials"     
            ],
            
            "Actions & Solutions" : [
                "remoted into wpaf{1}-x1 > three dots in edge > cleared cache for past 7 days > reloaded APEX > not prompting for credentials",
                "told user that if needed, they can log in with paf{1}-1 as user name and the store password >",
                "For further questions, directed user to US Stores: AfStoresPricing@ppg.com  -  Canada stores: CanadaStorespricing@ppg.com",
                "",
                "Issue Resolved",
                "Closing Ticket"
            ]
        }
    
    }

