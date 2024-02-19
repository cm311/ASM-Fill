
if (!document.getElementById("rightContainer")) {
    addElements();
    addScripts();
}
else {
    console.log('here')
    var rightContainer = document.getElementById("rightContainer");
    var leftContainer = document.getElementById("leftContainer");
    rightContainer.innerHTML = "";
    leftContainer.innerHTML = "";
    rightContainer.remove();
    leftContainer.remove();
}


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

    //Info Bubble
    var infoBubble = document.createElement('div');
    infoBubble.id = 'infoBubble';
    infoBubble.style.display = 'none';
    infoBubble.style.position = 'absolute';
    infoBubble.style.backgroundColor = '#f1f1f1';
    infoBubble.style.color = '#333';
    infoBubble.style.opacity = '0';
    infoBubble.style.transition = 'opacity 0.5s';

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
    suggestedKA.textContent = ' '
    suggestedKA.style.marginLeft = '2%'
    suggestedKA.style.width = '46%'
    //suggestedKA.style.flex = '1';

    var searchInput = document.createElement('input');
    searchInput.placeholder = 'Search word in title';
    searchInput.id = "searchInput";
    searchInput.style.height = '40%'
    //searchInput.style.flex = '1';

    var searchButton = document.createElement('button');
    searchButton.placeholder = 'Search word in title';
    searchButton.id = "searchButton";
    searchButton.textContent = "Search"
    searchButton.style.borderRadius = '5px'; // Set corner radius
    searchButton.style.marginRight = '8px'; // Adjust right margin
    searchButton.style.color = '#F9FCFC'
    searchButton.style.backgroundColor = '#0071AA'
    searchButton.style.border = 'none'
    searchButton.style.height = '40%'
    //searchButton.style.flex = '1';

    var clearButton = document.createElement('button');
    clearButton.id = "clearButton"
    clearButton.textContent = "Clear"
    clearButton.style.borderRadius = '5px'; // Set corner radius
    clearButton.style.marginRight = '8px'; // Adjust right margin
    clearButton.style.color = '#F9FCFC'
    clearButton.style.backgroundColor = '#0071AA'
    clearButton.style.border = 'none'
    clearButton.style.height = '40%'

    //add search contact button
    var searchContact = document.createElement('button');
    searchContact.placeholder = 'Search Contact Info';
    searchContact.id = "searchContact";
    searchContact.textContent = "Search"
    searchContact.style.borderRadius = '5px'; // Set corner radius
    searchContact.style.marginRight = '8px'; // Adjust right margin
    searchContact.style.color = '#F9FCFC'
    searchContact.style.backgroundColor = '#0071AA'
    searchContact.style.border = 'none'
    searchContact.style.height = '40%'

    var contactInput = document.createElement('input');
    contactInput.placeholder = 'Search Contact Info';
    contactInput.id = "contactInput";
    contactInput.style.height = '40%';

    var contactInfo = document.createElement('p');
    contactInfo.id = 'contactInfo'
    contactInfo.textContent = ' '
    contactInfo.style.marginLeft = '2%'
    contactInfo.style.flex = '1'
    //suggestedKA.style.width = '46%'




    
    //ADDING ALL ELEMENTS TO THE DIVS OR DELETE

    // Empty Container (Right Div)
    var rightContainer = document.createElement('div');
    rightContainer.id = "rightContainer"
    //rightContainer.style.flex = '1'; // Take up remaining space
    rightContainer.style.display = 'flex'; // Use flexbox
    //rightContainer.style.justifyContent = 'flex-end'; // Align to the right
    rightContainer.style.height = "7%"
    rightContainer.appendChild(searchButton);
    rightContainer.appendChild(clearButton);
    rightContainer.appendChild(searchInput);
    rightContainer.appendChild(suggestedKA);
    rightContainer.appendChild(searchContact);
    rightContainer.appendChild(contactInput);
    rightContainer.appendChild(contactInfo);
    rightContainer.style.fontFamily = "Roboto, sans-serif"
    rightContainer.style.background = "linear-gradient(to bottom right, #59cefc 75%, #EC058E)"
    document.body.insertBefore(rightContainer, document.body.firstChild);

    // Container for configLabel and serviceLabel (Left Div)
    var leftContainer = document.createElement('div');
    leftContainer.id = "leftContainer"
    leftContainer.style.display = 'flex'; // Use flexbox
    leftContainer.style.justifyContent = 'flex-end'; // Align to the right
    leftContainer.appendChild(serviceLabel);
    leftContainer.appendChild(configLabel);
    leftContainer.appendChild(typeLabel);
    leftContainer.appendChild(descriptionButton);
    //leftContainer.appendChild(infoBubble);
    leftContainer.appendChild(actionsButton);
    leftContainer.appendChild(kaInput);
    leftContainer.appendChild(nameInput);
    leftContainer.appendChild(storeInput);
    leftContainer.style.fontFamily = "Roboto, sans-serif"
    leftContainer.style.background = "#59CEFC"
    leftContainer.style.background = "linear-gradient(to top left, #59cefc 40%, #1DACF2)"
    document.body.insertBefore(leftContainer, document.body.firstChild);
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





router_data = [{"Model": "MX67C-NA", "Name": "R1080-1", "MAC address": "68:3a:1e:1f:ed:29", "Public IP": "67.69.69.94", "Network": "NAC-CA-1080-Guelph", "Serial number": "Q2HY-2HJ6-WUMC", "Usage": "24.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1148-1", "MAC address": "ac:17:c8:5d:e5:63", "Public IP": "67.69.139.162", "Network": "NAC-CA-1148-Cambridge", "Serial number": "Q2HY-Q7RT-R7X7", "Usage": "11.70 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1451-1", "MAC address": "68:3a:1e:20:08:ab", "Public IP": "184.151.246.191", "Network": "NAC-CA-1451-Winnipeg", "Serial number": "Q2HY-D5XE-AFQ8", "Usage": "358.8 MB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1455-1", "MAC address": "ac:17:c8:5d:e3:8e", "Public IP": "70.25.65.112", "Network": "NAC-CA-1455-Toronto", "Serial number": "Q2HY-PT4U-DUXB", "Usage": "8.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1500-1", "MAC address": "ac:17:c8:5d:ec:ef", "Public IP": "72.14.174.194", "Network": "NAC-CA-1500-Clarkson", "Serial number": "Q2HY-RQ6S-YCBU", "Usage": "63.70 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1551-1", "MAC address": "68:3a:1e:1f:f7:e1", "Public IP": "174.90.223.202", "Network": "NAC-CA-1551-Saskatoon", "Serial number": "Q2HY-6XU8-A9A5", "Usage": "373.8 MB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1555-1", "MAC address": "68:3a:1e:20:0a:f7", "Public IP": "70.28.28.87", "Network": "NAC-CA-1555-Woodstock", "Serial number": "Q2HY-DZDU-HJRY", "Usage": "7.62 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1685-1", "MAC address": "ac:17:c8:5d:f1:2c", "Public IP": "173.183.113.40", "Network": "NAC-CA-1685-Annacis Island", "Serial number": "Q2HY-SM6K-7CF9", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R1731-1", "MAC address": "68:3a:1e:1f:fe:86", "Public IP": "76.65.202.103", "Network": "NAC-CA-1731-Windsor", "Serial number": "Q2HY-9S27-V256", "Usage": "19.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R3061-1", "MAC address": "68:3a:1e:1f:ff:c8", "Public IP": "2605:b100:146:468d:dcad:beff:feef:0", "Network": "NAC-CA-3061-Stoney Creek", "Serial number": "Q2HY-A82Q-9PKG", "Usage": "10.37 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8400-1", "MAC address": "98:18:88:c9:46:87", "Public IP": "99.233.115.66", "Network": "NAC-CA-8400-Barrie", "Serial number": "Q2HY-T4CK-RPZT", "Usage": "28.37 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8401-1", "MAC address": "ac:17:c8:5d:f7:ae", "Public IP": "142.177.94.69", "Network": "NAC-CA-8401-Bedford", "Serial number": "Q2HY-TX2N-JVYT", "Usage": "11.32 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8402-1", "MAC address": "ac:17:c8:c1:aa:c5", "Public IP": "72.38.206.113", "Network": "NAC-CA-8402-Belleville", "Serial number": "Q2HY-YA68-WEZM", "Usage": "22.59 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8403-1", "MAC address": "98:18:88:75:56:99", "Public IP": "206.172.159.112", "Network": "NAC-CA-8403-Boucherville", "Serial number": "Q2HY-GFTJ-L8MU", "Usage": "8.32 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8404-1", "MAC address": "ac:17:c8:c1:a9:7c", "Public IP": "70.48.162.94", "Network": "NAC-CA-8404-Brampton", "Serial number": "Q2HY-XVZM-RLBR", "Usage": "31.05 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8405-1", "MAC address": "ac:17:c8:5d:f2:7c", "Public IP": "65.95.94.148", "Network": "NAC-CA-8405-Brampton", "Serial number": "Q2HY-STT2-SC2N", "Usage": "14.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8406-1", "MAC address": "98:18:88:c9:45:f4", "Public IP": "50.100.243.182", "Network": "NAC-CA-8406-Brampton", "Serial number": "Q2HY-SZRF-4WAS", "Usage": "18.05 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8407-1", "MAC address": "ac:17:c8:5d:fc:cb", "Public IP": "216.36.187.207", "Network": "NAC-CA-8407-Brandon", "Serial number": "Q2HY-UZPL-UUTH", "Usage": "13.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8408-1", "MAC address": "ac:17:c8:c1:b0:b4", "Public IP": "99.253.146.28", "Network": "NAC-CA-8408-Brantford", "Serial number": "Q2HY-ZNDA-XXNG", "Usage": "11.31 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8409-1", "MAC address": "ac:17:c8:5d:76:35", "Public IP": "24.146.57.218", "Network": "NAC-CA-8409-Brockville", "Serial number": "Q2HY-32DC-LN5X", "Usage": "26.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8410-1", "MAC address": "ac:17:c8:5d:f5:4d", "Public IP": "96.21.203.244", "Network": "NAC-CA-8410-Brossard", "Serial number": "Q2HY-TFQK-6ZMA", "Usage": "25.64 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8411-1", "MAC address": "ac:17:c8:c1:a8:64", "Public IP": "50.100.67.104", "Network": "NAC-CA-8411-Burlington", "Serial number": "Q2HY-XNTF-7CYW", "Usage": "34.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8412-1", "MAC address": "ac:17:c8:5d:d1:e4", "Public IP": "50.67.5.178", "Network": "NAC-CA-8412-Burnaby", "Serial number": "Q2HY-2L3J-48V3", "Usage": "132.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8416-1", "MAC address": "98:18:88:c9:45:ca", "Public IP": "68.144.95.231", "Network": "NAC-CA-8416-Calgary", "Serial number": "Q2HY-SYK9-PYUM", "Usage": "13.60 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8417-1", "MAC address": "98:18:88:c9:40:2f", "Public IP": "70.77.71.30", "Network": "NAC-CA-8417-Calgary", "Serial number": "Q2HY-S9NX-LNJN", "Usage": "9.20 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8418-1", "MAC address": "98:18:88:c9:4a:7e", "Public IP": "24.64.156.253", "Network": "NAC-CA-8418-Calgary", "Serial number": "Q2HY-TQEK-P9HY", "Usage": "12.04 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8419-1", "MAC address": "98:18:88:c9:48:39", "Public IP": "67.71.172.61", "Network": "NAC-CA-8419-Calgary", "Serial number": "Q2HY-TBB3-HW39", "Usage": "9.62 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8420-1", "MAC address": "98:18:88:c9:58:0e", "Public IP": "67.71.172.233", "Network": "NAC-CA-8420-Calgary", "Serial number": "Q2HY-VP55-M553", "Usage": "145.27 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8421-1", "MAC address": "98:18:88:c9:49:04", "Public IP": "67.71.172.4", "Network": "NAC-CA-8421-Calgary", "Serial number": "Q2HY-TFD3-8Q83", "Usage": "110.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8422-1", "MAC address": "ac:17:c8:5d:f7:7d", "Public IP": "70.29.43.89", "Network": "NAC-CA-8422-Cambridge", "Serial number": "Q2HY-TVMN-P6XH", "Usage": "13.66 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8423-1", "MAC address": "ac:17:c8:c1:ac:f5", "Public IP": "142.163.207.88", "Network": "NAC-CA-8423-Charlottetown", "Serial number": "Q2HY-YTJR-VMA6", "Usage": "14.52 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8424-1", "MAC address": "ac:17:c8:5d:d0:32", "Public IP": "76.68.208.13", "Network": "NAC-CA-8424-Chateauguay", "Serial number": "Q2HY-228H-J3EK", "Usage": "120.00 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8425-1", "MAC address": "ac:17:c8:5d:76:51", "Public IP": "76.66.124.224", "Network": "NAC-CA-8425-Chatham", "Serial number": "Q2HY-336P-FJDW", "Usage": "17.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8426-1", "MAC address": "ac:17:c8:5d:71:ff", "Public IP": "184.161.69.69", "Network": "NAC-CA-8426-Chicoutimi", "Serial number": "Q2HY-2594-US9C", "Usage": "28.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8427-1", "MAC address": "ac:17:c8:5d:d5:17", "Public IP": "184.151.230.146", "Network": "NAC-CA-8427-Chilliwack", "Serial number": "Q2HY-3CDC-LSDV", "Usage": "12.04 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8428-1", "MAC address": "ac:17:c8:c1:a9:1a", "Public IP": "174.1.47.108", "Network": "NAC-CA-8428-Coquitlam", "Serial number": "Q2HY-XTXM-WBFU", "Usage": "27.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8429-1", "MAC address": "ac:17:c8:5d:76:43", "Public IP": "216.208.243.180", "Network": "NAC-CA-8429-Corner Brook", "Serial number": "Q2HY-32Y7-WCCR", "Usage": "23.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8430-1", "MAC address": "ac:17:c8:c1:ac:c4", "Public IP": "76.69.139.118", "Network": "NAC-CA-8430-Cornwall", "Serial number": "Q2HY-YRRU-KPA3", "Usage": "9.98 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8431-1", "MAC address": "98:18:88:75:57:e2", "Public IP": "184.66.125.158", "Network": "NAC-CA-8431-Courtenay", "Serial number": "Q2HY-GJP9-2JBW", "Usage": "22.90 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8432-1", "MAC address": "ac:17:c8:c1:ac:62", "Public IP": "65.92.198.67", "Network": "NAC-CA-8432-Orleans", "Serial number": "Q2HY-YPMK-APF7", "Usage": "17.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8433-1", "MAC address": "bc:db:09:bd:e4:a0", "Public IP": "216.208.243.69", "Network": "NAC-CA-8433-Dartmouth", "Serial number": "Q2HY-E4QJ-59HY", "Usage": "26.34 GB", "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R8434-1", "MAC address": "ac:17:c8:5d:75:4e", "Public IP": "24.222.192.119", "Network": "NAC-CA-8434-Dartmouth", "Serial number": "Q2HY-2TH8-98W8", "Usage": "14.49 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8435-1", "MAC address": "ac:17:c8:5d:d3:c0", "Public IP": "142.177.178.229", "Network": "NAC-CA-8435-Dartmouth", "Serial number": "Q2HY-32V2-GFK3", "Usage": "25.93 GB", "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R8436-1", "MAC address": "ac:17:c8:5d:f5:31", "Public IP": "206.116.226.112", "Network": "NAC-CA-8436-Delta", "Serial number": "Q2HY-TESE-29J2", "Usage": "18.34 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8437-1", "MAC address": "ac:17:c8:5d:f4:74", "Public IP": "67.71.186.113", "Network": "NAC-CA-8437-Delta", "Serial number": "Q2HY-T8UD-UBWE", "Usage": "11.62 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8439-1", "MAC address": "98:18:88:75:6f:4a", "Public IP": "70.80.44.240", "Network": "NAC-CA-8439-Dollard Des-Ormeaux", "Serial number": "Q2HY-J2JN-VQJ2", "Usage": "28.27 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8441-1", "MAC address": "ac:17:c8:5d:7e:fc", "Public IP": "24.122.178.232", "Network": "NAC-CA-8441-Drummondville", "Serial number": "Q2HY-4ULT-KSMU", "Usage": "114.96 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8442-1", "MAC address": "ac:17:c8:5d:d9:62", "Public IP": "184.66.30.196", "Network": "NAC-CA-8442-Duncan", "Serial number": "Q2HY-4DNT-27MT", "Usage": "10.20 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8443-1", "MAC address": "98:18:88:c9:45:df", "Public IP": "67.71.172.10", "Network": "NAC-CA-8443-Edmonton", "Serial number": "Q2HY-SYYB-UREP", "Usage": "14.07 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8444-1", "MAC address": "ac:17:c8:c1:a5:a8", "Public IP": "24.65.124.16", "Network": "NAC-CA-8444-Edmonton", "Serial number": "Q2HY-X2RT-ZQT9", "Usage": "14.63 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8445-1", "MAC address": "ac:17:c8:c1:b2:12", "Public IP": "68.151.209.219", "Network": "NAC-CA-8445-Edmonton", "Serial number": "Q2HY-ZYDR-GFJJ", "Usage": "33.24 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8446-1", "MAC address": "ac:17:c8:5d:ff:72", "Public IP": "184.69.241.162", "Network": "NAC-CA-8446-Edmonton", "Serial number": "Q2HY-VJUD-KJZP", "Usage": "36.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8447-1", "MAC address": "98:18:88:c9:69:b1", "Public IP": "96.52.18.25", "Network": "NAC-CA-8447-Edmonton", "Serial number": "Q2HY-YCZ4-UDJ7", "Usage": "16.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8448-1", "MAC address": "ac:17:c8:c1:ab:b3", "Public IP": "174.3.192.238", "Network": "NAC-CA-8448-Edmonton", "Serial number": "Q2HY-YJKD-UN9G", "Usage": "26.40 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8449-1", "MAC address": "ac:17:c8:5d:d6:1a", "Public IP": "67.71.172.250", "Network": "NAC-CA-8449-Edmonton", "Serial number": "Q2HY-3KJW-SF5J", "Usage": "10.90 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8450-1", "MAC address": "ac:17:c8:5d:f1:f0", "Public IP": "76.64.95.53", "Network": "NAC-CA-8450-Etobicoke", "Serial number": "Q2HY-SRDK-QEUT", "Usage": "30.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8451-1", "MAC address": "ac:17:c8:5d:d4:3e", "Public IP": "207.179.158.237", "Network": "NAC-CA-8451-Fredericton", "Serial number": "Q2HY-37N4-JJ45", "Usage": "24.76 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8452-1", "MAC address": "ac:17:c8:5d:7e:5b", "Public IP": "74.14.194.171", "Network": "NAC-CA-8452-Gatineau", "Serial number": "Q2HY-4PC9-ADNN", "Usage": "40.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8453-1", "MAC address": "ac:17:c8:c1:c1:3f", "Public IP": "161.216.164.23", "Network": "NAC-CA-8453-Gatineau", "Serial number": "Q2HY-88C4-HXM8", "Usage": "12.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8454-1", "MAC address": "ac:17:c8:5d:e1:7a", "Public IP": "99.209.30.226", "Network": "NAC-CA-8454-Georgetown", "Serial number": "Q2HY-PES7-9DBN", "Usage": "38.00 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8455-1", "MAC address": "ac:17:c8:c1:b0:28", "Public IP": "70.48.127.48", "Network": "NAC-CA-8455-Granby", "Serial number": "Q2HY-ZK8L-3E98", "Usage": "8.38 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8457-1", "MAC address": "ac:17:c8:5d:74:f3", "Public IP": "64.66.28.57", "Network": "NAC-CA-8457-Sault Ste.Marie", "Serial number": "Q2HY-2QRG-6YR6", "Usage": "14.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8458-1", "MAC address": "ac:17:c8:5d:f6:7a", "Public IP": "69.156.144.89", "Network": "NAC-CA-8458-Guelph", "Serial number": "Q2HY-TQCQ-VMP6", "Usage": "75.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8460-1", "MAC address": "ac:17:c8:c1:ac:b6", "Public IP": "69.157.1.179", "Network": "NAC-CA-8460-Guelph", "Serial number": "Q2HY-YRD5-PWU7", "Usage": "33.45 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8461-1", "MAC address": "ac:17:c8:5d:72:30", "Public IP": "76.11.77.194", "Network": "NAC-CA-8461-Halifax", "Serial number": "Q2HY-26KH-JW5P", "Usage": "14.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8462-1", "MAC address": "ac:17:c8:c1:b1:fd", "Public IP": "142.162.249.94", "Network": "NAC-CA-8462-Halifax", "Serial number": "Q2HY-ZXHN-6BSE", "Usage": "38.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8463-1", "MAC address": "ac:17:c8:5d:d3:73", "Public IP": "99.236.89.104", "Network": "NAC-CA-8463-Hamilton", "Serial number": "Q2HY-2YVC-ARPF", "Usage": "57.83 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8464-1", "MAC address": "98:18:88:c9:09:86", "Public IP": "99.236.5.216", "Network": "NAC-CA-8464-Hamilton", "Serial number": "Q2HY-HX95-CGMK", "Usage": "52.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8465-1", "MAC address": "ac:17:c8:5d:d6:83", "Public IP": "70.24.2.4", "Network": "NAC-CA-8465-Hamilton", "Serial number": "Q2HY-3MW5-8BPF", "Usage": "25.55 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8466-1", "MAC address": "ac:17:c8:5d:f3:39", "Public IP": "50.100.33.205", "Network": "NAC-CA-8466-Hamilton", "Serial number": "Q2HY-SZ8B-6LKY", "Usage": "13.91 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8467-1", "MAC address": "98:18:88:c9:0a:51", "Public IP": "69.157.4.111", "Network": "NAC-CA-8467-Hamilton", "Serial number": "Q2HY-J2ED-H3K4", "Usage": "26.11 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8468-1", "MAC address": "ac:17:c8:c1:ad:f1", "Public IP": "76.68.239.64", "Network": "NAC-CA-8468-Joliette", "Serial number": "Q2HY-Z2M5-DAUS", "Usage": "19.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8469-1", "MAC address": "98:18:88:75:81:8e", "Public IP": "66.131.214.252", "Network": "NAC-CA-8469-Jonquiere", "Serial number": "Q2HY-K8JT-CA2V", "Usage": "25.27 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8470-1", "MAC address": "ac:17:c8:5d:f2:52", "Public IP": "184.151.230.27", "Network": "NAC-CA-8470-Kamloops", "Serial number": "Q2HY-SSXX-7T34", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R8470-2", "MAC address": "98:18:88:75:7b:44", "Public IP": "67.71.186.69", "Network": "NAC-CA-8470-Kamloops", "Serial number": "Q2HY-JSZW-ETJ4", "Usage": "17.67 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8471-1", "MAC address": "ac:17:c8:5d:f5:b6", "Public IP": "174.4.120.226", "Network": "NAC-CA-8471-Kelowna", "Serial number": "Q2HY-TJQY-WABX", "Usage": "24.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8472-1", "MAC address": "ac:17:c8:c1:a3:c5", "Public IP": "174.88.91.57", "Network": "NAC-CA-8472-Kingston", "Serial number": "Q2HY-WMP2-3L9P", "Usage": "125.21 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8473-1", "MAC address": "ac:17:c8:5d:f0:84", "Public IP": "174.88.35.55", "Network": "NAC-CA-8473-Kingston", "Serial number": "Q2HY-SGQE-7H3H", "Usage": "15.02 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8474-1", "MAC address": "98:18:88:75:88:5d", "Public IP": "173.176.40.173", "Network": "NAC-CA-8474-Kirkland", "Serial number": "Q2HY-KM97-J4VZ", "Usage": "2.32 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8475-1", "MAC address": "98:18:88:c9:0a:e4", "Public IP": "70.30.104.252", "Network": "NAC-CA-8475-Kitchener", "Serial number": "Q2HY-J4PT-YUM3", "Usage": "22.80 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8476-1", "MAC address": "ac:17:c8:c1:a6:11", "Public IP": "70.30.36.159", "Network": "NAC-CA-8476-Kitchener", "Serial number": "Q2HY-X6VC-GZP4", "Usage": "19.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8477-1", "MAC address": "ac:17:c8:c1:aa:71", "Public IP": "69.158.106.155", "Network": "NAC-CA-8477-Kitchener", "Serial number": "Q2HY-Y762-9GTP", "Usage": "34.76 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8478-1", "MAC address": "ac:17:c8:c1:a3:e1", "Public IP": "76.67.144.54", "Network": "NAC-CA-8478-Lachenaie", "Serial number": "Q2HY-WP9E-HZAK", "Usage": "20.32 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8479-1", "MAC address": "98:18:88:c9:09:b7", "Public IP": "76.67.142.183", "Network": "NAC-CA-8479-Lachine", "Serial number": "Q2HY-HY68-MKEQ", "Usage": "8.44 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8480-1", "MAC address": "98:18:88:75:60:be", "Public IP": "70.66.78.17", "Network": "NAC-CA-8480-Langford", "Serial number": "Q2HY-H5MV-GF5G", "Usage": "10.81 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8481-1", "MAC address": "ac:17:c8:5d:78:d5", "Public IP": "70.71.89.2", "Network": "NAC-CA-8481-Langley", "Serial number": "Q2HY-3K67-5H8X", "Usage": "21.69 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8483-1", "MAC address": "98:18:88:75:76:74", "Public IP": "24.203.253.230", "Network": "NAC-CA-8483-Boul Newman", "Serial number": "Q2HY-JGZT-JHC9", "Usage": "12.67 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8484-1", "MAC address": "98:18:88:76:51:18", "Public IP": "67.71.73.134", "Network": "NAC-CA-8484-Laval", "Serial number": "Q2HY-YPN7-KMFE", "Usage": "15.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8486-1", "MAC address": "98:18:88:76:3e:56", "Public IP": "65.94.168.233", "Network": "NAC-CA-8486-Laval", "Serial number": "Q2HY-XGF3-V6ZU", "Usage": "44.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8487-1", "MAC address": "98:18:88:75:88:33", "Public IP": "68.179.85.157", "Network": "NAC-CA-8487-Laval", "Serial number": "Q2HY-KLXN-P3RV", "Usage": "28.52 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8488-1", "MAC address": "98:18:88:75:85:23", "Public IP": "70.27.250.28", "Network": "NAC-CA-8488-Laval", "Serial number": "Q2HY-KF7A-SUDZ", "Usage": "65.35 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8489-1", "MAC address": "ac:17:c8:c1:b1:1d", "Public IP": "96.51.33.125", "Network": "NAC-CA-8489-Lethbridge", "Serial number": "Q2HY-ZQXS-9963", "Usage": "10.44 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8490-1", "MAC address": "ac:17:c8:5d:7c:f6", "Public IP": "70.54.160.21", "Network": "NAC-CA-8490-Levis", "Serial number": "Q2HY-4EC8-EKHF", "Usage": "67.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8491-1", "MAC address": "ac:17:c8:c1:ae:d8", "Public IP": "184.145.79.61", "Network": "NAC-CA-8491-Lindsay", "Serial number": "Q2HY-Z99Z-YT5D", "Usage": "116.55 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8492-1", "MAC address": "ac:17:c8:5d:d1:3c", "Public IP": "99.242.112.230", "Network": "NAC-CA-8492-London", "Serial number": "Q2HY-2E2C-8E8Q", "Usage": "33.12 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8493-1", "MAC address": "98:18:88:c9:36:7a", "Public IP": "99.242.97.8", "Network": "NAC-CA-8493-London", "Serial number": "Q2HY-QV22-TAM8", "Usage": "23.49 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8494-1", "MAC address": "cc:9c:3e:43:05:48", "Public IP": "70.30.65.199", "Network": "NAC-CA-8494-London", "Serial number": "Q2HY-XJ7Y-94GV", "Usage": "16.55 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8495-1", "MAC address": "ac:17:c8:c1:a3:7f", "Public IP": "99.243.59.198", "Network": "NAC-CA-8495-London", "Serial number": "Q2HY-WKFB-H6ML", "Usage": "20.31 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8496-1", "MAC address": "98:18:88:c9:13:8f", "Public IP": "99.242.3.249", "Network": "NAC-CA-8496-London", "Serial number": "Q2HY-KEXN-747J", "Usage": "66.36 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8497-1", "MAC address": "98:18:88:75:6e:08", "Public IP": "70.55.153.252", "Network": "NAC-CA-8497-Longueuil", "Serial number": "Q2HY-HY5H-WM63", "Usage": "30.95 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8498-1", "MAC address": "ac:17:c8:5d:d8:c8", "Public IP": "67.68.131.216", "Network": "NAC-CA-8498-Longueuil", "Serial number": "Q2HY-499F-AYD8", "Usage": "15.39 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8499-1", "MAC address": "98:18:88:75:7c:32", "Public IP": "70.83.72.44", "Network": "NAC-CA-8499-Longueuil", "Serial number": "Q2HY-JUEJ-YABQ", "Usage": "38.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8500-1", "MAC address": "ac:17:c8:c1:a1:9c", "Public IP": "99.247.188.27", "Network": "NAC-CA-8500-Maple", "Serial number": "Q2HY-W7FD-DH6E", "Usage": "12.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8501-1", "MAC address": "ac:17:c8:c1:a9:fa", "Public IP": "70.69.250.30", "Network": "NAC-CA-8501-Maple Ridge", "Serial number": "Q2HY-Y2VF-DJZ4", "Usage": "115.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8502-1", "MAC address": "ac:17:c8:c1:a5:c4", "Public IP": "65.95.192.170", "Network": "NAC-CA-8502-Markham", "Serial number": "Q2HY-X425-CTTW", "Usage": "13.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8503-1", "MAC address": "98:18:88:75:7b:98", "Public IP": "76.65.163.99", "Network": "NAC-CA-8503-Mascouche", "Serial number": "Q2HY-JTLK-QU93", "Usage": "8.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8504-1", "MAC address": "98:18:88:75:57:f7", "Public IP": "76.68.193.16", "Network": "NAC-CA-8504-Mcmasterville", "Serial number": "Q2HY-GJUU-T2X7", "Usage": "19.96 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8505-1", "MAC address": "98:18:88:75:5d:6f", "Public IP": "67.71.172.242", "Network": "NAC-CA-8505-Medicine Hat", "Serial number": "Q2HY-GW63-ZDMG", "Usage": "114.04 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8506-1", "MAC address": "98:18:88:74:ba:2a", "Public IP": "72.38.26.81", "Network": "NAC-CA-8506-Milton", "Serial number": "Q2HY-6F9D-H5NN", "Usage": "13.91 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8508-1", "MAC address": "ac:17:c8:c1:b0:f3", "Public IP": "70.29.84.159", "Network": "NAC-CA-8508-Mississauga", "Serial number": "Q2HY-ZPYN-53X5", "Usage": "15.31 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8509-1", "MAC address": "98:18:88:c9:49:27", "Public IP": "69.158.246.200", "Network": "NAC-CA-8509-Mississauga", "Serial number": "Q2HY-TGDS-YGGL", "Usage": "32.70 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8510-1", "MAC address": "98:18:88:74:80:a9", "Public IP": "70.30.19.229", "Network": "NAC-CA-8510-Mississauga", "Serial number": "Q2HY-2LQY-WSLH", "Usage": "120.43 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8511-1", "MAC address": "ac:17:c8:5d:f1:3a", "Public IP": "67.70.81.75", "Network": "NAC-CA-8511-Mississauga", "Serial number": "Q2HY-SMT2-EBVD", "Usage": "11.89 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8512-1", "MAC address": "ac:17:c8:c1:ae:06", "Public IP": "70.26.161.92", "Network": "NAC-CA-8512-Mississauga", "Serial number": "Q2HY-Z388-FY3A", "Usage": "12.58 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8513-1", "MAC address": "ac:17:c8:c1:ad:d5", "Public IP": "174.116.140.231", "Network": "NAC-CA-8513-Moncton", "Serial number": "Q2HY-YZYF-S47Z", "Usage": "125.34 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8514-2", "MAC address": "98:18:88:75:61:7b", "Public IP": "173.178.222.40", "Network": "NAC-CA-8514-Montreal", "Serial number": "Q2HY-H73Z-46H8", "Usage": "18.59 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8515-1", "MAC address": "98:18:88:75:70:77", "Public IP": "65.94.235.16", "Network": "NAC-CA-8515-Rue Lajeunesse", "Serial number": "Q2HY-J4M2-9TJG", "Usage": "30.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8516-1", "MAC address": "98:18:88:75:9b:49", "Public IP": "23.233.191.222", "Network": "NAC-CA-8516-Montreal", "Serial number": "Q2HY-LWPC-KSC3", "Usage": "12.73 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8519-1", "MAC address": "98:18:88:75:5b:7e", "Public IP": "70.55.130.247", "Network": "NAC-CA-8519-Montreal", "Serial number": "Q2HY-GRXW-YNN2", "Usage": "20.65 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8520-1", "MAC address": "ac:17:c8:5d:f4:a5", "Public IP": "174.89.238.138", "Network": "NAC-CA-8520-Montreal", "Serial number": "Q2HY-TB5G-TG2F", "Usage": "117.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8521-1", "MAC address": "98:18:88:75:5e:d4", "Public IP": "67.69.76.27", "Network": "NAC-CA-8521-Montreal", "Serial number": "Q2HY-GZE7-DXNJ", "Usage": "12.43 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8523-1", "MAC address": "98:18:88:75:6f:04", "Public IP": "70.27.229.96", "Network": "NAC-CA-8523-Montreal", "Serial number": "Q2HY-J22C-FK4Q", "Usage": "146.07 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8524-1", "MAC address": "98:18:88:75:59:a2", "Public IP": "64.228.7.27", "Network": "NAC-CA-8524-Boul Maurice-Duplessis", "Serial number": "Q2HY-GNB8-Y7BS", "Usage": "40.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8525-1", "MAC address": "98:18:88:75:59:71", "Public IP": "70.48.226.6", "Network": "NAC-CA-8525-Rue Ontario", "Serial number": "Q2HY-GN26-WWAP", "Usage": "12.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8526-1", "MAC address": "ac:17:c8:5d:d5:48", "Public IP": "69.156.73.102", "Network": "NAC-CA-8526-Montreal", "Serial number": "Q2HY-3DDB-ZJWJ", "Usage": "40.44 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8527-1", "MAC address": "98:18:88:c9:12:af", "Public IP": "70.80.86.4", "Network": "NAC-CA-8527-Montreal-Nord", "Serial number": "Q2HY-KA9B-DAQB", "Usage": "26.63 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8528-1", "MAC address": "98:18:88:75:7e:0e", "Public IP": "50.70.44.58", "Network": "NAC-CA-8528-Moose Jaw", "Serial number": "Q2HY-JYUS-7MVW", "Usage": "11.51 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8529-1", "MAC address": "ac:17:c8:5d:98:8d", "Public IP": "142.176.32.83", "Network": "NAC-CA-8529-Mount Pearl", "Serial number": "Q2HY-ADWZ-7J5H", "Usage": "137.79 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8530-1", "MAC address": "98:18:88:c9:0a:f2", "Public IP": "24.68.68.201", "Network": "NAC-CA-8530-Nanaimo", "Serial number": "Q2HY-J4TE-T8XL", "Usage": "15.15 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8531-1", "MAC address": "98:18:88:c9:6c:3c", "Public IP": "99.253.247.162", "Network": "NAC-CA-8531-Newmarket", "Serial number": "Q2HY-YQU7-33TZ", "Usage": "25.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8532-1", "MAC address": "98:18:88:75:07:23", "Public IP": "69.159.187.102", "Network": "NAC-CA-8532-Newmarket", "Serial number": "Q2HY-BDA7-6PF7", "Usage": "26.83 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8534-1", "MAC address": "ac:17:c8:5d:fa:c5", "Public IP": "65.95.160.119", "Network": "NAC-CA-8534-Niagara Falls", "Serial number": "Q2HY-UL6D-8LNX", "Usage": "28.34 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8535-1", "MAC address": "98:18:88:c9:07:72", "Public IP": "50.68.249.123", "Network": "NAC-CA-8535-North Vancouver", "Serial number": "Q2HY-HM6R-FSBJ", "Usage": "25.65 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8537-1", "MAC address": "98:18:88:c9:48:8d", "Public IP": "70.30.140.213", "Network": "NAC-CA-8537-North York", "Serial number": "Q2HY-TD4K-ABPM", "Usage": "9.95 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8538-1", "MAC address": "ac:17:c8:c1:a3:da", "Public IP": "174.94.149.57", "Network": "NAC-CA-8538-Oakville", "Serial number": "Q2HY-WNXJ-78TR", "Usage": "18.31 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8540-1", "MAC address": "98:18:88:c9:4f:40", "Public IP": "65.95.240.24", "Network": "NAC-CA-8540-Oshawa", "Serial number": "Q2HY-UDGZ-4NJJ", "Usage": "29.27 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8541-1", "MAC address": "ac:17:c8:5d:77:62", "Public IP": "142.180.13.39", "Network": "NAC-CA-8541-Ottawa", "Serial number": "Q2HY-3946-MRBX", "Usage": "50.48 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8542-2", "MAC address": "ac:17:c8:5d:75:c5", "Public IP": "64.229.113.12", "Network": "NAC-CA-8542-Ottawa", "Serial number": "Q2HY-2X3X-HK3B", "Usage": "16.11 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8543-1", "MAC address": "98:18:88:44:be:b5", "Public IP": "174.115.52.74", "Network": "NAC-CA-8543-Ottawa", "Serial number": "Q2HY-8X5Q-BMRP", "Usage": "15.15 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8544-1", "MAC address": "98:18:88:75:7b:b4", "Public IP": "67.70.17.183", "Network": "NAC-CA-8544-Ottawa", "Serial number": "Q2HY-JTQ3-VXN3", "Usage": "135.74 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8545-1", "MAC address": "98:18:88:74:a3:8d", "Public IP": "64.229.114.77", "Network": "NAC-CA-8545-Ottawa", "Serial number": "Q2HY-4UV7-9TL4", "Usage": "17.62 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8546-1", "MAC address": "ac:17:c8:c1:a2:f3", "Public IP": "99.249.162.188", "Network": "NAC-CA-8546-Owen Sound", "Serial number": "Q2HY-WG2H-BJFG", "Usage": "16.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8547-1", "MAC address": "ac:17:c8:5d:da:ce", "Public IP": "24.146.42.75", "Network": "NAC-CA-8547-Pembroke", "Serial number": "Q2HY-4NVJ-CLAK", "Usage": "23.94 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8548-1", "MAC address": "ac:17:c8:5d:fe:76", "Public IP": "184.144.21.203", "Network": "NAC-CA-8548-Peterborough", "Serial number": "Q2HY-VC2T-ZT5N", "Usage": "115.02 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8549-1", "MAC address": "ac:17:c8:5d:fd:81", "Public IP": "99.231.124.117", "Network": "NAC-CA-8549-Pickering", "Serial number": "Q2HY-V5PM-PTMZ", "Usage": "115.12 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8550-1", "MAC address": "98:18:88:75:5d:68", "Public IP": "70.24.205.175", "Network": "NAC-CA-8550-Rue Sherbrooke", "Serial number": "Q2HY-GW57-HDDY", "Usage": "13.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8552-1", "MAC address": "98:18:88:75:81:b1", "Public IP": "174.2.37.57", "Network": "NAC-CA-8552-Prince Albert", "Serial number": "Q2HY-K8QC-6JJP", "Usage": "113.29 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8553-1", "MAC address": "ac:17:c8:5d:f6:6c", "Public IP": "50.69.244.169", "Network": "NAC-CA-8553-Prince George", "Serial number": "Q2HY-TQ7X-GBXE", "Usage": "13.27 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8554-1", "MAC address": "ac:17:c8:5d:f5:38", "Public IP": "174.92.196.171", "Network": "NAC-CA-8554-Quebec", "Serial number": "Q2HY-TEUC-EHUQ", "Usage": "35.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8555-1", "MAC address": "98:18:88:75:5d:99", "Public IP": "174.92.198.140", "Network": "NAC-CA-8555-Quebec", "Serial number": "Q2HY-GWH6-D9ZL", "Usage": "14.82 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8557-1", "MAC address": "ac:17:c8:5d:f5:fc", "Public IP": "76.65.90.58", "Network": "NAC-CA-8557-Quebec", "Serial number": "Q2HY-TMKV-V3JT", "Usage": "21.03 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8558-1", "MAC address": "98:18:88:75:5a:35", "Public IP": "70.50.157.214", "Network": "NAC-CA-8558-Quebec", "Serial number": "Q2HY-GPGQ-CH8G", "Usage": "13.44 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8560-1", "MAC address": "ac:17:c8:5d:db:92", "Public IP": "24.66.4.190", "Network": "NAC-CA-8560-Red Deer", "Serial number": "Q2HY-N4TZ-3MB2", "Usage": "10.26 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8561-1", "MAC address": "98:18:88:75:6e:2b", "Public IP": "71.17.101.245", "Network": "NAC-CA-8561-Regina", "Serial number": "Q2HY-HYCV-DN4P", "Usage": "13.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8562-2", "MAC address": "bc:db:09:bd:c6:a8", "Public IP": "206.163.254.147", "Network": "NAC-CA-8562-Regina", "Serial number": "Q2HY-CTNC-2L8U", "Usage": "14.70 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8564-1", "MAC address": "ac:17:c8:c1:a1:bf", "Public IP": "76.64.234.143", "Network": "NAC-CA-8564-Repentigny", "Serial number": "Q2HY-W8T9-HL9M", "Usage": "129.21 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8565-1", "MAC address": "ac:17:c8:c1:a9:f3", "Public IP": "96.49.248.201", "Network": "NAC-CA-8565-Richmond", "Serial number": "Q2HY-Y2E6-QRWL", "Usage": "26.67 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8566-1", "MAC address": "ac:17:c8:5d:fc:d9", "Public IP": "70.51.68.179", "Network": "NAC-CA-8566-Richmond Hill", "Serial number": "Q2HY-V2CJ-A82F", "Usage": "23.56 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8568-1", "MAC address": "ac:17:c8:5d:7d:20", "Public IP": "24.50.75.46", "Network": "NAC-CA-8568-Rimouski", "Serial number": "Q2HY-4F3V-SCX2", "Usage": "35.30 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8569-1", "MAC address": "ac:17:c8:5d:d6:59", "Public IP": "142.177.110.177", "Network": "NAC-CA-8569-Saint John", "Serial number": "Q2HY-3M3Q-N2A4", "Usage": "121.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8571-1", "MAC address": "ac:17:c8:c1:a1:b1", "Public IP": "174.95.233.186", "Network": "NAC-CA-8571-Saint-Eustache", "Serial number": "Q2HY-W859-6GEQ", "Usage": "48.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8572-1", "MAC address": "98:18:88:c9:1b:53", "Public IP": "70.53.135.184", "Network": "NAC-CA-8572-Saint-Hyacinthe", "Serial number": "Q2HY-LLMX-SWUT", "Usage": "11.87 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8573-1", "MAC address": "98:18:88:c9:4a:cb", "Public IP": "74.58.238.57", "Network": "NAC-CA-8573-Saint Laurent", "Serial number": "Q2HY-TRBE-GJZH", "Usage": "19.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8574-1", "MAC address": "ac:17:c8:5d:f0:61", "Public IP": "67.68.151.185", "Network": "NAC-CA-8574-Saint Leonard", "Serial number": "Q2HY-SGGE-UL7N", "Usage": "21.24 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8575-1", "MAC address": "ac:17:c8:c1:a9:2f", "Public IP": "67.69.76.178", "Network": "NAC-CA-8575-Saint-Leonard", "Serial number": "Q2HY-XUHF-FNJD", "Usage": "145.60 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8576-1", "MAC address": "98:18:88:75:60:7f", "Public IP": "67.69.76.93", "Network": "NAC-CA-8576-Salaberry-De-Valleyfield", "Serial number": "Q2HY-H5AP-T2JQ", "Usage": "37.25 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8577-1", "MAC address": "ac:17:c8:5d:86:34", "Public IP": "2001:1970:4000:b8:6959:e7d3:ffca:9f0f", "Network": "NAC-CA-8577-Sarnia", "Serial number": "Q2HY-6FY7-9SYQ", "Usage": "11.52 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8578-1", "MAC address": "ac:17:c8:5d:e5:40", "Public IP": "70.64.68.111", "Network": "NAC-CA-8578-Saskatoon", "Serial number": "Q2HY-Q76F-9SAT", "Usage": "13.15 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8579-1", "MAC address": "98:18:88:75:5b:93", "Public IP": "70.64.61.179", "Network": "NAC-CA-8579-Saskatoon", "Serial number": "Q2HY-GS9R-CWME", "Usage": "10.41 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8580-1", "MAC address": "98:18:88:75:8a:fd", "Public IP": "174.2.14.141", "Network": "NAC-CA-8580-Saskatoon", "Serial number": "Q2HY-KSEB-SJYQ", "Usage": "16.66 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8581-1", "MAC address": "ac:17:c8:5d:75:16", "Public IP": "70.76.254.111", "Network": "NAC-CA-8581-Sault Ste.Marie", "Serial number": "Q2HY-2RRR-G9QB", "Usage": "13.91 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8582-1", "MAC address": "ac:17:c8:5d:f9:21", "Public IP": "64.231.28.28", "Network": "NAC-CA-8582-Scarborough", "Serial number": "Q2HY-U98X-825M", "Usage": "16.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8583-1", "MAC address": "98:18:88:c9:49:89", "Public IP": "69.158.246.59", "Network": "NAC-CA-8583-Scarborough", "Serial number": "Q2HY-TKCV-KQTV", "Usage": "20.97 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8584-1", "MAC address": "98:18:88:75:6c:3a", "Public IP": "76.71.234.18", "Network": "NAC-CA-8584-Shawinigan", "Serial number": "Q2HY-HUKG-THF3", "Usage": "13.58 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8585-1", "MAC address": "ac:17:c8:5d:d9:07", "Public IP": "70.54.157.165", "Network": "NAC-CA-8585-Sherbrooke", "Serial number": "Q2HY-4AVV-A7AZ", "Usage": "9.83 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8586-1", "MAC address": "ac:17:c8:c1:ac:0e", "Public IP": "184.151.230.16", "Network": "NAC-CA-8586-Sherwood Park", "Serial number": "Q2HY-YMHE-9ET5", "Usage": "27.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8587-1", "MAC address": "ac:17:c8:5d:fe:df", "Public IP": "76.66.100.110", "Network": "NAC-CA-8587-St Catharines", "Serial number": "Q2HY-VESP-DWMY", "Usage": "15.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8588-1", "MAC address": "ac:17:c8:5d:db:ae", "Public IP": "173.32.116.88", "Network": "NAC-CA-8588-St Thomas", "Serial number": "Q2HY-N5L8-YCEL", "Usage": "8.45 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8589-1", "MAC address": "ac:17:c8:c1:b1:da", "Public IP": "64.66.25.220", "Network": "NAC-CA-8589-St. Albert", "Serial number": "Q2HY-ZVFN-7QXZ", "Usage": "14.80 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8590-1", "MAC address": "98:18:88:c9:6f:1b", "Public IP": "142.177.57.38", "Network": "NAC-CA-8590-St. Johns", "Serial number": "Q2HY-Z6AZ-K998", "Usage": "21.16 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8591-1", "MAC address": "98:18:88:c9:58:00", "Public IP": "70.27.244.207", "Network": "NAC-CA-8591-Sainte Foy", "Serial number": "Q2HY-VNWV-MJ6U", "Usage": "70.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8592-1", "MAC address": "98:18:88:75:78:7a", "Public IP": "74.15.121.145", "Network": "NAC-CA-8592-Sainte-Catherine", "Serial number": "Q2HY-JME5-Z3G9", "Usage": "16.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8593-1", "MAC address": "ac:17:c8:5d:de:4e", "Public IP": "70.52.98.27", "Network": "NAC-CA-8593-Sainte Foy", "Serial number": "Q2HY-NREN-LBKT", "Usage": "27.74 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8594-1", "MAC address": "ac:17:c8:c1:a7:4c", "Public IP": "65.92.133.131", "Network": "NAC-CA-8594-Sainte Therese", "Serial number": "Q2HY-XEB8-5E7R", "Usage": "40.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8595-1", "MAC address": "ac:17:c8:c1:af:87", "Public IP": "70.82.231.38", "Network": "NAC-CA-8595-St-Hubert", "Serial number": "Q2HY-ZE7N-KNP9", "Usage": "81.11 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8597-1", "MAC address": "ac:17:c8:5d:f9:52", "Public IP": "70.29.161.104", "Network": "NAC-CA-8597-St-Jean-Sur-Richelie", "Serial number": "Q2HY-UA9M-3E9Q", "Usage": "10.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8598-1", "MAC address": "cc:9c:3e:43:06:fa", "Public IP": "67.69.76.147", "Network": "NAC-CA-8598-St-Jerome", "Serial number": "Q2HY-XLJE-6Q94", "Usage": "126.73 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8599-1", "MAC address": "ac:17:c8:5d:f1:a3", "Public IP": "76.71.144.91", "Network": "NAC-CA-8599-Levis", "Serial number": "Q2HY-SPKN-MAMH", "Usage": "14.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8600-2", "MAC address": "98:18:88:75:85:bd", "Public IP": "99.254.211.62", "Network": "NAC-CA-8600-Stratford", "Serial number": "Q2HY-KGD8-5HDN", "Usage": "10.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8601-1", "MAC address": "ac:17:c8:5d:e1:ce", "Public IP": "208.103.246.86", "Network": "NAC-CA-8601-Sudbury", "Serial number": "Q2HY-PGZG-YSUE", "Usage": "8.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8602-1", "MAC address": "ac:17:c8:5d:f0:1b", "Public IP": "24.86.145.221", "Network": "NAC-CA-8602-Surrey", "Serial number": "Q2HY-SDP3-33CV", "Usage": "30.02 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8603-1", "MAC address": "98:18:88:c9:45:d1", "Public IP": "70.70.248.28", "Network": "NAC-CA-8603-Surrey", "Serial number": "Q2HY-SYVC-DB2D", "Usage": "27.89 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8604-1", "MAC address": "ac:17:c8:5d:71:ea", "Public IP": "142.176.56.79", "Network": "NAC-CA-8604-Sydney", "Serial number": "Q2HY-24UT-2JJX", "Usage": "115.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8605-1", "MAC address": "ac:17:c8:5d:f7:68", "Public IP": "67.71.53.222", "Network": "NAC-CA-8605-Thornhill", "Serial number": "Q2HY-TV98-4X9F", "Usage": "121.29 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8606-1", "MAC address": "98:18:88:75:61:51", "Public IP": "50.70.222.52", "Network": "NAC-CA-8606-Thunder Bay", "Serial number": "Q2HY-H6LY-S4PZ", "Usage": "8.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8607-1", "MAC address": "ac:17:c8:5d:d2:62", "Public IP": "50.72.198.192", "Network": "NAC-CA-8607-Thunder Bay", "Serial number": "Q2HY-2PFU-NMZ2", "Usage": "10.58 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8609-1", "MAC address": "98:18:88:c9:2d:66", "Public IP": "65.93.96.187", "Network": "NAC-CA-8609-Toronto", "Serial number": "Q2HY-PH9L-ZB7A", "Usage": "30.39 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8610-1", "MAC address": "98:18:88:74:83:1f", "Public IP": "70.53.8.108", "Network": "NAC-CA-8610-Toronto", "Serial number": "Q2HY-2RSV-S6GJ", "Usage": "36.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8611-1", "MAC address": "98:18:88:c9:0a:3c", "Public IP": "184.151.190.142", "Network": "NAC-CA-8611-Toronto", "Serial number": "Q2HY-J25J-BK6Y", "Usage": "84.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8613-1", "MAC address": "98:18:88:c9:0a:b3", "Public IP": "65.93.137.60", "Network": "NAC-CA-8613-Toronto", "Serial number": "Q2HY-J4AF-QCUA", "Usage": "12.15 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8614-1", "MAC address": "98:18:88:75:07:d2", "Public IP": "69.159.73.124", "Network": "NAC-CA-8614-Toronto", "Serial number": "Q2HY-BFDB-NHKP", "Usage": "21.36 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8615-1", "MAC address": "ac:17:c8:c1:a8:6b", "Public IP": "142.189.49.138", "Network": "NAC-CA-8615-Toronto", "Serial number": "Q2HY-XNZD-LXHP", "Usage": "10.98 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8618-1", "MAC address": "ac:17:c8:5d:74:c9", "Public IP": "74.12.219.151", "Network": "NAC-CA-8618-Trois-Rivieres", "Serial number": "Q2HY-2PE8-6PW7", "Usage": "12.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8619-1", "MAC address": "98:18:88:75:5a:27", "Public IP": "206.172.233.245", "Network": "NAC-CA-8619-Trois-Rivieres", "Serial number": "Q2HY-GPEP-GVD9", "Usage": "13.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8621-1", "MAC address": "98:18:88:c9:6e:96", "Public IP": "24.86.81.71", "Network": "NAC-CA-8621-Vancouver", "Serial number": "Q2HY-Z3ZC-87P3", "Usage": "20.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8622-1", "MAC address": "ac:17:c8:fc:f3:72", "Public IP": "50.68.1.124", "Network": "NAC-CA-8622-Vancouver", "Serial number": "Q2HY-5KC3-UEDZ", "Usage": "20.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8623-1", "MAC address": "ac:17:c8:5d:db:3e", "Public IP": "67.71.186.139", "Network": "NAC-CA-8623-Vancouver", "Serial number": "Q2HY-4TDZ-PFF2", "Usage": "122.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8624-1", "MAC address": "98:18:88:75:8a:08", "Public IP": "184.144.193.181", "Network": "NAC-CA-8624-Vaudreuil-Dorion", "Serial number": "Q2HY-KQ9V-2S72", "Usage": "149.27 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8625-1", "MAC address": "98:18:88:75:60:2b", "Public IP": "24.70.156.74", "Network": "NAC-CA-8625-Vernon", "Serial number": "Q2HY-H4MU-CMNF", "Usage": "137.12 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8626-1", "MAC address": "ac:17:c8:5d:e1:ff", "Public IP": "24.68.24.250", "Network": "NAC-CA-8626-Victoria", "Serial number": "Q2HY-PJGP-4D73", "Usage": "27.90 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8628-1", "MAC address": "ac:17:c8:5d:76:f9", "Public IP": "173.176.20.131", "Network": "NAC-CA-8628-Victoriaville", "Serial number": "Q2HY-36YH-TPEG", "Usage": "22.23 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8629-1", "MAC address": "ac:17:c8:5d:ff:9c", "Public IP": "65.93.22.87", "Network": "NAC-CA-8629-Waterloo", "Serial number": "Q2HY-VKY5-6RH3", "Usage": "15.30 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8630-1", "MAC address": "ac:17:c8:c1:aa:94", "Public IP": "65.93.81.26", "Network": "NAC-CA-8630-Waterloo", "Serial number": "Q2HY-Y8QA-MPQX", "Usage": "20.80 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8631-1", "MAC address": "ac:17:c8:5d:f8:bf", "Public IP": "70.29.52.227", "Network": "NAC-CA-8631-Welland", "Serial number": "Q2HY-U5RF-FEGL", "Usage": "20.74 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8633-1", "MAC address": "ac:17:c8:5d:f7:61", "Public IP": "64.229.240.208", "Network": "NAC-CA-8633-Whitby", "Serial number": "Q2HY-TV79-EMLD", "Usage": "21.41 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8634-1", "MAC address": "98:18:88:c9:09:b0", "Public IP": "24.146.60.33", "Network": "NAC-CA-8634-Windsor", "Serial number": "Q2HY-HXX5-9NLW", "Usage": "61.58 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8635-1", "MAC address": "98:18:88:c9:43:46", "Public IP": "174.95.203.187", "Network": "NAC-CA-8635-Windsor", "Serial number": "Q2HY-SMGU-RQXQ", "Usage": "14.96 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8636-1", "MAC address": "98:18:88:c9:49:ba", "Public IP": "174.92.45.144", "Network": "NAC-CA-8636-Windsor", "Serial number": "Q2HY-TLFY-X7Q8", "Usage": "30.98 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8637-1", "MAC address": "ac:17:c8:5d:fb:e4", "Public IP": "50.72.177.247", "Network": "NAC-CA-8637-Winnipeg", "Serial number": "Q2HY-UTXL-MTQ6", "Usage": "10.79 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8638-1", "MAC address": "ac:17:c8:5d:fc:0e", "Public IP": "206.45.34.97", "Network": "NAC-CA-8638-Winnipeg", "Serial number": "Q2HY-UVCT-7LZN", "Usage": "16.35 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8639-1", "MAC address": "ac:17:c8:c1:a8:db", "Public IP": "50.71.13.16", "Network": "NAC-CA-8639-Winnipeg", "Serial number": "Q2HY-XS9F-UGF9", "Usage": "11.39 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8640-1", "MAC address": "98:18:88:75:80:8b", "Public IP": "50.72.139.9", "Network": "NAC-CA-8640-Winnipeg", "Serial number": "Q2HY-K6DE-49S3", "Usage": "11.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8641-1", "MAC address": "98:18:88:75:76:6d", "Public IP": "50.71.228.122", "Network": "NAC-CA-8641-Winnipeg", "Serial number": "Q2HY-JGWB-PMLJ", "Usage": "10.91 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8642-1", "MAC address": "ac:17:c8:c1:af:09", "Public IP": "24.77.48.23", "Network": "NAC-CA-8642-Winnipeg", "Serial number": "Q2HY-ZARN-KLM4", "Usage": "17.71 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8643-1", "MAC address": "98:18:88:75:77:ee", "Public IP": "24.77.18.46", "Network": "NAC-CA-8643-Winnipeg", "Serial number": "Q2HY-JL9Z-HD39", "Usage": "11.79 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8644-1", "MAC address": "ac:17:c8:5d:fb:c8", "Public IP": "206.45.178.10", "Network": "NAC-CA-8644-Winnipeg", "Serial number": "Q2HY-USQ3-ZMJC", "Usage": "26.12 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8645-1", "MAC address": "98:18:88:75:78:03", "Public IP": "24.78.41.207", "Network": "NAC-CA-8645-Winnipeg", "Serial number": "Q2HY-JLE2-3SWU", "Usage": "13.07 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8646-1", "MAC address": "98:18:88:c9:4e:bb", "Public IP": "204.112.197.42", "Network": "NAC-CA-8646-Winnipeg", "Serial number": "Q2HY-UA4G-K4JK", "Usage": "24.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8647-1", "MAC address": "98:18:88:76:50:7e", "Public IP": "65.95.53.86", "Network": "NAC-CA-8647-Woodbridge", "Serial number": "Q2HY-YNAB-5AT9", "Usage": "31.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8649-1", "MAC address": "98:18:88:74:84:fb", "Public IP": "99.255.224.160", "Network": "NAC-CA-8649-Woodstock", "Serial number": "Q2HY-2VR3-5MK5", "Usage": "29.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8650-1", "MAC address": "98:18:88:c9:6b:a2", "Public IP": "50.67.192.66", "Network": "NAC-CA-8650-Abbotsford", "Serial number": "Q2HY-YMLT-S669", "Usage": "27.63 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8651-1", "MAC address": "ac:17:c8:5d:ff:bf", "Public IP": "65.93.200.103", "Network": "NAC-CA-8651-Ajax", "Serial number": "Q2HY-VLVF-BWFK", "Usage": "29.19 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8652-1", "MAC address": "ac:17:c8:5d:db:61", "Public IP": "70.49.7.240", "Network": "NAC-CA-8652-Barrie", "Serial number": "Q2HY-4UVN-SJBS", "Usage": "41.16 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8653-1", "MAC address": "ac:17:c8:5d:78:7a", "Public IP": "2001:1970:4000:b8:24b6:7101:9387:2d1f", "Network": "NAC-CA-8653-Sarnia", "Serial number": "Q2HY-3FZ9-3AEM", "Usage": "22.00 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8654-1", "MAC address": "98:18:88:75:62:15", "Public IP": "184.151.230.163", "Network": "NAC-CA-8654-Victoria", "Serial number": "Q2HY-H7ZC-QTFA", "Usage": "14.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8657-1", "MAC address": "ac:17:c8:c1:a9:3d", "Public IP": "174.1.108.5", "Network": "NAC-CA-8657-Port Kells", "Serial number": "Q2HY-XUVJ-HKW2", "Usage": "16.48 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8659-1", "MAC address": "98:18:88:76:32:c5", "Public IP": "174.91.158.112", "Network": "NAC-CA-8659-Vaughan", "Serial number": "Q2HY-WSD4-NCQ7", "Usage": "14.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8661-1", "MAC address": "98:18:88:75:59:b0", "Public IP": "64.66.23.219", "Network": "NAC-CA-8661-Coquitlam", "Serial number": "Q2HY-GNEA-4VKG", "Usage": "19.21 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8661-2", "MAC address": "ac:17:c8:5d:db:7d", "Public IP": "24.129.255.240", "Network": "NAC-CA-8661-Coquitlam", "Serial number": "Q2HY-N4EN-WWST", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R8665-1", "MAC address": "98:18:88:75:7e:70", "Public IP": "184.68.158.122", "Network": "NAC-CA-8665-Surrey", "Serial number": "Q2HY-JZYU-N3YU", "Usage": "23.23 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8666-1", "MAC address": "ac:17:c8:c1:a6:0a", "Public IP": "70.71.102.209", "Network": "NAC-CA-8666-Surrey", "Serial number": "Q2HY-X6NV-B493", "Usage": "39.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8667-1", "MAC address": "98:18:88:75:7c:a9", "Public IP": "24.146.36.197", "Network": "NAC-CA-8667-Burlington", "Serial number": "Q2HY-JVHL-P5JR", "Usage": "29.05 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8669-1", "MAC address": "98:18:88:75:59:e8", "Public IP": "142.114.131.27", "Network": "NAC-CA-8669-Woodbridge", "Serial number": "Q2HY-GNUC-9SVA", "Usage": "25.45 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8671-2", "MAC address": "98:18:88:75:6e:6a", "Public IP": "70.29.41.101", "Network": "NAC-CA-8671-Cambridge", "Serial number": "Q2HY-HYSN-KKNU", "Usage": "61.40 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8672-1", "MAC address": "98:18:88:75:7b:05", "Public IP": "76.68.198.150", "Network": "NAC-CA-8672-Sorel-Tracy", "Serial number": "Q2HY-JSH3-TZCU", "Usage": "47.61 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8673-1", "MAC address": "98:18:88:75:5d:06", "Public IP": "99.233.197.212", "Network": "NAC-CA-8673-Barrie", "Serial number": "Q2HY-GVDA-VT23", "Usage": "12.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8674-1", "MAC address": "98:18:88:75:82:7c", "Public IP": "209.145.123.99", "Network": "NAC-CA-8674-Terrace", "Serial number": "Q2HY-KANR-XZVS", "Usage": "12.12 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8678-1", "MAC address": "98:18:88:c9:56:ef", "Public IP": "174.95.101.248", "Network": "NAC-CA-8678-Barrhaven", "Serial number": "Q2HY-VJDN-LLWX", "Usage": "26.18 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8679-1", "MAC address": "98:18:88:76:50:b6", "Public IP": "99.236.153.25", "Network": "NAC-CA-8679-Orangeville", "Serial number": "Q2HY-YNL6-NM8Y", "Usage": "128.76 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8680-1", "MAC address": "98:18:88:c9:4c:4c", "Public IP": "70.31.24.158", "Network": "NAC-CA-8680-Aurora", "Serial number": "Q2HY-TYL9-D62M", "Usage": "26.97 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8681-1", "MAC address": "98:18:88:c9:57:cf", "Public IP": "76.68.156.2", "Network": "NAC-CA-8681-Magog", "Serial number": "Q2HY-VMYC-LTHB", "Usage": "28.80 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8683-1", "MAC address": "ac:17:c8:5d:da:d5", "Public IP": "64.229.242.144", "Network": "NAC-CA-8683-Ottawa", "Serial number": "Q2HY-4NWT-DNMR", "Usage": "12.23 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8684-1", "MAC address": "98:18:88:75:80:7d", "Public IP": "24.49.238.233", "Network": "NAC-CA-8684-St Georges", "Serial number": "Q2HY-K6CE-MG2S", "Usage": "21.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8687-1", "MAC address": "98:18:88:75:61:58", "Public IP": "76.65.136.205", "Network": "NAC-CA-8687-Quebec", "Serial number": "Q2HY-H6P4-C8ME", "Usage": "26.24 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8688-1", "MAC address": "98:18:88:c9:45:6f", "Public IP": "174.1.84.142", "Network": "NAC-CA-8688-Surrey", "Serial number": "Q2HY-SW9T-7YBC", "Usage": "113.80 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8800-1", "MAC address": "e0:cb:bc:44:b3:88", "Public IP": "74.213.72.222", "Network": "NAC-PR-8800-Aguadilla", "Serial number": "Q2KN-T45G-KGVA", "Usage": "12.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8802-1", "MAC address": "ac:17:c8:5d:f5:c4", "Public IP": "24.138.239.168", "Network": "NAC-PR-8802-Barceloneta", "Serial number": "Q2HY-TLF3-P3RR", "Usage": "9.15 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8806-1", "MAC address": "e0:cb:bc:44:eb:60", "Public IP": "24.139.117.42", "Network": "NAC-PR-8806-Bayamon", "Serial number": "Q2KN-XHSB-BURQ", "Usage": "9.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8807-1", "MAC address": "ac:17:c8:c1:a0:c3", "Public IP": "24.55.110.147", "Network": "NAC-PR-8807-Bayamon", "Serial number": "Q2HY-VZAW-PHEJ", "Usage": "9.92 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8808-1", "MAC address": "e0:cb:bc:44:d2:88", "Public IP": "172.58.249.98", "Network": "NAC-PR-8808-Cabo Rojo", "Serial number": "Q2KN-VKKV-SF2V", "Usage": "8.38 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8810-1", "MAC address": "0c:8d:db:63:be:b8", "Public IP": "24.50.248.114", "Network": "NAC-PR-8810-Caguas", "Serial number": "Q2KN-CUUF-8QBV", "Usage": "7.91 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8811-1", "MAC address": "0c:8d:db:62:af:b8", "Public IP": "70.45.156.145", "Network": "NAC-PR-8811-Caguas", "Serial number": "Q2KN-W8DB-3778", "Usage": "11.07 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8812-1", "MAC address": "0c:8d:db:63:64:60", "Public IP": "70.45.186.62", "Network": "NAC-PR-8812-Fajardo", "Serial number": "Q2KN-ZVQY-JYZU", "Usage": "9.16 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8813-1", "MAC address": "ac:17:c8:cd:95:80", "Public IP": "172.58.155.231", "Network": "NAC-PR-8813-Carolina", "Serial number": "Q2KN-3LZF-EZC4", "Usage": "7.82 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8814-1", "MAC address": "ac:17:c8:5d:f2:2f", "Public IP": "172.58.155.152", "Network": "NAC-PR-8814-Carolina", "Serial number": "Q2HY-SRW3-N63F", "Usage": "8.93 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8816-1", "MAC address": "e0:cb:bc:44:c5:28", "Public IP": "24.139.130.127", "Network": "NAC-PR-8816-Cayey", "Serial number": "Q2KN-UGXY-36DH", "Usage": "10.57 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8817-1", "MAC address": "2c:3f:0b:ad:e4:28", "Public IP": "24.41.187.248", "Network": "NAC-PR-8817-Ceiba", "Serial number": "Q2KN-FZKG-WVEF", "Usage": "8.70 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8819-1", "MAC address": "2c:3f:0b:ad:dd:a0", "Public IP": "24.41.137.19", "Network": "NAC-PR-8819-Dorado", "Serial number": "Q2KN-FJYN-GUG6", "Usage": "10.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8820-1", "MAC address": "98:18:88:74:a3:5c", "Public IP": "70.45.174.122", "Network": "NAC-PR-8820-Guaynabo", "Serial number": "Q2HY-4ULZ-M72C", "Usage": "10.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8821-1", "MAC address": "ac:17:c8:c1:a1:e2", "Public IP": "24.137.230.134", "Network": "NAC-PR-8821-Guaynabo", "Serial number": "Q2HY-W9PX-5PNA", "Usage": "9.56 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8822-1", "MAC address": "0c:8d:db:63:f9:b8", "Public IP": "172.58.155.89", "Network": "NAC-PR-8822-Hato Rey", "Serial number": "Q2KN-FYQH-KJ32", "Usage": "12.03 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8823-1", "MAC address": "e0:cb:bc:44:b7:40", "Public IP": "24.139.222.11", "Network": "NAC-PR-8823-Humacao", "Serial number": "Q2KN-TE43-CX5L", "Usage": "9.17 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8824-1", "MAC address": "e0:cb:bc:98:9c:f0", "Public IP": "206.248.91.74", "Network": "NAC-PR-8824-Isabela", "Serial number": "Q2KN-8AFA-BBTV", "Usage": "13.43 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8825-1", "MAC address": "98:18:88:75:82:75", "Public IP": "24.171.218.163", "Network": "NAC-PR-8825-Las Piedras", "Serial number": "Q2HY-KAK9-MUR3", "Usage": "106.49 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8826-1", "MAC address": "e0:cb:bc:44:b3:a8", "Public IP": "206.248.107.229", "Network": "NAC-PR-8826-Guayama", "Serial number": "Q2KN-T4KT-3YLF", "Usage": "12.21 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8829-1", "MAC address": "ac:17:c8:cd:95:48", "Public IP": "24.139.174.144", "Network": "NAC-PR-8829-Orocovis", "Serial number": "Q2KN-3L2C-UBQ2", "Usage": "6.66 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8830-1", "MAC address": "e0:cb:bc:bb:02:b8", "Public IP": "166.172.186.229", "Network": "NAC-PR-8830-Ponce", "Serial number": "Q2KN-CQB4-VPWU", "Usage": "118.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8833-1", "MAC address": "ac:17:c8:c1:af:8e", "Public IP": "74.213.80.220", "Network": "NAC-PR-8833-San German", "Serial number": "Q2HY-ZE8Z-42JR", "Usage": "6.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8834-1", "MAC address": "ac:17:c8:5d:f6:18", "Public IP": "24.48.196.92", "Network": "NAC-PR-8834-Guaynabo", "Serial number": "Q2HY-TNQB-QJ96", "Usage": "10.17 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8836-1", "MAC address": "0c:8d:db:63:0c:68", "Public IP": "206.248.103.84", "Network": "NAC-PR-8836-San Juan-Store", "Serial number": "Q2KN-5HEP-6F6Q", "Usage": "8.99 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8837-1", "MAC address": "e0:cb:bc:98:0b:f0", "Public IP": "24.42.26.186", "Network": "NAC-PR-8837-Rio Piedras", "Serial number": "Q2KN-ZYH5-ETTT", "Usage": "8.59 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8838-1", "MAC address": "e0:cb:bc:98:ab:58", "Public IP": "24.50.229.213", "Network": "NAC-PR-8838-San Sebastian", "Serial number": "Q2KN-8WEQ-LM7H", "Usage": "9.41 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8841-1", "MAC address": "ac:17:c8:c1:a1:80", "Public IP": "70.45.237.168", "Network": "NAC-PR-8841-Trujillo Alto", "Serial number": "Q2HY-W6TE-JZEJ", "Usage": "7.33 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8842-1", "MAC address": "e0:cb:bc:44:f3:78", "Public IP": "24.41.181.183", "Network": "NAC-PR-8842-Vega Baja", "Serial number": "Q2KN-Y6GN-T8WU", "Usage": "16.44 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8846-1", "MAC address": "68:3a:1e:7d:4c:a8", "Public IP": "24.42.23.73", "Network": "NAC-PR-8846-Arecibo", "Serial number": "Q2KN-T7N8-4LCA", "Usage": "53.49 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9234-1", "MAC address": "e0:cb:bc:44:ad:78", "Public IP": "24.137.244.87", "Network": "NAC-PR-9234-Bayamon", "Serial number": "Q2KN-SNE4-HXS4", "Usage": "7.54 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9235-1", "MAC address": "e0:cb:bc:44:eb:80", "Public IP": "24.137.243.27", "Network": "NAC-PR-9235-San Juan", "Serial number": "Q2KN-XJ2Y-4DPU", "Usage": "18.13 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9236-1", "MAC address": "bc:db:09:bd:82:ed", "Public IP": "24.48.246.252", "Network": "NAC-PR-9236-Ponce", "Serial number": "Q2HY-9V9W-T25A", "Usage": "11.49 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9237-1", "MAC address": "e0:cb:bc:44:a5:e8", "Public IP": "24.50.204.105", "Network": "NAC-PR-9237-Caguas", "Serial number": "Q2KN-S433-UKS6", "Usage": "12.37 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R0000-1", "MAC address": "ac:17:c8:5d:30:ac", "Public IP": "12.153.230.174", "Network": "NAC-US-0000-Pittsburgh", "Serial number": "Q2HY-AGRQ-JPQ4", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R0005-1", "MAC address": "e0:cb:bc:44:62:80", "Public IP": "172.58.173.233", "Network": "NAC-US-0005-Sunrise", "Serial number": "Q2KN-LSWM-KE8V", "Usage": "14.95 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R0030-1", "MAC address": "e0:cb:bc:44:72:f0", "Public IP": "173.46.77.227", "Network": "NAC-US-0030-Kansas City", "Serial number": "Q2KN-N6D6-A6B6", "Usage": "10.40 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R0031-1", "MAC address": "68:3a:1e:20:0e:e0", "Public IP": "12.153.231.176", "Network": "NAC-US-0031-Canton", "Serial number": "Q2HY-FNTM-P8XW", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R0033-1", "MAC address": "68:3a:1e:20:18:2c", "Public IP": "50.216.28.98", "Network": "NAC-US-0033-Smyrna", "Serial number": "Q2HY-KJTE-A7NE", "Usage": "19.39 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1009-1", "MAC address": "68:3a:1e:20:05:40", "Public IP": "209.142.155.237", "Network": "NAC-US-1009-Avon Lake", "Serial number": "Q2HY-C3WB-6RMT", "Usage": "8.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1022-1", "MAC address": "68:3a:1e:1f:f1:58", "Public IP": "172.58.140.254", "Network": "NAC-US-1022-East Liberty", "Serial number": "Q2HY-4B4N-TVYE", "Usage": "1.03 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1055-1", "MAC address": "68:3a:1e:1f:fd:0c", "Public IP": "162.155.115.206", "Network": "NAC-US-1055-Westlake", "Serial number": "Q2HY-94BM-P4FS", "Usage": "25.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1085-1", "MAC address": "68:3a:1e:1f:fd:05", "Public IP": "172.58.191.86", "Network": "NAC-US-1085-Toledo", "Serial number": "Q2HY-93QS-VFB8", "Usage": "25.69 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1106-1", "MAC address": "68:3a:1e:20:15:07", "Public IP": "67.76.201.2", "Network": "NAC-US-1106-Marysville", "Serial number": "Q2HY-J35H-Y63Q", "Usage": "26.13 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1157-1", "MAC address": "e0:cb:bc:44:38:a0", "Public IP": "172.58.188.122", "Network": "NAC-US-1157-Warren", "Serial number": "Q2KN-HHHC-22SX", "Usage": "15.76 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1183-1", "MAC address": "e0:cb:bc:43:88:90", "Public IP": "172.56.34.50", "Network": "NAC-US-1183-Staten Island", "Serial number": "Q2KN-62PC-7ZVN", "Usage": "1.24 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1203-1", "MAC address": "68:3a:1e:20:29:89", "Public IP": "4.15.113.106", "Network": "NAC-US-1203-Atlanta", "Serial number": "Q2HY-RXYY-SDSJ", "Usage": "19.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1320-1", "MAC address": "68:3a:1e:20:2e:75", "Public IP": "12.153.231.160", "Network": "NAC-US-1320-San Antonio", "Serial number": "Q2HY-TY4A-37ZZ", "Usage": "5.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1378-1", "MAC address": "68:3a:1e:20:0a:1e", "Public IP": "75.149.30.213", "Network": "NAC-US-1378-West Mifflin", "Serial number": "Q2HY-DRFA-HSUQ", "Usage": "9.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1382-1", "MAC address": "68:3a:1e:20:26:d4", "Public IP": "172.95.146.241", "Network": "NAC-US-1382-Santa Fe Springs", "Serial number": "Q2HY-QYWW-4ED4", "Usage": "180.7 MB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1383-1", "MAC address": "e0:cb:bc:44:3a:c0", "Public IP": "38.96.44.146", "Network": "NAC-US-1383-Huntington Beach", "Serial number": "Q2KN-HNJP-75JF", "Usage": "16.69 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1519-1", "MAC address": "68:3a:1e:20:1f:c6", "Public IP": "172.58.102.181", "Network": "NAC-US-1519-San Antonio", "Serial number": "Q2HY-NL29-MX9J", "Usage": "465.5 MB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1521-1", "MAC address": "68:3a:1e:1f:fe:2b", "Public IP": "63.45.14.4", "Network": "NAC-US-1521-Oak Creek", "Serial number": "Q2HY-9M26-92E9", "Usage": "3.50 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1525", "MAC address": "e0:cb:bc:43:75:08", "Public IP": "172.58.151.94", "Network": "NAC-US-1525-Elkhart", "Serial number": "Q2KN-4EWU-EHVS", "Usage": "445.6 MB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1556-1", "MAC address": "ac:17:c8:5d:f6:26", "Public IP": "74.5.135.5", "Network": "NAC-US-1556-Mcconnelsburg", "Serial number": "Q2HY-TNYG-ZHEN", "Usage": "1.86 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1558", "MAC address": "e0:cb:bc:44:72:a8", "Public IP": "172.58.140.214", "Network": "NAC-US-1558-Louisville", "Serial number": "Q2KN-N5MB-EAZL", "Usage": "18.54 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1571-1", "MAC address": "e0:cb:bc:44:6c:d0", "Public IP": "172.59.184.209", "Network": "NAC-US-1571-Brunswick", "Serial number": "Q2KN-MLCK-JWB6", "Usage": "404.8 MB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1578-1", "MAC address": "e0:cb:bc:43:8b:00", "Public IP": "184.17.133.10", "Network": "NAC-US-1578-Roanoke", "Serial number": "Q2KN-6832-2UMA", "Usage": "15.43 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1581-1", "MAC address": "68:3a:1e:20:24:ab", "Public IP": "12.89.20.30", "Network": "NAC-US-1581-Lake Charles", "Serial number": "Q2HY-Q935-L7TL", "Usage": "15.45 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1586-1", "MAC address": "68:3a:1e:20:1f:d4", "Public IP": "172.58.99.153", "Network": "NAC-US-1586-Westlake", "Serial number": "Q2HY-NL7J-PE3C", "Usage": "1.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1635-1", "MAC address": "ac:17:c8:5d:d2:f5", "Public IP": "216.128.99.134", "Network": "NAC-US-1635-Kalama", "Serial number": "Q2HY-2UKS-YK2Z", "Usage": "6.02 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1636-1", "MAC address": "68:3a:1e:20:2a:9a", "Public IP": "172.58.158.232", "Network": "NAC-US-1636-Vance", "Serial number": "Q2HY-SCPA-QGKA", "Usage": "14.71 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1639-1", "MAC address": "ac:17:c8:5d:df:a5", "Public IP": "173.197.89.145", "Network": "NAC-US-1639-Kapoli", "Serial number": "Q2HY-P3SH-ATKN", "Usage": "3.71 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1683-1", "MAC address": "ac:17:c8:5d:ff:09", "Public IP": "107.77.202.9", "Network": "NAC-US-1683-Richmond", "Serial number": "Q2HY-VG2N-BB5Q", "Usage": "390.4 MB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1689-1", "MAC address": "68:3a:1e:1f:ef:28", "Public IP": "173.46.77.238", "Network": "NAC-US-1689-Carey", "Serial number": "Q2HY-3DGH-ZUQU", "Usage": "6.39 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1721-1", "MAC address": "e0:cb:bc:43:88:b0", "Public IP": "166.171.251.72", "Network": "NAC-US-1721-Seattle", "Serial number": "Q2KN-62W2-XAHT", "Usage": "171.5 MB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1725-1", "MAC address": "68:3a:1e:1f:ff:d6", "Public IP": "99.153.4.9", "Network": "NAC-US-1725-Oak Creek", "Serial number": "Q2HY-A8PL-S45A", "Usage": "1.46 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1728-1", "MAC address": "68:3a:1e:1f:f8:97", "Public IP": "172.58.188.3", "Network": "NAC-US-1728-Fremont", "Serial number": "Q2HY-76YF-SFT7", "Usage": "6.38 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R1736-1", "MAC address": "68:3a:1e:20:07:cb", "Public IP": "70.135.132.190", "Network": "NAC-US-1736-Eaton Rapids", "Serial number": "Q2HY-CWG5-TDCX", "Usage": "15.95 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1740-1", "MAC address": "e0:cb:bc:43:8b:c0", "Public IP": "216.70.24.178", "Network": "NAC-US-1740-Oak Creek", "Serial number": "Q2KN-6A69-TR22", "Usage": "4.35 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R1745-1", "MAC address": "e0:cb:bc:43:74:d0", "Public IP": "50.238.139.250", "Network": "NAC-US-1745-Smyrna", "Serial number": "Q2KN-4ELS-8MUS", "Usage": "17.18 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R2547-1", "MAC address": "e0:cb:bc:43:88:10", "Public IP": "75.175.94.232", "Network": "NAC-US-2547-Foley", "Serial number": "Q2KN-5ZH2-3LJH", "Usage": "11.16 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2560-1", "MAC address": "ac:17:c8:5d:e4:98", "Public IP": "50.216.11.134", "Network": "NAC-US-2560-Naperville", "Serial number": "Q2HY-Q2C3-JYQC", "Usage": "22.56 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2561-1", "MAC address": "ac:17:c8:5d:eb:36", "Public IP": "173.64.102.48", "Network": "NAC-US-2561-Glen Burnie", "Serial number": "Q2HY-RDDK-ZTS8", "Usage": "26.31 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2562-1", "MAC address": "68:3a:1e:20:03:48", "Public IP": "64.158.138.18", "Network": "NAC-US-2562-Columbus", "Serial number": "Q2HY-BFFZ-HH59", "Usage": "16.58 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2565-1", "MAC address": "ac:17:c8:5d:21:e1", "Public IP": "172.58.27.110", "Network": "NAC-US-2565-Ontario", "Serial number": "Q2HY-4WJD-ULAZ", "Usage": "2.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2570-1", "MAC address": "ac:17:c8:5d:ea:f7", "Public IP": "4.7.37.250", "Network": "NAC-US-2570-Kissimmee", "Serial number": "Q2HY-RBGB-92G5", "Usage": "9.42 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R2571", "MAC address": "e0:cb:bc:43:89:00", "Public IP": "4.2.204.42", "Network": "NAC-US-2571-Avon Ledin", "Serial number": "Q2KN-63CK-XB5H", "Usage": "50.41 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2590-1", "MAC address": "ac:17:c8:5d:d2:a8", "Public IP": "72.12.194.106", "Network": "NAC-US-2590-Lafayette", "Serial number": "Q2HY-2R3Y-X26Q", "Usage": "2.99 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2601-1", "MAC address": "68:3a:1e:20:0c:2b", "Public IP": "172.58.140.68", "Network": "NAC-US-2601-Troy", "Serial number": "Q2HY-EHSE-LT56", "Usage": "5.80 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2602-1", "MAC address": "ac:17:c8:5d:eb:59", "Public IP": "166.170.26.65", "Network": "NAC-US-2602-Value Added Packaging", "Serial number": "Q2HY-RDWY-BCNL", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R2802-1", "MAC address": "68:3a:1e:1f:f5:9c", "Public IP": "172.58.110.215", "Network": "NAC-US-2802-Dearborn", "Serial number": "Q2HY-624P-RSWX", "Usage": "9.63 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2815-1", "MAC address": "68:3a:1e:20:08:f1", "Public IP": "12.153.231.174", "Network": "NAC-US-2815-La Porte", "Serial number": "Q2HY-DB2L-LUSX", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R2815-2", "MAC address": "68:3a:1e:20:07:a8", "Public IP": "12.153.231.165", "Network": "NAC-US-2815-La Porte", "Serial number": "Q2HY-CUX3-HAX9", "Usage": "25.5 MB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R2817", "MAC address": "e0:cb:bc:2a:fb:e8", "Public IP": "4.7.83.226", "Network": "NAC-US-2817-Cheswick", "Serial number": "Q2KN-3AA7-WFAE", "Usage": "2.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2820-1", "MAC address": "68:3a:1e:1f:fb:3e", "Public IP": "4.1.68.114", "Network": "NAC-US-2820-Princeton", "Serial number": "Q2HY-8AKH-LGFH", "Usage": "10.67 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2822-1", "MAC address": "68:3a:1e:1f:f7:be", "Public IP": "12.153.231.165", "Network": "NAC-US-2822-La Porte", "Serial number": "Q2HY-6VYC-PKMB", "Usage": "2.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R2837-1", "MAC address": "68:3a:1e:20:13:da", "Public IP": "12.153.231.168", "Network": "NAC-US-2837-Tulsa", "Serial number": "Q2HY-HNL3-QNEF", "Usage": "6.70 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R3025-1", "MAC address": "ac:17:c8:5d:e0:d2", "Public IP": "208.249.40.50", "Network": "NAC-US-3025-Avon 244 Bodwell", "Serial number": "Q2HY-PAVE-6543", "Usage": "41.80 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R6502-1", "MAC address": "68:3a:1e:7d:49:a8", "Public IP": "73.42.71.107", "Network": "NAC-US-6502-Caron-Lab", "Serial number": "Q2KN-T253-RNHL", "Usage": "17.86 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R6503-1", "MAC address": "0c:8d:db:e3:99:68", "Public IP": "108.39.138.3", "Network": "NAC-US-6503-Gaunt-Lab", "Serial number": "Q2KN-963M-JA4D", "Usage": "304.11 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8000-1", "MAC address": "e0:cb:bc:44:ec:88", "Public IP": "98.60.174.164", "Network": "NAC-US-8000-Albuquerque", "Serial number": "Q2KN-XMAJ-3VTP", "Usage": "13.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8002-1", "MAC address": "ac:17:c8:5d:f0:0d", "Public IP": "173.46.78.227", "Network": "NAC-US-8002-Anchorage", "Serial number": "Q2HY-SDD4-2UBW", "Usage": "7.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8006-1", "MAC address": "98:18:88:75:5e:b1", "Public IP": "50.91.119.155", "Network": "NAC-US-8006-Bakersfield", "Serial number": "Q2HY-GZAV-HQEG", "Usage": "12.70 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8008-1", "MAC address": "e0:cb:bc:44:91:b8", "Public IP": "70.115.65.39", "Network": "NAC-US-8008-Beaumont", "Serial number": "Q2KN-QJAK-MELF", "Usage": "12.18 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8009-1", "MAC address": "98:18:88:75:84:ac", "Public IP": "72.47.20.4", "Network": "NAC-US-8009-Eureka", "Serial number": "Q2HY-KE5S-SMAX", "Usage": "225.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8010-1", "MAC address": "ac:17:c8:5d:f5:62", "Public IP": "75.71.23.206", "Network": "NAC-US-8010-Colorado Springs", "Serial number": "Q2HY-TFZ6-WDNE", "Usage": "15.09 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8014-1", "MAC address": "0c:8d:db:91:8e:b8", "Public IP": "76.184.145.198", "Network": "NAC-US-8014-Lewisville", "Serial number": "Q2KN-ED5J-97RL", "Usage": "11.76 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8015-1", "MAC address": "e0:cb:bc:44:d7:a0", "Public IP": "74.192.226.165", "Network": "NAC-US-8015-Balch Springs", "Serial number": "Q2KN-VZAF-9E26", "Usage": "10.74 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8022-1", "MAC address": "0c:8d:db:62:c0:f8", "Public IP": "71.42.177.254", "Network": "NAC-US-8022-Dallas Central", "Serial number": "Q2KN-XCPN-PAKK", "Usage": "34.92 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8023-1", "MAC address": "f8:9e:28:7c:a3:80", "Public IP": "12.153.231.185", "Network": "NAC-US-8023-Fort worth", "Serial number": "Q2KN-UQ5K-TBYL", "Usage": "9.21 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8024-1", "MAC address": "2c:3f:0b:ad:da:f0", "Public IP": "24.27.69.67", "Network": "NAC-US-8024-Carrollton", "Serial number": "Q2KN-FDW9-CASB", "Usage": "6.03 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8025-1", "MAC address": "98:18:88:75:8a:55", "Public IP": "68.116.222.69", "Network": "NAC-US-8025-Duncanville", "Serial number": "Q2HY-KR46-9BHM", "Usage": "10.93 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8026-1", "MAC address": "e0:cb:bc:2a:ce:00", "Public IP": "24.178.9.212", "Network": "NAC-US-8026-North Richland Hills", "Serial number": "Q2KN-QWMM-EQKD", "Usage": "18.21 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8028-1", "MAC address": "e0:cb:bc:2a:59:b0", "Public IP": "73.229.159.6", "Network": "NAC-US-8028-Denver", "Serial number": "Q2KN-JXMU-HKRN", "Usage": "24.21 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8031-1", "MAC address": "ac:17:c8:c1:a3:a2", "Public IP": "73.96.9.110", "Network": "NAC-US-8031-Eugene", "Serial number": "Q2HY-WLHF-SDZF", "Usage": "14.67 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8034-1", "MAC address": "e0:cb:bc:2a:61:70", "Public IP": "166.170.38.223", "Network": "NAC-US-8034-Fresno", "Serial number": "Q2KN-KBGX-RE4V", "Usage": "19.90 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8036-1", "MAC address": "ac:17:c8:5d:d2:93", "Public IP": "72.130.113.46", "Network": "NAC-US-8036-Hilo", "Serial number": "Q2HY-2QF9-AK3Q", "Usage": "10.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8037-1", "MAC address": "ac:17:c8:5d:de:b0", "Public IP": "66.75.122.179", "Network": "NAC-US-8037-Kailua Kona", "Serial number": "Q2HY-NTW8-VVJJ", "Usage": "7.18 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8040-1", "MAC address": "2c:3f:0b:ad:e3:60", "Public IP": "98.151.176.88", "Network": "NAC-US-8040-Kapolei", "Serial number": "Q2KN-FXX9-9EF6", "Usage": "12.58 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8042-1", "MAC address": "e0:cb:bc:2a:72:a8", "Public IP": "76.88.140.136", "Network": "NAC-US-8042-Honolulu", "Serial number": "Q2KN-LAUN-4H6A", "Usage": "7.69 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8044-1", "MAC address": "0c:8d:db:e1:d4:58", "Public IP": "73.32.61.254", "Network": "NAC-US-8044-Houston", "Serial number": "Q2KN-M2LU-D6GM", "Usage": "32.73 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8048-1", "MAC address": "98:18:88:74:ba:4d", "Public IP": "98.57.192.235", "Network": "NAC-US-8048-Sugarland", "Serial number": "Q2HY-6FH7-4577", "Usage": "12.15 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8051-1", "MAC address": "0c:8d:db:8e:1a:f0", "Public IP": "12.153.231.175", "Network": "NAC-US-8051-Houston", "Serial number": "Q2KN-5ECT-FBQ8", "Usage": "24.84 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8053-1", "MAC address": "0c:8d:db:92:2e:28", "Public IP": "73.206.64.186", "Network": "NAC-US-8053-Houston", "Serial number": "Q2KN-NGR2-8LVL", "Usage": "48.24 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8054-1", "MAC address": "98:18:88:75:5f:05", "Public IP": "98.194.34.199", "Network": "NAC-US-8054-Houston", "Serial number": "Q2HY-GZWC-7C9W", "Usage": "22.00 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8055-1", "MAC address": "98:18:88:75:8a:c5", "Public IP": "23.30.76.46", "Network": "NAC-US-8055-Shenandoah", "Serial number": "Q2HY-KRZC-TA88", "Usage": "9.07 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8056-1", "MAC address": "e0:cb:bc:44:fa:d8", "Public IP": "73.136.105.95", "Network": "NAC-US-8056-Houston", "Serial number": "Q2KN-YP7L-M2GA", "Usage": "11.19 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8057-1", "MAC address": "0c:8d:db:91:f0:68", "Public IP": "73.6.103.80", "Network": "NAC-US-8057-Houston", "Serial number": "Q2KN-K9XF-BV4U", "Usage": "19.28 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8060-1", "MAC address": "e0:cb:bc:bc:b2:50", "Public IP": "173.172.101.95", "Network": "NAC-US-8060-Lenexa", "Serial number": "Q2KN-WYPH-CMV8", "Usage": "72.43 GB", "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R8061-1", "MAC address": "0c:8d:db:63:02:88", "Public IP": "72.129.186.109", "Network": "NAC-US-8061-Lees Summit", "Serial number": "Q2KN-4YG2-UJ4Y", "Usage": "8.89 GB", "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R8067-1", "MAC address": "e0:cb:bc:bb:16:a8", "Public IP": "172.89.39.104", "Network": "NAC-US-8067-Anaheim", "Serial number": "Q2KN-DKBX-P6JX", "Usage": "24.23 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8068-1", "MAC address": "98:18:88:75:5b:c4", "Public IP": "172.56.180.186", "Network": "NAC-US-8068-Lakewood", "Serial number": "Q2HY-GSJW-AMWB", "Usage": "12.40 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8069-1", "MAC address": "e0:cb:bc:bb:02:90", "Public IP": "172.58.19.180", "Network": "NAC-US-8069-Van Nuys", "Serial number": "Q2KN-CQ4Z-JM2S", "Usage": "111.40 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8070-1", "MAC address": "e0:cb:bc:98:aa:c8", "Public IP": "72.134.232.83", "Network": "NAC-US-8070-Lawndale", "Serial number": "Q2KN-8VFB-UJLD", "Usage": "39.36 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8072-2", "MAC address": "0c:8d:db:85:e9:a0", "Public IP": "23.240.102.5", "Network": "NAC-US-8072-Los Angeles", "Serial number": "Q2KN-UNYR-2KY4", "Usage": "8.87 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8073-1", "MAC address": "ac:17:c8:c1:a1:02", "Public IP": "23.242.139.140", "Network": "NAC-US-8073-Westminster", "Serial number": "Q2HY-W33R-9558", "Usage": "11.64 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8083-1", "MAC address": "ac:17:c8:c1:ae:37", "Public IP": "35.132.132.211", "Network": "NAC-US-8083-Medford", "Serial number": "Q2HY-Z4B2-SKNU", "Usage": "19.29 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8084-1", "MAC address": "e0:cb:bc:98:4a:28", "Public IP": "174.50.151.181", "Network": "NAC-US-8084-Modesto", "Serial number": "Q2KN-4PSP-FJWT", "Usage": "8.53 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8085-1", "MAC address": "cc:9c:3e:43:20:e6", "Public IP": "184.191.58.169", "Network": "NAC-US-8085-Harahan", "Serial number": "Q2HY-YWSP-BSPJ", "Usage": "30.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8088-1", "MAC address": "bc:db:09:bd:a9:19", "Public IP": "172.58.46.250", "Network": "NAC-US-8088-Grants Pass", "Serial number": "Q2HY-BHTW-DB7P", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R8088-2", "MAC address": "bc:db:09:bd:6c:ff", "Public IP": "172.58.43.106", "Network": "NAC-US-8088-Grants Pass", "Serial number": "Q2HY-8WJV-EBET", "Usage": "16.99 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8089-1", "MAC address": "e0:cb:bc:bc:67:98", "Public IP": "172.56.185.148", "Network": "NAC-US-8089-Oxnard", "Serial number": "Q2KN-TXDJ-EGKQ", "Usage": "23.37 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8091-1", "MAC address": "ac:17:c8:5d:f7:76", "Public IP": "172.56.208.248", "Network": "NAC-US-8091-Mesa", "Serial number": "Q2HY-TVH2-A286", "Usage": "11.15 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8093-1", "MAC address": "e0:cb:bc:98:88:08", "Public IP": "172.56.208.233", "Network": "NAC-US-8093-Tempe", "Serial number": "Q2KN-7EX7-N7QA", "Usage": "17.15 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8094-1", "MAC address": "ac:17:c8:5d:e6:35", "Public IP": "70.184.73.152", "Network": "NAC-US-8094-Phoenix", "Serial number": "Q2HY-QDEE-FF2Z", "Usage": "25.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8095-1", "MAC address": "98:18:88:75:61:ba", "Public IP": "50.175.143.218", "Network": "NAC-US-8095-Goodyear", "Serial number": "Q2HY-H7JR-TDXJ", "Usage": "116.85 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8096-1", "MAC address": "68:3a:1e:7d:4b:b8", "Public IP": "174.68.61.197", "Network": "NAC-US-8096-Scottsdale", "Serial number": "Q2KN-T5WE-QMB6", "Usage": "16.33 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8102-1", "MAC address": "e0:cb:bc:bb:02:78", "Public IP": "104.50.124.33", "Network": "NAC-US-8102-Riverside", "Serial number": "Q2KN-CQ2B-MYQW", "Usage": "7.53 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8103-1", "MAC address": "e0:cb:bc:98:df:e0", "Public IP": "73.116.50.213", "Network": "NAC-US-8103-Sacramento", "Serial number": "Q2KN-B7NZ-TV38", "Usage": "8.32 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8104-1", "MAC address": "ac:17:c8:5d:f0:5a", "Public IP": "71.195.175.221", "Network": "NAC-US-8104-Citrus Heights", "Serial number": "Q2HY-SFE6-SWRL", "Usage": "10.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8105-1", "MAC address": "ac:17:c8:5d:f8:cd", "Public IP": "98.252.124.48", "Network": "NAC-US-8105-Sacramento", "Serial number": "Q2HY-U5WZ-AQ5S", "Usage": "11.43 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8108-1", "MAC address": "0c:8d:db:8d:cc:c8", "Public IP": "24.160.140.227", "Network": "NAC-US-8108-San Antonio", "Serial number": "Q2KN-ZRLG-H446", "Usage": "15.48 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8110-1", "MAC address": "bc:db:09:bd:ca:13", "Public IP": "68.201.224.64", "Network": "NAC-US-8110-Pleasanton", "Serial number": "Q2HY-CYJY-57HQ", "Usage": "13.36 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8113-1", "MAC address": "0c:8d:db:91:bc:18", "Public IP": "172.56.184.50", "Network": "NAC-US-8113-San Diego", "Serial number": "Q2KN-GQ6T-5KMA", "Usage": "30.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8116-1", "MAC address": "bc:db:09:bd:48:9a", "Public IP": "172.58.35.86", "Network": "NAC-US-8116-San Francisco", "Serial number": "Q2HY-7AUJ-Q7NG", "Usage": "98.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8117-1", "MAC address": "ac:17:c8:5d:7a:5d", "Public IP": "73.189.76.97", "Network": "NAC-US-8117-Concord", "Serial number": "Q2HY-3U2X-HSF7", "Usage": "15.38 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8118-1", "MAC address": "98:18:88:c9:35:cb", "Public IP": "76.103.86.61", "Network": "NAC-US-8118-Oakland", "Serial number": "Q2HY-QRSB-YZA8", "Usage": "24.32 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8120-1", "MAC address": "ac:17:c8:5d:d0:2b", "Public IP": "24.23.216.135", "Network": "NAC-US-8120-San Carlos", "Serial number": "Q2HY-2273-T4GS", "Usage": "10.81 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8121-1", "MAC address": "e0:cb:bc:98:19:28", "Public IP": "108.237.181.61", "Network": "NAC-US-8121-San Jose", "Serial number": "Q2KN-2LWB-STS8", "Usage": "17.95 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8123-1", "MAC address": "bc:db:09:bd:ce:ff", "Public IP": "76.102.164.193", "Network": "NAC-US-8123-Santa Maria", "Serial number": "Q2HY-D7UL-W7SF", "Usage": "114.50 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8125-1", "MAC address": "e0:cb:bc:bc:b7:68", "Public IP": "76.104.180.125", "Network": "NAC-US-8125-Tacoma", "Serial number": "Q2KN-X7PG-3YGE", "Usage": "24.40 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8126-1", "MAC address": "98:18:88:74:b3:e0", "Public IP": "73.254.238.244", "Network": "NAC-US-8126-Seattle", "Serial number": "Q2HY-5YWH-XL5V", "Usage": "11.60 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8135-1", "MAC address": "ac:17:c8:c1:a1:10", "Public IP": "67.161.174.220", "Network": "NAC-US-8135-Stockton", "Serial number": "Q2HY-W3SB-8BFZ", "Usage": "12.42 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8137-1", "MAC address": "0c:8d:db:85:f8:e0", "Public IP": "75.108.165.6", "Network": "NAC-US-8137-Tyler", "Serial number": "Q2KN-WF9T-SF5A", "Usage": "9.51 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8142-1", "MAC address": "0c:8d:db:8d:da:80", "Public IP": "47.49.187.14", "Network": "NAC-US-8142-Asheville", "Serial number": "Q2KN-2HZG-YZ9X", "Usage": "17.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8147-1", "MAC address": "ac:17:c8:5d:da:b2", "Public IP": "73.190.243.134", "Network": "NAC-US-8147-Augusta", "Serial number": "Q2HY-4NK9-3PUC", "Usage": "12.31 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8148-1", "MAC address": "e0:cb:bc:bc:b6:a0", "Public IP": "174.50.105.48", "Network": "NAC-US-8148-Martinez", "Serial number": "Q2KN-X6RP-AU5C", "Usage": "13.01 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8162-1", "MAC address": "e0:cb:bc:bc:f5:e8", "Public IP": "173.92.16.21", "Network": "NAC-US-8162-Concord", "Serial number": "Q2KN-ZTMN-ZNEP", "Usage": "13.18 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8165-1", "MAC address": "98:18:88:74:84:7d", "Public IP": "71.68.238.87", "Network": "NAC-US-8165-Columbia", "Serial number": "Q2HY-2USW-YJ4N", "Usage": "11.28 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8166-1", "MAC address": "0c:8d:db:85:c5:00", "Public IP": "50.4.37.216", "Network": "NAC-US-8166-Columbus", "Serial number": "Q2KN-QE6B-MWNF", "Usage": "13.24 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8170-1", "MAC address": "ac:17:c8:c1:af:02", "Public IP": "107.77.234.109", "Network": "NAC-US-8170-Goldsboro", "Serial number": "Q2HY-ZAPB-7L8Z", "Usage": "9.41 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8172-1", "MAC address": "98:18:88:44:c6:02", "Public IP": "75.110.68.115", "Network": "NAC-US-8172-Greenville", "Serial number": "Q2HY-DEZ4-6F3Q", "Usage": "19.14 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8174-2", "MAC address": "e0:cb:bc:2a:5d:b8", "Public IP": "159.118.251.198", "Network": "NAC-US-8174-Gulfport", "Serial number": "Q2KN-K5YZ-SGFL", "Usage": "16.62 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8175-1", "MAC address": "98:18:88:75:8a:32", "Public IP": "71.15.91.211", "Network": "NAC-US-8175-Hickory", "Serial number": "Q2HY-KQSK-77UV", "Usage": "10.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8176-1", "MAC address": "98:18:88:c9:2d:89", "Public IP": "23.120.161.0", "Network": "NAC-US-8176-Morganton", "Serial number": "Q2HY-PHNV-KDMH", "Usage": "23.60 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8178-1", "MAC address": "ac:17:c8:c1:b0:8a", "Public IP": "98.54.252.34", "Network": "NAC-US-8178-Jackson", "Serial number": "Q2HY-ZMFC-9EC2", "Usage": "10.97 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8180-1", "MAC address": "e0:cb:bc:bc:78:d0", "Public IP": "98.231.44.124", "Network": "NAC-US-8180-Jacksonville", "Serial number": "Q2KN-ULT2-RZJ2", "Usage": "14.56 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8186-1", "MAC address": "e0:cb:bc:bb:14:70", "Public IP": "172.58.0.65", "Network": "NAC-US-8186-Macon", "Serial number": "Q2KN-DGJY-F5ZQ", "Usage": "17.50 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8189-1", "MAC address": "e0:cb:bc:bb:05:e8", "Public IP": "68.63.52.71", "Network": "NAC-US-8189-Mobile", "Serial number": "Q2KN-CUTG-PXD6", "Usage": "9.11 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8190-1", "MAC address": "ac:17:c8:5d:f5:00", "Public IP": "24.196.2.161", "Network": "NAC-US-8190-Montgomery", "Serial number": "Q2HY-TDL4-3LXJ", "Usage": "131.82 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8195-1", "MAC address": "e0:cb:bc:bc:f6:10", "Public IP": "75.110.163.191", "Network": "NAC-US-8195-New Bern", "Serial number": "Q2KN-ZTZ6-WHXP", "Usage": "34.54 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8196-1", "MAC address": "e0:cb:bc:bc:65:c0", "Public IP": "71.71.241.9", "Network": "NAC-US-8196-Salisbury", "Serial number": "Q2KN-TUWN-V9JJ", "Usage": "12.08 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8197-1", "MAC address": "e0:cb:bc:bc:58:08", "Public IP": "108.189.187.239", "Network": "NAC-US-8197-Winter Park", "Serial number": "Q2KN-T9ZB-CB2Q", "Usage": "66.51 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8203-1", "MAC address": "ac:17:c8:5d:f9:1a", "Public IP": "70.175.180.49", "Network": "NAC-US-8203-Pensacola", "Serial number": "Q2HY-U98D-NG9N", "Usage": "19.88 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8205-1", "MAC address": "0c:8d:db:8d:b6:d8", "Public IP": "71.70.168.69", "Network": "NAC-US-8205-Raleigh", "Serial number": "Q2KN-XACU-X4EX", "Usage": "20.20 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8210-1", "MAC address": "e0:cb:bc:bc:c3:f0", "Public IP": "71.229.71.215", "Network": "NAC-US-8210-Savannah", "Serial number": "Q2KN-XPJQ-SLXW", "Usage": "14.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8215-1", "MAC address": "ac:17:c8:5d:ea:56", "Public IP": "73.58.3.67", "Network": "NAC-US-8215-Tuscaloosa", "Serial number": "Q2HY-R7TX-ZX78", "Usage": "11.64 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8216-1", "MAC address": "0c:8d:db:85:7f:c0", "Public IP": "172.58.251.28", "Network": "NAC-US-8216-Norfolk", "Serial number": "Q2KN-GHMN-GQNS", "Usage": "25.89 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8217-1", "MAC address": "98:18:88:74:cb:aa", "Public IP": "172.58.253.235", "Network": "NAC-US-8217-Newport News", "Serial number": "Q2HY-7HAX-H3MA", "Usage": "13.51 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8219-1", "MAC address": "e0:cb:bc:2f:73:18", "Public IP": "76.188.99.167", "Network": "NAC-US-8219-Akron", "Serial number": "Q2KN-MWBG-L2NA", "Usage": "11.61 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8220-1", "MAC address": "98:18:88:75:5d:4c", "Public IP": "108.183.5.30", "Network": "NAC-US-8220-Latham", "Serial number": "Q2HY-GVSQ-MY45", "Usage": "32.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8221-1", "MAC address": "ac:17:c8:c1:aa:63", "Public IP": "73.144.57.72", "Network": "NAC-US-8221-Ann Arbor", "Serial number": "Q2HY-Y6ZC-2KSA", "Usage": "20.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8225-1", "MAC address": "98:18:88:75:61:d6", "Public IP": "70.91.198.254", "Network": "NAC-US-8225-Brockton", "Serial number": "Q2HY-H7PM-B9BA", "Usage": "8.03 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8227-1", "MAC address": "e0:cb:bc:2a:66:48", "Public IP": "98.229.57.230", "Network": "NAC-US-8227-Quincy", "Serial number": "Q2KN-KM7G-N68Y", "Usage": "11.51 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8229-1", "MAC address": "e0:cb:bc:2a:67:50", "Public IP": "98.4.207.164", "Network": "NAC-US-8229-West Seneca", "Serial number": "Q2KN-KP7J-GMLX", "Usage": "18.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8231-1", "MAC address": "98:18:88:75:7e:23", "Public IP": "67.241.164.144", "Network": "NAC-US-8231-Clarence", "Serial number": "Q2HY-JZ2H-62WE", "Usage": "11.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8232-1", "MAC address": "98:18:88:75:6c:2c", "Public IP": "75.69.66.50", "Network": "NAC-US-8232-South Burlington", "Serial number": "Q2HY-HUG3-E2JC", "Usage": "16.72 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8236-1", "MAC address": "ac:17:c8:c1:aa:6a", "Public IP": "75.58.31.9", "Network": "NAC-US-8236-Aurora", "Serial number": "Q2HY-Y72U-TJDK", "Usage": "28.98 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8242-1", "MAC address": "ac:17:c8:5d:e2:ca", "Public IP": "73.44.190.76", "Network": "NAC-US-8242-Joliet", "Serial number": "Q2HY-PMP7-979D", "Usage": "9.12 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8246-1", "MAC address": "e0:cb:bc:bc:f5:88", "Public IP": "24.15.242.173", "Network": "NAC-US-8246-Elk Grove", "Serial number": "Q2KN-ZSXJ-SYDY", "Usage": "121.26 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8247-1", "MAC address": "e0:cb:bc:bc:44:90", "Public IP": "104.230.19.96", "Network": "NAC-US-8247-Brooklyn", "Serial number": "Q2KN-SEVQ-J628", "Usage": "28.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8249-1", "MAC address": "98:18:88:75:61:6d", "Public IP": "75.185.48.50", "Network": "NAC-US-8249-Cleveland", "Serial number": "Q2HY-H6WY-HAJW", "Usage": "9.27 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8251-1", "MAC address": "98:18:88:75:83:40", "Public IP": "71.73.16.215", "Network": "NAC-US-8251-Mentor", "Serial number": "Q2HY-KBU6-33VV", "Usage": "6.52 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8256-1", "MAC address": "e0:cb:bc:2a:cc:00", "Public IP": "65.185.23.203", "Network": "NAC-US-8256-Newark", "Serial number": "Q2KN-QSU7-FSY7", "Usage": "16.51 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8259-1", "MAC address": "e0:cb:bc:bc:55:58", "Public IP": "104.137.253.142", "Network": "NAC-US-8259-Livonia", "Serial number": "Q2KN-T6CR-PN5Y", "Usage": "13.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8260-1", "MAC address": "ac:17:c8:5d:7e:a8", "Public IP": "68.33.56.21", "Network": "NAC-US-8260-Dover", "Serial number": "Q2HY-4RBQ-5CE9", "Usage": "13.50 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8261-1", "MAC address": "e0:cb:bc:2a:83:20", "Public IP": "174.104.39.40", "Network": "NAC-US-8261-Erie", "Serial number": "Q2KN-M6H7-UBNE", "Usage": "14.65 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8263-1", "MAC address": "ac:17:c8:cd:dc:50", "Public IP": "73.146.241.60", "Network": "NAC-US-8263-Fort Wayne", "Serial number": "Q2KN-JDBR-BFJE", "Usage": "12.33 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8266-1", "MAC address": "0c:8d:db:61:31:a0", "Public IP": "172.56.223.177", "Network": "NAC-US-8266-Southington", "Serial number": "Q2KN-5YDX-W7D4", "Usage": "9.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8271-1", "MAC address": "ac:17:c8:5d:f3:32", "Public IP": "104.137.195.72", "Network": "NAC-US-8271-Indianapolis", "Serial number": "Q2HY-SZ65-Y5R8", "Usage": "8.34 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8273-1", "MAC address": "e0:cb:bc:44:fd:80", "Public IP": "174.175.172.11", "Network": "NAC-US-8273-Lancaster", "Serial number": "Q2KN-YU99-DEX2", "Usage": "58.24 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8274-1", "MAC address": "e0:cb:bc:44:c5:38", "Public IP": "98.49.2.211", "Network": "NAC-US-8274-Lancaster", "Serial number": "Q2KN-UGZR-2ATD", "Usage": "14.41 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8276-1", "MAC address": "34:56:fe:c5:c7:50", "Public IP": "65.29.106.154", "Network": "NAC-US-8276-Lima", "Serial number": "Q2KN-33GC-KQCF", "Usage": "46.72 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8278-1", "MAC address": "e0:cb:bc:98:ec:48", "Public IP": "76.188.15.124", "Network": "NAC-US-8278-Mansfield", "Serial number": "Q2KN-BRXU-FKRH", "Usage": "21.46 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8279-1", "MAC address": "e0:cb:bc:98:ba:20", "Public IP": "73.39.77.175", "Network": "NAC-US-8279-Ocean City", "Serial number": "Q2KN-9KSL-NBRU", "Usage": "10.71 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8280-1", "MAC address": "e0:cb:bc:bb:76:f0", "Public IP": "71.82.71.133", "Network": "NAC-US-8280-Midland", "Serial number": "Q2KN-HPLB-8RCH", "Usage": "22.52 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8281-1", "MAC address": "cc:9c:3e:43:0c:5d", "Public IP": "65.30.192.161", "Network": "NAC-US-8281-New Berlin", "Serial number": "Q2HY-XV6Z-6WPA", "Usage": "130.65 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8284-1", "MAC address": "98:18:88:75:5b:b6", "Public IP": "76.28.63.79", "Network": "NAC-US-8284-Waterbury", "Serial number": "Q2HY-GSGC-9KJQ", "Usage": "41.36 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8285-1", "MAC address": "68:3a:1e:20:26:5d", "Public IP": "71.10.223.15", "Network": "NAC-US-8285-Plattsburgh", "Serial number": "Q2HY-QVHZ-FGKE", "Usage": "53.58 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8287-1", "MAC address": "e0:cb:bc:98:7a:b0", "Public IP": "73.141.164.107", "Network": "NAC-US-8287-Newark", "Serial number": "Q2KN-6UD7-CN2W", "Usage": "10.18 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8288-1", "MAC address": "98:18:88:75:78:d5", "Public IP": "76.124.105.85", "Network": "NAC-US-8288-Wilmington", "Serial number": "Q2HY-JMSQ-VVQQ", "Usage": "15.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8289-1", "MAC address": "98:18:88:74:85:33", "Public IP": "198.255.224.33", "Network": "NAC-US-8289-Portland", "Serial number": "Q2HY-2W7Q-GKG3", "Usage": "12.35 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8291-1", "MAC address": "ac:17:c8:5d:d4:84", "Public IP": "172.58.241.5", "Network": "NAC-US-8291-Pawtucket", "Serial number": "Q2HY-38TA-V3JS", "Usage": "11.12 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8292-1", "MAC address": "e0:cb:bc:44:c3:88", "Public IP": "174.175.195.160", "Network": "NAC-US-8292-Reading", "Serial number": "Q2KN-UCTM-36SM", "Usage": "15.73 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8293-1", "MAC address": "0c:8d:db:85:83:c0", "Public IP": "98.13.16.48", "Network": "NAC-US-8293-Rochester", "Serial number": "Q2KN-GX6E-ANY7", "Usage": "12.16 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8294-1", "MAC address": "ac:17:c8:c1:b0:1a", "Public IP": "76.141.63.22", "Network": "NAC-US-8294-Loves Park", "Serial number": "Q2HY-ZJXW-RECK", "Usage": "8.06 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8295-1", "MAC address": "e0:cb:bc:44:91:00", "Public IP": "71.82.196.50", "Network": "NAC-US-8295-Saginaw", "Serial number": "Q2KN-QGKY-JJMD", "Usage": "22.10 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8296-1", "MAC address": "98:18:88:75:88:80", "Public IP": "73.128.59.180", "Network": "NAC-US-8296-Salisbury", "Serial number": "Q2HY-KMHF-CL7F", "Usage": "22.71 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8300-1", "MAC address": "ac:17:c8:5d:ff:56", "Public IP": "98.175.27.206", "Network": "NAC-US-8300-Alexandria", "Serial number": "Q2HY-VHPM-HFYA", "Usage": "27.76 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8302-1", "MAC address": "e0:cb:bc:bb:30:a0", "Public IP": "71.114.124.42", "Network": "NAC-US-8302-York", "Serial number": "Q2KN-EPPB-Q2LC", "Usage": "15.85 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8304-1", "MAC address": "e0:cb:bc:bc:b4:80", "Public IP": "24.239.114.37", "Network": "NAC-US-8304-Youngstown", "Serial number": "Q2KN-X4GY-VTYV", "Usage": "10.52 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8306-1", "MAC address": "e0:cb:bc:2b:11:88", "Public IP": "73.46.183.91", "Network": "NAC-US-8306-Miami", "Serial number": "Q2KN-SS2L-9DKG", "Usage": "121.05 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8307-1", "MAC address": "e0:cb:bc:2b:3e:c0", "Public IP": "104.9.111.96", "Network": "NAC-US-8307-Coral Springs", "Serial number": "Q2KN-V4Z4-N478", "Usage": "17.14 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8308-1", "MAC address": "0c:8d:db:85:c8:d0", "Public IP": "98.53.84.6", "Network": "NAC-US-8308-Haileah", "Serial number": "Q2KN-QVWE-LQK4", "Usage": "129.52 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8309-1", "MAC address": "cc:9c:3e:42:9b:68", "Public IP": "73.49.80.102", "Network": "NAC-US-8309-Miami", "Serial number": "Q2HY-S3XD-QB2C", "Usage": "26.32 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8310-1", "MAC address": "0c:8d:db:e1:12:38", "Public IP": "71.86.89.237", "Network": "NAC-US-8310-Fort Worth", "Serial number": "Q2KN-D4AE-ZN44", "Usage": "25.44 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8311-1", "MAC address": "0c:8d:db:e3:28:48", "Public IP": "24.175.224.155", "Network": "NAC-US-8311-Irving", "Serial number": "Q2KN-3F3N-6QLZ", "Usage": "124.07 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8312-2", "MAC address": "e0:cb:bc:44:bc:60", "Public IP": "96.40.47.98", "Network": "NAC-US-8312-Lake Worth", "Serial number": "Q2KN-TSNM-XKCY", "Usage": "9.17 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8315-1", "MAC address": "0c:8d:db:e0:72:80", "Public IP": "70.121.22.10", "Network": "NAC-US-8315-Frisco", "Serial number": "Q2KN-6JED-RQUE", "Usage": "140.54 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8316-1", "MAC address": "0c:8d:db:85:57:98", "Public IP": "47.209.236.93", "Network": "NAC-US-8316-Prosper", "Serial number": "Q2KN-BUAZ-X5JK", "Usage": "24.16 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8317-1", "MAC address": "f8:9e:28:7c:b0:00", "Public IP": "47.38.141.115", "Network": "NAC-US-8317-Rockwall", "Serial number": "Q2KN-VJD8-RCED", "Usage": "114.26 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8319-1", "MAC address": "98:18:88:75:71:a4", "Public IP": "24.178.8.161", "Network": "NAC-US-8319-Burleson", "Serial number": "Q2HY-J774-V4KC", "Usage": "115.64 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8320-1", "MAC address": "e0:cb:bc:2c:4d:48", "Public IP": "70.112.98.170", "Network": "NAC-US-8320-Buda", "Serial number": "Q2KN-CLWX-3C9F", "Usage": "134.12 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8323-1", "MAC address": "98:18:88:c9:07:d4", "Public IP": "72.183.178.188", "Network": "NAC-US-8323-San Marcos", "Serial number": "Q2HY-HNUB-JWLG", "Usage": "8.68 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8343-1", "MAC address": "e0:cb:bc:bc:7a:b8", "Public IP": "75.181.55.29", "Network": "NAC-US-8343-Fort Mill", "Serial number": "Q2KN-UP76-7HG6", "Usage": "14.29 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8344-1", "MAC address": "ac:17:c8:c2:03:4f", "Public IP": "138.88.17.119", "Network": "NAC-US-8344-Washington", "Serial number": "Q2HY-PJLC-VSVE", "Usage": "12.00 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8365-1", "MAC address": "ac:17:c8:5d:fc:15", "Public IP": "172.56.67.236", "Network": "NAC-US-8365-Fort Walton Beach", "Serial number": "Q2HY-UVJ9-56GU", "Usage": "110.66 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8366-1", "MAC address": "e0:cb:bc:bc:46:88", "Public IP": "66.168.130.41", "Network": "NAC-US-8366-Grand Island", "Serial number": "Q2KN-SHH4-SZEZ", "Usage": "113.90 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8367-1", "MAC address": "98:18:88:75:85:0e", "Public IP": "96.247.207.197", "Network": "NAC-US-8367-Fredericksburg", "Serial number": "Q2HY-KEYK-T5YE", "Usage": "119.14 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8370-1", "MAC address": "e0:cb:bc:bc:b8:08", "Public IP": "74.194.96.221", "Network": "NAC-US-8370-Lake Charles", "Serial number": "Q2KN-X8G2-MBZ5", "Usage": "116.36 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8375-1", "MAC address": "e0:cb:bc:44:be:f0", "Public IP": "172.56.180.114", "Network": "NAC-US-8375-San Diego", "Serial number": "Q2KN-TZBJ-C68H", "Usage": "18.20 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8376-1", "MAC address": "ac:17:c8:5d:f3:4e", "Public IP": "76.134.180.236", "Network": "NAC-US-8376-Marana", "Serial number": "Q2HY-SZHP-QLGU", "Usage": "126.39 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8377-1", "MAC address": "ac:17:c8:5d:d4:29", "Public IP": "67.164.174.76", "Network": "NAC-US-8377-Fort Collins", "Serial number": "Q2HY-36RH-KK2N", "Usage": "8.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8378-1", "MAC address": "ac:17:c8:c1:a1:95", "Public IP": "24.178.94.65", "Network": "NAC-US-8378-Decatur", "Serial number": "Q2HY-W776-7W6Q", "Usage": "15.96 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8387-1", "MAC address": "e0:cb:bc:bb:df:00", "Public IP": "75.109.164.197", "Network": "NAC-US-8387-Midland", "Serial number": "Q2KN-MYVL-8ZNT", "Usage": "42.33 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8388-1", "MAC address": "e0:cb:bc:bc:21:18", "Public IP": "72.24.141.159", "Network": "NAC-US-8388-Odessa", "Serial number": "Q2KN-QSXD-YRBA", "Usage": "55.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8391-1", "MAC address": "ac:17:c8:5d:f2:bb", "Public IP": "76.91.169.75", "Network": "NAC-US-8391-Los Angeles", "Serial number": "Q2HY-SVQM-TK9U", "Usage": "12.28 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8392-1", "MAC address": "0c:8d:db:e3:24:90", "Public IP": "98.195.219.232", "Network": "NAC-US-8392-Galveston", "Serial number": "Q2KN-38Z2-MGPY", "Usage": "116.66 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R8394-1", "MAC address": "98:18:88:74:81:66", "Public IP": "173.172.153.68", "Network": "NAC-US-8394-Murphy", "Serial number": "Q2HY-2NTW-VPAV", "Usage": "7.21 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8396-1", "MAC address": "0c:8d:db:e1:69:90", "Public IP": "47.4.98.71", "Network": "NAC-US-8396-Watauga", "Serial number": "Q2KN-GP38-RG4K", "Usage": "11.22 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8398-1", "MAC address": "2c:3f:0b:ad:db:50", "Public IP": "47.24.94.114", "Network": "NAC-US-8398-Keller", "Serial number": "Q2KN-FEKW-8XJ8", "Usage": "7.53 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R8399-1", "MAC address": "0c:8d:db:e0:8c:90", "Public IP": "24.162.65.183", "Network": "NAC-US-8399-Dallas", "Serial number": "Q2KN-7LKE-QUY8", "Usage": "110.34 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9100-1", "MAC address": "98:18:88:75:81:bf", "Public IP": "96.28.182.35", "Network": "NAC-US-9100-Louisville", "Serial number": "Q2HY-K8S6-QPSF", "Usage": "127.69 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9101-1", "MAC address": "0c:8d:db:85:cf:58", "Public IP": "174.96.181.187", "Network": "NAC-US-9101-Louisville", "Serial number": "Q2KN-RLRJ-9XGY", "Usage": "31.50 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9102-1", "MAC address": "ac:17:c8:5d:fc:ee", "Public IP": "192.180.167.173", "Network": "NAC-US-9102-Louisville", "Serial number": "Q2HY-V2P9-BZ2Q", "Usage": "11.73 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9103-1", "MAC address": "ac:17:c8:c1:a1:b8", "Public IP": "96.29.129.112", "Network": "NAC-US-9103-Louisville", "Serial number": "Q2HY-W8SB-JX8Z", "Usage": "18.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9105-1", "MAC address": "ac:17:c8:5d:f7:53", "Public IP": "96.29.208.110", "Network": "NAC-US-9105-Louisville", "Serial number": "Q2HY-TUYW-MP2Y", "Usage": "22.58 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9108-1", "MAC address": "ac:17:c8:c1:a2:fa", "Public IP": "74.140.84.176", "Network": "NAC-US-9108-Louisville", "Serial number": "Q2HY-WG6Y-7BHU", "Usage": "8.99 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9112-1", "MAC address": "0c:8d:db:92:03:d8", "Public IP": "65.189.94.92", "Network": "NAC-US-9112-New Albany", "Serial number": "Q2KN-LACP-FVQH", "Usage": "18.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9113-1", "MAC address": "ac:17:c8:5d:79:06", "Public IP": "75.81.239.151", "Network": "NAC-US-9113-Louisville", "Serial number": "Q2HY-3LC8-2XMG", "Usage": "28.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9114-1", "MAC address": "98:18:88:75:7b:2f", "Public IP": "74.131.70.11", "Network": "NAC-US-9114-Jeffersonville", "Serial number": "Q2HY-JSNC-KMJZ", "Usage": "28.03 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9116-1", "MAC address": "e0:cb:bc:bb:9a:90", "Public IP": "192.181.146.44", "Network": "NAC-US-9116-Lexington", "Serial number": "Q2KN-K6FL-YVVT", "Usage": "117.52 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9117-1", "MAC address": "98:18:88:75:5b:8c", "Public IP": "74.138.107.254", "Network": "NAC-US-9117-Lexington", "Serial number": "Q2HY-GS7M-NZGK", "Usage": "10.29 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9118-1", "MAC address": "e0:cb:bc:bb:65:60", "Public IP": "12.190.236.105", "Network": "NAC-US-9118-Evansville", "Serial number": "Q2KN-GX8M-DGDB", "Usage": "17.61 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9119-1", "MAC address": "ac:17:c8:5d:7d:19", "Public IP": "24.26.9.35", "Network": "NAC-US-9119-Owensboro", "Serial number": "Q2HY-4EUF-N2ZQ", "Usage": "117.14 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9122-1", "MAC address": "0c:8d:db:85:82:08", "Public IP": "65.28.241.85", "Network": "NAC-US-9122-Cincinnati", "Serial number": "Q2KN-GR3P-P3SY", "Usage": "46.59 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9124-1", "MAC address": "2c:3f:0b:ad:db:00", "Public IP": "65.24.139.247", "Network": "NAC-US-9124-Cincinnati", "Serial number": "Q2KN-FE24-SRJA", "Usage": "142.48 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9127-1", "MAC address": "0c:8d:db:62:78:10", "Public IP": "74.139.39.222", "Network": "NAC-US-9127-Florence", "Serial number": "Q2KN-SLUM-6DJQ", "Usage": "17.02 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9131-1", "MAC address": "0c:8d:db:85:b1:68", "Public IP": "174.193.120.22", "Network": "NAC-US-9131-Cincinnati", "Serial number": "Q2KN-N7HB-9R2K", "Usage": "10.08 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9132-1", "MAC address": "0c:8d:db:8e:4f:70", "Public IP": "74.141.207.190", "Network": "NAC-US-9132-Ft Wright", "Serial number": "Q2KN-7QS3-PV2H", "Usage": "10.32 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9134-1", "MAC address": "0c:8d:db:62:58:c8", "Public IP": "184.54.154.56", "Network": "NAC-US-9134-Eastgate", "Serial number": "Q2KN-QNWZ-3JJ5", "Usage": "9.10 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9135-1", "MAC address": "ac:17:c8:5d:83:e1", "Public IP": "74.135.64.50", "Network": "NAC-US-9135-Miamisburg", "Serial number": "Q2HY-5YQL-A2ZG", "Usage": "115.04 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9140-1", "MAC address": "e0:cb:bc:bb:05:e0", "Public IP": "99.138.131.21", "Network": "NAC-US-9140-Nashville", "Serial number": "Q2KN-CUPW-GUAL", "Usage": "8.79 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9142-1", "MAC address": "e0:cb:bc:98:d7:20", "Public IP": "12.190.236.108", "Network": "NAC-US-9142-Nashville", "Serial number": "Q2KN-ATH3-P5NQ", "Usage": "10.97 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9143-1", "MAC address": "0c:8d:db:85:81:f8", "Public IP": "73.253.57.123", "Network": "NAC-US-9143-Springfield", "Serial number": "Q2KN-GQS6-LHNV", "Usage": "42.65 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9144-1", "MAC address": "ac:17:c8:5d:ee:bd", "Public IP": "71.203.254.210", "Network": "NAC-US-9144-Gallatin", "Serial number": "Q2HY-S3Y7-AR2R", "Usage": "21.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9145-1", "MAC address": "ac:17:c8:5d:d7:a2", "Public IP": "68.53.28.112", "Network": "NAC-US-9145-Hendersonville", "Serial number": "Q2HY-3Y24-3JXD", "Usage": "77.97 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9147-1", "MAC address": "ac:17:c8:c1:a0:ca", "Public IP": "24.151.214.178", "Network": "NAC-US-9147-Clarksville", "Serial number": "Q2HY-VZB6-6WLK", "Usage": "142.99 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9148-1", "MAC address": "0c:8d:db:91:a9:08", "Public IP": "71.67.133.155", "Network": "NAC-US-9148-Bowling Green", "Serial number": "Q2KN-FQLV-SZP4", "Usage": "11.91 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9149-1", "MAC address": "e0:cb:bc:98:4b:68", "Public IP": "68.118.110.106", "Network": "NAC-US-9149-Jackson", "Serial number": "Q2KN-4RS3-M2BX", "Usage": "15.38 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9150-1", "MAC address": "e0:cb:bc:bb:11:58", "Public IP": "76.22.142.151", "Network": "NAC-US-9150-Madison", "Serial number": "Q2KN-DCNB-G2WY", "Usage": "32.77 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9151-1", "MAC address": "0c:8d:db:85:83:68", "Public IP": "24.11.222.206", "Network": "NAC-US-9151-Nashville", "Serial number": "Q2KN-GW4Q-CFG8", "Usage": "121.12 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9153-1", "MAC address": "ac:17:c8:cd:98:48", "Public IP": "174.161.193.164", "Network": "NAC-US-9153-Memphis", "Serial number": "Q2KN-47HA-6CN3", "Usage": "40.04 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9162-1", "MAC address": "e0:cb:bc:bc:43:68", "Public IP": "108.189.159.28", "Network": "NAC-US-9162-Orlando", "Serial number": "Q2KN-SDSL-Q4H5", "Usage": "39.22 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9164-1", "MAC address": "0c:8d:db:61:0b:68", "Public IP": "76.128.57.66", "Network": "NAC-US-9164-Greenacres", "Serial number": "Q2KN-3HYV-WTT7", "Usage": "106.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9165-1", "MAC address": "ac:17:c8:5d:f0:14", "Public IP": "108.188.177.78", "Network": "NAC-US-9165-Kissimmee", "Serial number": "Q2HY-SDER-Y8CY", "Usage": "11.16 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9166-1", "MAC address": "ac:17:c8:cd:b7:68", "Public IP": "73.35.70.61", "Network": "NAC-US-9166-Jacksonville", "Serial number": "Q2KN-AMCW-YRGU", "Usage": "14.10 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9167-1", "MAC address": "e0:cb:bc:bc:79:b0", "Public IP": "98.204.185.97", "Network": "NAC-US-9167-Curtis Bay", "Serial number": "Q2KN-UN3V-HU3R", "Usage": "11.82 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9169-1", "MAC address": "e0:cb:bc:bc:7a:e8", "Public IP": "35.143.5.216", "Network": "NAC-US-9169-Winter Haven", "Serial number": "Q2KN-UPB8-L99M", "Usage": "11.38 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9170-1", "MAC address": "ac:17:c8:c1:aa:b0", "Public IP": "108.191.20.157", "Network": "NAC-US-9170-Lakeland", "Serial number": "Q2HY-Y98L-B6MV", "Usage": "113.69 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9171-1", "MAC address": "0c:8d:db:62:d8:50", "Public IP": "47.205.83.241", "Network": "NAC-US-9171-Tampa", "Serial number": "Q2KN-2TD7-BNHH", "Usage": "30.14 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9173-2", "MAC address": "a8:46:9d:74:5a:18", "Public IP": "98.230.28.91", "Network": "NAC-US-9173-Tallahassee", "Serial number": "Q2KN-274U-GCZZ", "Usage": "10.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9174-1", "MAC address": "ac:17:c8:5d:d0:94", "Public IP": "75.113.215.122", "Network": "NAC-US-9174-Clearwater", "Serial number": "Q2HY-26CV-SACW", "Usage": "115.90 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9175-1", "MAC address": "e0:cb:bc:bc:44:a0", "Public IP": "72.186.138.171", "Network": "NAC-US-9175-St Petersburg ", "Serial number": "Q2KN-SEZN-T9UQ", "Usage": "125.90 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9176-1", "MAC address": "98:18:88:75:43:59", "Public IP": "108.190.55.111", "Network": "NAC-US-9176-Palm Harbor", "Serial number": "Q2HY-F9VH-AP8N", "Usage": "136.09 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9177-1", "MAC address": "0c:8d:db:c3:36:e8", "Public IP": "72.219.214.143", "Network": "NAC-US-9177-Ocala", "Serial number": "Q2KN-YQPU-FDB8", "Usage": "10.83 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9178-1", "MAC address": "bc:db:09:bd:cf:5a", "Public IP": "70.164.194.62", "Network": "NAC-US-9178-Gainesville", "Serial number": "Q2HY-D8D7-7CSS", "Usage": "117.79 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9181-1", "MAC address": "ac:17:c8:5d:d3:7a", "Public IP": "73.55.67.201", "Network": "NAC-US-9181-Sarasota", "Serial number": "Q2HY-2YZS-JH7D", "Usage": "16.80 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9183-1", "MAC address": "e0:cb:bc:bc:46:a0", "Public IP": "73.27.111.167", "Network": "NAC-US-9183-Sarasota", "Serial number": "Q2KN-SHPZ-ZX43", "Usage": "19.15 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9184-1", "MAC address": "e0:cb:bc:bc:78:68", "Public IP": "71.200.223.160", "Network": "NAC-US-9184-Naples", "Serial number": "Q2KN-UL8N-KHJK", "Usage": "22.78 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9185-1", "MAC address": "e0:cb:bc:bc:b4:40", "Public IP": "76.101.70.60", "Network": "NAC-US-9185-Ft Myers", "Serial number": "Q2KN-X468-N4XA", "Usage": "20.95 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9186-1", "MAC address": "ac:17:c8:5d:fe:7d", "Public IP": "184.88.157.122", "Network": "NAC-US-9186-Melbourne", "Serial number": "Q2HY-VC5D-3AHQ", "Usage": "129.26 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9187-1", "MAC address": "ac:17:c8:5d:75:7f", "Public IP": "73.0.44.137", "Network": "NAC-US-9187-Delray Beach", "Serial number": "Q2HY-2UBW-3XQJ", "Usage": "13.53 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9189-1", "MAC address": "ac:17:c8:c1:ac:07", "Public IP": "71.11.23.81", "Network": "NAC-US-9189-Worcester", "Serial number": "Q2HY-YM9G-LJPA", "Usage": "9.98 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9190-1", "MAC address": "e0:cb:bc:bc:98:e0", "Public IP": "76.128.193.133", "Network": "NAC-US-9190-Deerfield Beach", "Serial number": "Q2KN-VXK6-QGYC", "Usage": "12.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9192-1", "MAC address": "ac:17:c8:5d:f4:19", "Public IP": "76.110.209.98", "Network": "NAC-US-9192-Jupiter", "Serial number": "Q2HY-T6V2-Q843", "Usage": "29.97 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9193-1", "MAC address": "ac:17:c8:5d:f8:aa", "Public IP": "174.48.164.1", "Network": "NAC-US-9193-Lake Park", "Serial number": "Q2HY-U5BM-5WRC", "Usage": "12.08 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9194-1", "MAC address": "e0:cb:bc:bb:19:98", "Public IP": "67.86.192.101", "Network": "NAC-US-9194-Bridgeport", "Serial number": "Q2KN-DP75-6H4C", "Usage": "11.75 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9195-1", "MAC address": "ac:17:c8:5d:ff:25", "Public IP": "98.254.8.64", "Network": "NAC-US-9195-Palmetto Plams ", "Serial number": "Q2HY-VG8X-JFAA", "Usage": "28.69 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9196-1", "MAC address": "ac:17:c8:5d:76:e4", "Public IP": "174.48.34.91", "Network": "NAC-US-9196-Stuart ", "Serial number": "Q2HY-365N-U66X", "Usage": "17.39 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9197-1", "MAC address": "34:56:fe:c5:ef:20", "Public IP": "73.244.162.77", "Network": "NAC-US-9197-Vero Beach", "Serial number": "Q2KN-ATVS-B4LA", "Usage": "13.70 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9198-1", "MAC address": "e0:cb:bc:98:ff:28", "Public IP": "73.46.162.218", "Network": "NAC-US-9198-Ft Lauderdale", "Serial number": "Q2KN-CKXZ-KDBQ", "Usage": "135.95 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9199-1", "MAC address": "0c:8d:db:63:45:b0", "Public IP": "216.53.147.199", "Network": "NAC-US-9199-Reedy Creek", "Serial number": "Q2KN-XUZW-R5JU", "Usage": "131.28 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9200-1", "MAC address": "0c:8d:db:62:db:a8", "Public IP": "155.186.185.42", "Network": "NAC-US-9200-Lawrenceville", "Serial number": "Q2KN-3272-2SFP", "Usage": "14.33 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9201-1", "MAC address": "0c:8d:db:61:1d:28", "Public IP": "98.62.223.39", "Network": "NAC-US-9201-Conyers", "Serial number": "Q2KN-4MPC-VQ9Y", "Usage": "21.74 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9202-1", "MAC address": "98:18:88:75:76:f2", "Public IP": "73.143.254.228", "Network": "NAC-US-9202-Danbury", "Serial number": "Q2HY-JJ67-WMTT", "Usage": "52.54 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9206-1", "MAC address": "ac:17:c8:5d:d1:c1", "Public IP": "73.16.19.250", "Network": "NAC-US-9206-New Haven", "Serial number": "Q2HY-2KXL-QZZ7", "Usage": "11.51 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9207-1", "MAC address": "e0:cb:bc:44:f7:68", "Public IP": "98.181.70.224", "Network": "NAC-US-9207-Warner Robins", "Serial number": "Q2KN-YFJ2-VC8H", "Usage": "9.97 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9208-1", "MAC address": "e0:cb:bc:bc:b3:b8", "Public IP": "173.22.23.169", "Network": "NAC-US-9208-Albany", "Serial number": "Q2KN-X38B-H4JB", "Usage": "14.57 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9209-1", "MAC address": "ac:17:c8:5d:fc:bd", "Public IP": "172.56.76.214", "Network": "NAC-US-9209-Valdosta", "Serial number": "Q2HY-UZKC-2KSZ", "Usage": "10.20 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9210-1", "MAC address": "ac:17:c8:c1:a9:21", "Public IP": "172.56.67.94", "Network": "NAC-US-9210-Macon", "Serial number": "Q2HY-XTXW-S6TH", "Usage": "16.01 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9211-1", "MAC address": "0c:8d:db:91:17:00", "Public IP": "155.186.168.134", "Network": "NAC-US-9211-Atlanta", "Serial number": "Q2KN-8CM3-F67X", "Usage": "18.62 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9212-1", "MAC address": "0c:8d:db:62:78:58", "Public IP": "24.158.246.73", "Network": "NAC-US-9212-Athens", "Serial number": "Q2KN-SMBC-9LDF", "Usage": "9.73 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9214-1", "MAC address": "e0:cb:bc:98:fe:78", "Public IP": "24.216.42.88", "Network": "NAC-US-9214-Stockbridge", "Serial number": "Q2KN-CJWN-SJ6K", "Usage": "14.92 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9215-1", "MAC address": "0c:8d:db:85:4c:d8", "Public IP": "174.163.41.133", "Network": "NAC-US-9215-Atlanta", "Serial number": "Q2KN-AP8L-4VSC", "Usage": "115.68 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9217-1", "MAC address": "0c:8d:db:8d:bf:18", "Public IP": "12.190.236.107", "Network": "NAC-US-9217-Marietta", "Serial number": "Q2KN-Y8SC-89LF", "Usage": "120.47 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9218-1", "MAC address": "98:18:88:75:61:43", "Public IP": "67.191.128.140", "Network": "NAC-US-9218-Tucker", "Serial number": "Q2HY-H6HJ-QYXL", "Usage": "12.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9222-1", "MAC address": "ac:17:c8:c1:af:3a", "Public IP": "24.107.241.22", "Network": "NAC-US-9222-Dalton", "Serial number": "Q2HY-ZC22-E4QE", "Usage": "9.75 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9223-1", "MAC address": "0c:8d:db:85:ce:f0", "Public IP": "73.207.230.147", "Network": "NAC-US-9223-Acworth", "Serial number": "Q2KN-RKH7-S2HB", "Usage": "9.10 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9224-1", "MAC address": "98:18:88:75:7c:1d", "Public IP": "76.111.55.201", "Network": "NAC-US-9224-Hiram", "Serial number": "Q2HY-JUC6-2LPE", "Usage": "11.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9226-1", "MAC address": "ac:17:c8:5d:ee:54", "Public IP": "68.54.185.47", "Network": "NAC-US-9226-Chattanooga", "Serial number": "Q2HY-RYDZ-HPLQ", "Usage": "114.29 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9227-1", "MAC address": "0c:8d:db:e0:e7:c0", "Public IP": "74.205.140.163", "Network": "NAC-US-9227-Chattanooga", "Serial number": "Q2KN-BBMS-GDZR", "Usage": "16.85 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9228-1", "MAC address": "e0:cb:bc:bc:b6:a8", "Public IP": "68.42.34.171", "Network": "NAC-US-9228-Huntsville", "Serial number": "Q2KN-X6SZ-RR8S", "Usage": "123.24 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9229-1", "MAC address": "0c:8d:db:8d:cd:50", "Public IP": "76.145.230.236", "Network": "NAC-US-9229-Woodstock", "Serial number": "Q2KN-ZSV8-XWBN", "Usage": "12.74 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9231-1", "MAC address": "cc:9c:3e:42:cb:dc", "Public IP": "2607:fb90:7583:875e:ce9c:3eff:fe42:cbdd", "Network": "NAC-US-9231-Florence", "Serial number": "Q2HY-UMRY-B74E", "Usage": "85.94 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9239-1", "MAC address": "0c:8d:db:85:6b:10", "Public IP": "104.166.196.67", "Network": "NAC-US-9239-Columbia", "Serial number": "Q2KN-DW6S-MPWY", "Usage": "11.92 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9240-1", "MAC address": "0c:8d:db:85:85:60", "Public IP": "75.181.166.43", "Network": "NAC-US-9240-Charlotte", "Serial number": "Q2KN-H573-EP6S", "Usage": "14.76 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9241-1", "MAC address": "ac:17:c8:5d:8b:f2", "Public IP": "172.72.146.228", "Network": "NAC-US-9241-Charlotte", "Serial number": "Q2HY-7RHN-AAEZ", "Usage": "14.04 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9243-1", "MAC address": "ac:17:c8:c1:ae:5a", "Public IP": "174.108.83.176", "Network": "NAC-US-9243-Matthews", "Serial number": "Q2HY-Z5PE-BWEV", "Usage": "22.54 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9245-1", "MAC address": "e0:cb:bc:bc:7f:70", "Public IP": "67.197.176.31", "Network": "NAC-US-9245-Rock Hill", "Serial number": "Q2KN-UVDL-69WR", "Usage": "13.56 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9248-2", "MAC address": "e0:cb:bc:bc:5e:88", "Public IP": "174.110.145.178", "Network": "NAC-US-9248-Florence", "Serial number": "Q2KN-TJXK-5VPL", "Usage": "7.65 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9249-1", "MAC address": "0c:8d:db:62:d6:40", "Public IP": "174.97.81.2", "Network": "NAC-US-9249-Hamilton", "Serial number": "Q2KN-2QA7-MPK3", "Usage": "11.58 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9250-1", "MAC address": "ac:17:c8:5d:f0:30", "Public IP": "66.191.187.94", "Network": "NAC-US-9250-Mauldin", "Serial number": "Q2HY-SDX6-PT65", "Usage": "8.75 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9251-1", "MAC address": "ac:17:c8:5d:7c:cc", "Public IP": "73.233.123.11", "Network": "NAC-US-9251-Philadelphia", "Serial number": "Q2HY-4DD5-PU6K", "Usage": "15.76 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9255-1", "MAC address": "e0:cb:bc:44:bb:78", "Public IP": "50.195.135.110", "Network": "NAC-US-9255-Indianapolis", "Serial number": "Q2KN-TQDE-U4YQ", "Usage": "10.49 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9257-1", "MAC address": "ac:17:c8:5d:ee:46", "Public IP": "107.147.137.94", "Network": "NAC-US-9257-Avon", "Serial number": "Q2HY-RYBA-LNM5", "Usage": "25.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9259-1", "MAC address": "cc:9c:3e:42:de:9e", "Public IP": "99.137.53.57", "Network": "NAC-US-9259-Fishers", "Serial number": "Q2HY-VLLJ-GPHB", "Usage": "115.84 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9260-1", "MAC address": "ac:17:c8:0f:ff:d0", "Public IP": "50.251.24.10", "Network": "NAC-US-9260-Carmel", "Serial number": "Q2KN-2XBF-2UXA", "Usage": "125.43 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9262-1", "MAC address": "e0:cb:bc:bb:e6:18", "Public IP": "73.168.229.111", "Network": "NAC-US-9262-Westfield", "Serial number": "Q2KN-NB9W-L7PA", "Usage": "10.57 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9264-1", "MAC address": "ac:17:c8:c1:a0:37", "Public IP": "75.186.106.213", "Network": "NAC-US-9264-Terre Haute", "Serial number": "Q2HY-VVWH-AXJ6", "Usage": "10.98 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9265-1", "MAC address": "ac:17:c8:5d:fe:61", "Public IP": "172.58.149.27", "Network": "NAC-US-9265-Vincennes", "Serial number": "Q2HY-VBBY-3XCZ", "Usage": "10.33 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9268-1", "MAC address": "ac:17:c8:5d:f4:43", "Public IP": "68.45.32.235", "Network": "NAC-US-9268-Fishers", "Serial number": "Q2HY-T7Q2-L6Y9", "Usage": "24.76 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9269-1", "MAC address": "a8:46:9d:73:ee:00", "Public IP": "98.253.194.189", "Network": "NAC-US-9269-Indianapolis", "Serial number": "Q2KN-EXYQ-TN5E", "Usage": "49.89 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9270-1", "MAC address": "e0:cb:bc:44:bb:48", "Public IP": "68.45.209.124", "Network": "NAC-US-9270-Ft.Wayne", "Serial number": "Q2KN-TQ43-6J43", "Usage": "109.94 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9271-1", "MAC address": "0c:8d:db:85:51:e8", "Public IP": "76.182.153.125", "Network": "NAC-US-9271-Columbus", "Serial number": "Q2KN-B94W-C5BT", "Usage": "24.60 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9274-1", "MAC address": "ac:17:c8:5d:d4:68", "Public IP": "74.126.75.223", "Network": "NAC-US-9274-Chillicothe", "Serial number": "Q2HY-38F3-894Q", "Usage": "10.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9275-1", "MAC address": "ac:17:c8:5d:ee:d9", "Public IP": "75.164.56.156", "Network": "NAC-US-9275-Bend", "Serial number": "Q2HY-S543-JMY8", "Usage": "113.43 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9279-1", "MAC address": "e0:cb:bc:44:d1:c8", "Public IP": "74.137.146.217", "Network": "NAC-US-9279-Columbus", "Serial number": "Q2KN-VGUA-EJPE", "Usage": "123.94 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9281-1", "MAC address": "ac:17:c8:5d:f8:fe", "Public IP": "65.185.144.231", "Network": "NAC-US-9281-Grove City", "Serial number": "Q2HY-U7S2-LD4V", "Usage": "115.41 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9282-1", "MAC address": "e0:cb:bc:bc:b4:98", "Public IP": "75.179.191.147", "Network": "NAC-US-9282-Hilliard", "Serial number": "Q2KN-X4LP-RLS2", "Usage": "12.02 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9284-1", "MAC address": "ac:17:c8:5d:e3:25", "Public IP": "75.71.240.208", "Network": "NAC-US-9284-Aurora", "Serial number": "Q2HY-PQ2L-7KCY", "Usage": "13.72 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9286-1", "MAC address": "ac:17:c8:5d:d8:7b", "Public IP": "198.37.225.6", "Network": "NAC-US-9286-Ashland", "Serial number": "Q2HY-4682-8824", "Usage": "11.23 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9287-1", "MAC address": "e0:cb:bc:bc:b4:20", "Public IP": "173.30.56.117", "Network": "NAC-US-9287-Dubuque", "Serial number": "Q2KN-X3ZN-N7VD", "Usage": "10.46 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9288-1", "MAC address": "e0:cb:bc:bc:99:b0", "Public IP": "24.140.35.29", "Network": "NAC-US-9288-Wooster", "Serial number": "Q2KN-VYEC-4VYC", "Usage": "113.45 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9289-1", "MAC address": "98:18:88:75:76:dd", "Public IP": "68.81.192.230", "Network": "NAC-US-9289-Philadelphia", "Serial number": "Q2HY-JHTV-ZP2G", "Usage": "114.10 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9293-1", "MAC address": "e0:cb:bc:bc:78:b8", "Public IP": "71.11.60.125", "Network": "NAC-US-9293-Kill Devil Hills", "Serial number": "Q2KN-ULPN-B5KP", "Usage": "11.40 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9294-1", "MAC address": "bc:db:09:bd:6a:d6", "Public IP": "73.108.48.163", "Network": "NAC-US-9294-Knoxville", "Serial number": "Q2HY-8TQZ-7E8H", "Usage": "10.33 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9296-1", "MAC address": "ac:17:c8:c1:ac:00", "Public IP": "68.114.154.154", "Network": "NAC-US-9296-Knoxville", "Serial number": "Q2HY-YM78-9LDL", "Usage": "114.83 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9297-1", "MAC address": "f8:9e:28:7c:a5:18", "Public IP": "71.15.153.72", "Network": "NAC-US-9297-Kingsport", "Serial number": "Q2KN-UT3K-JBDS", "Usage": "10.76 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9298-1", "MAC address": "ac:17:c8:c1:a5:23", "Public IP": "68.114.146.29", "Network": "NAC-US-9298-Pigeon Forge", "Serial number": "Q2HY-WXY2-9VWK", "Usage": "13.53 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9301-1", "MAC address": "98:18:88:75:55:96", "Public IP": "104.231.24.216", "Network": "NAC-US-9301-Dayton", "Serial number": "Q2HY-GE7V-XP75", "Usage": "141.94 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9302-1", "MAC address": "ac:17:c8:c1:aa:be", "Public IP": "76.107.173.0", "Network": "NAC-US-9302-Olive Branch", "Serial number": "Q2HY-Y9KQ-943D", "Usage": "122.16 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9303-1", "MAC address": "e0:cb:bc:44:dd:e8", "Public IP": "73.103.23.224", "Network": "NAC-US-9303-Lafayette", "Serial number": "Q2KN-WGBF-LUDL", "Usage": "18.03 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9306-1", "MAC address": "ac:17:c8:5d:fe:3e", "Public IP": "98.252.240.99", "Network": "NAC-US-9306-Douglasville", "Serial number": "Q2HY-VAC9-JXDC", "Usage": "14.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9314-1", "MAC address": "ac:17:c8:c1:a6:ff", "Public IP": "172.59.217.92", "Network": "NAC-US-9314-North Charleston", "Serial number": "Q2HY-XC42-HHB6", "Usage": "28.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9315-1", "MAC address": "ac:17:c8:5d:d3:5e", "Public IP": "172.58.160.105", "Network": "NAC-US-9315-Kapaa", "Serial number": "Q2HY-2XPW-RM48", "Usage": "90.32 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9316-1", "MAC address": "e0:cb:bc:bc:21:c0", "Public IP": "174.110.100.105", "Network": "NAC-US-9316-Wilmington", "Serial number": "Q2KN-QTT9-J5XQ", "Usage": "18.39 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9317-1", "MAC address": "e0:cb:bc:bc:b7:f0", "Public IP": "108.191.96.216", "Network": "NAC-US-9317-Tampa", "Serial number": "Q2KN-X8CT-SY94", "Usage": "13.82 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9320-1", "MAC address": "e0:cb:bc:bc:f5:28", "Public IP": "108.190.127.79", "Network": "NAC-US-9320-Land O Lakes", "Serial number": "Q2KN-ZS8T-VN8C", "Usage": "10.49 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9322-1", "MAC address": "e0:cb:bc:bc:b7:00", "Public IP": "24.177.77.11", "Network": "NAC-US-9322-Spartanburg", "Serial number": "Q2KN-X74P-LH7G", "Usage": "75.74 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9334-1", "MAC address": "34:56:fe:c5:e8:c8", "Public IP": "174.176.244.5", "Network": "NAC-US-9334-Pembroke Pines", "Serial number": "Q2KN-9FCS-TMFY", "Usage": "10.61 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9335-1", "MAC address": "e0:cb:bc:44:be:48", "Public IP": "73.46.64.16", "Network": "NAC-US-9335-Miami", "Serial number": "Q2KN-TXZ4-BX5X", "Usage": "17.53 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9336-1", "MAC address": "ac:17:c8:5d:d3:ce", "Public IP": "108.189.179.20", "Network": "NAC-US-9336-Ormond Beach", "Serial number": "Q2HY-33D6-72DT", "Usage": "113.27 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9338-1", "MAC address": "e0:cb:bc:44:cc:00", "Public IP": "174.110.208.127", "Network": "NAC-US-9338-Fayetteville", "Serial number": "Q2KN-V2A7-JUBJ", "Usage": "10.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9347-1", "MAC address": "ac:17:c8:5d:7e:e0", "Public IP": "24.30.80.98", "Network": "NAC-US-9347-Canton", "Serial number": "Q2HY-4T3L-EV9G", "Usage": "89.12 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9348-1", "MAC address": "0c:8d:db:8d:e8:f0", "Public IP": "75.138.66.196", "Network": "NAC-US-9348-Smyrna", "Serial number": "Q2KN-37CH-3A8R", "Usage": "14.80 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9350-1", "MAC address": "ac:17:c8:c1:aa:ef", "Public IP": "75.42.42.108", "Network": "NAC-US-9350-Rome", "Serial number": "Q2HY-YBLC-PELF", "Usage": "127.88 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9351-1", "MAC address": "ac:17:c8:5d:f6:34", "Public IP": "159.235.99.85", "Network": "NAC-US-9351-Anderson", "Serial number": "Q2HY-TPDH-9H5E", "Usage": "14.59 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9354-1", "MAC address": "e0:cb:bc:bc:57:b8", "Public IP": "24.163.72.125", "Network": "NAC-US-9354-Durham", "Serial number": "Q2KN-T9H2-KEQD", "Usage": "11.62 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9356-1", "MAC address": "e0:cb:bc:bc:b6:00", "Public IP": "68.46.136.236", "Network": "NAC-US-9356-Jackson", "Serial number": "Q2KN-X65R-U5ZC", "Usage": "24.84 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9357-1", "MAC address": "0c:8d:db:91:88:80", "Public IP": "68.43.202.6", "Network": "NAC-US-9357-Flint", "Serial number": "Q2KN-E3L8-9NZW", "Usage": "9.48 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9375-1", "MAC address": "ac:17:c8:5d:7d:43", "Public IP": "2601:14f:8300:12e7:0:0:0:e610", "Network": "NAC-US-9375-Timonium", "Serial number": "Q2HY-4GCA-TND9", "Usage": "113.36 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9377-1", "MAC address": "e0:cb:bc:2a:c8:20", "Public IP": "76.99.33.1", "Network": "NAC-US-9377-Philadelphia", "Serial number": "Q2KN-QLTU-BCAH", "Usage": "9.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9381-1", "MAC address": "ac:17:c8:5d:e3:3a", "Public IP": "73.149.16.23", "Network": "NAC-US-9381-Woburn", "Serial number": "Q2HY-PR5N-LJ5M", "Usage": "22.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9384-1", "MAC address": "ac:17:c8:c1:b1:b7", "Public IP": "69.23.195.104", "Network": "NAC-US-9384-Dothan", "Serial number": "Q2HY-ZV6H-V2LB", "Usage": "14.30 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9387-1", "MAC address": "e0:cb:bc:bc:4d:80", "Public IP": "104.139.46.16", "Network": "NAC-US-9387-Gastonia", "Serial number": "Q2KN-STS9-BXMH", "Usage": "15.24 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9388-1", "MAC address": "e0:cb:bc:bb:19:80", "Public IP": "24.197.98.52", "Network": "NAC-US-9388-Greenville", "Serial number": "Q2KN-DP3T-RYRT", "Usage": "18.53 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9390-1", "MAC address": "ac:17:c8:5d:f7:d1", "Public IP": "45.36.11.125", "Network": "NAC-US-9390-Greensboro", "Serial number": "Q2HY-TY6R-FU9G", "Usage": "112.97 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9391-1", "MAC address": "e0:cb:bc:bc:b4:38", "Public IP": "173.174.72.153", "Network": "NAC-US-9391-Austin", "Serial number": "Q2KN-X446-M69P", "Usage": "22.49 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9392-1", "MAC address": "0c:8d:db:85:eb:28", "Public IP": "76.187.135.41", "Network": "NAC-US-9392-Dallas", "Serial number": "Q2KN-UWRB-STD2", "Usage": "32.72 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9394-1", "MAC address": "e0:cb:bc:bc:67:30", "Public IP": "71.91.194.124", "Network": "NAC-US-9394-St Peters", "Serial number": "Q2KN-TWWW-ZZKW", "Usage": "18.31 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9400-1", "MAC address": "0c:8d:db:63:47:b0", "Public IP": "98.156.69.69", "Network": "NAC-US-9400-Shawnee", "Serial number": "Q2KN-XZMY-EMUQ", "Usage": "11.49 GB", "Configuration status": "Not up to date"}, {"Model": "MX67C-NA", "Name": "R9401-1", "MAC address": "ac:17:c8:c1:ac:23", "Public IP": "76.92.193.177", "Network": "NAC-US-9401-Overland Park", "Serial number": "Q2HY-YN3G-EQBX", "Usage": "12.29 GB", "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R9402-1", "MAC address": "e0:cb:bc:bc:53:20", "Public IP": "172.59.197.68", "Network": "NAC-US-9402-Wichita", "Serial number": "Q2KN-T3F3-UTWF", "Usage": "14.39 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9406-1", "MAC address": "ac:17:c8:5d:e2:bc", "Public IP": "24.245.7.246", "Network": "NAC-US-9406-Plymouth", "Serial number": "Q2HY-PMGH-BTWB", "Usage": "121.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9408-1", "MAC address": "ac:17:c8:5d:7e:e7", "Public IP": "47.34.108.84", "Network": "NAC-US-9408-St Louis", "Serial number": "Q2HY-4TMG-XLUJ", "Usage": "12.96 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9413-1", "MAC address": "bc:db:09:bd:c7:65", "Public IP": "47.34.108.5", "Network": "NAC-US-9413-St louis", "Serial number": "Q2HY-CUR6-HZ52", "Usage": "34.61 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9416-1", "MAC address": "0c:8d:db:85:e0:a0", "Public IP": "68.119.254.138", "Network": "NAC-US-9416-St louis", "Serial number": "Q2KN-THXD-8UUU", "Usage": "17.49 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9417-1", "MAC address": "ac:17:c8:5d:fd:34", "Public IP": "172.221.138.110", "Network": "NAC-US-9417-O Fallon", "Serial number": "Q2HY-V448-CZNV", "Usage": "39.83 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9418-1", "MAC address": "ac:17:c8:5d:f7:4c", "Public IP": "67.184.123.56", "Network": "NAC-US-9418-Springfield", "Serial number": "Q2HY-TUXJ-PR5W", "Usage": "16.33 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9421-1", "MAC address": "ac:17:c8:c1:ac:ee", "Public IP": "65.186.72.229", "Network": "NAC-US-9421-Fairmont", "Serial number": "Q2HY-YT9Y-W9FS", "Usage": "33.68 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9423-1", "MAC address": "e0:cb:bc:44:d1:60", "Public IP": "73.251.158.110", "Network": "NAC-US-9423-Richmond", "Serial number": "Q2KN-VFV7-92SQ", "Usage": "13.26 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9424-1", "MAC address": "e0:cb:bc:bc:dc:28", "Public IP": "173.167.46.174", "Network": "NAC-US-9424-Richmond", "Serial number": "Q2KN-YQQS-5URY", "Usage": "193.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9427-1", "MAC address": "ac:17:c8:5d:fc:a1", "Public IP": "73.163.242.139", "Network": "NAC-US-9427-Forestville", "Serial number": "Q2HY-UYN9-GMLM", "Usage": "16.30 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9428-1", "MAC address": "ac:17:c8:c1:a7:68", "Public IP": "98.171.137.123", "Network": "NAC-US-9428-Lorton", "Serial number": "Q2HY-XF6J-R5XB", "Usage": "11.85 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9429-1", "MAC address": "ac:17:c8:c1:a6:d5", "Public IP": "98.218.36.252", "Network": "NAC-US-9429-Baltimore", "Serial number": "Q2HY-XB5B-9VFL", "Usage": "21.66 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9431-1", "MAC address": "98:18:88:75:43:60", "Public IP": "73.126.155.34", "Network": "NAC-US-9431-Hartford", "Serial number": "Q2HY-F9X8-HA26", "Usage": "12.65 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9434-1", "MAC address": "0c:8d:db:61:9f:10", "Public IP": "66.91.60.28", "Network": "NAC-US-9434-Honolulu", "Serial number": "Q2KN-CMM3-R4YN", "Usage": "35.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9437-1", "MAC address": "cc:9c:3e:42:ca:46", "Public IP": "67.172.228.26", "Network": "NAC-US-9437-Salt Lake City", "Serial number": "Q2HY-UKEX-A57N", "Usage": "18.69 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9442-1", "MAC address": "0c:8d:db:85:97:78", "Public IP": "71.194.7.220", "Network": "NAC-US-9442-Alsip", "Serial number": "Q2KN-K9DE-QSE2", "Usage": "15.82 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9443-1", "MAC address": "e0:cb:bc:bc:8b:00", "Public IP": "73.75.171.67", "Network": "NAC-US-9443-Stone Park", "Serial number": "Q2KN-VD9A-JLUR", "Usage": "29.36 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9444-1", "MAC address": "e0:cb:bc:98:ed:68", "Public IP": "172.58.188.113", "Network": "NAC-US-9444-Chicago", "Serial number": "Q2KN-BU82-TJMT", "Usage": "12.19 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9450-1", "MAC address": "e0:cb:bc:bc:96:38", "Public IP": "73.168.45.198", "Network": "NAC-US-9450-Elgin", "Serial number": "Q2KN-VTNU-3TG3", "Usage": "19.00 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9452-1", "MAC address": "98:18:88:75:86:b2", "Public IP": "172.56.10.132", "Network": "NAC-US-9452-Bettendorf", "Serial number": "Q2HY-KJ7X-PDD4", "Usage": "10.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9453-1", "MAC address": "ac:17:c8:5d:fd:2d", "Public IP": "24.209.184.165", "Network": "NAC-US-9453-West Milwaukee", "Serial number": "Q2HY-V3UJ-FT2E", "Usage": "10.45 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9455-1", "MAC address": "e0:cb:bc:44:d7:30", "Public IP": "107.147.226.42", "Network": "NAC-US-9455-Novi", "Serial number": "Q2KN-VYJH-KBVZ", "Usage": "18.37 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9456-1", "MAC address": "0c:8d:db:8e:26:b8", "Public IP": "24.127.129.133", "Network": "NAC-US-9456-Royal Oak", "Serial number": "Q2KN-5XK9-A395", "Usage": "12.19 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9457-1", "MAC address": "e0:cb:bc:bc:b4:68", "Public IP": "107.5.1.110", "Network": "NAC-US-9457-Shelby Township", "Serial number": "Q2KN-X4AE-4A42", "Usage": "16.96 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9458-1", "MAC address": "0c:8d:db:85:72:58", "Public IP": "68.37.48.56", "Network": "NAC-US-9458-Southfield", "Serial number": "Q2KN-ERDZ-545B", "Usage": "140.20 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9462-1", "MAC address": "cc:9c:3e:42:ed:69", "Public IP": "68.58.245.133", "Network": "NAC-US-9462-Waterford", "Serial number": "Q2HY-WBBD-YLW5", "Usage": "13.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9468-1", "MAC address": "ac:17:c8:5d:e3:5d", "Public IP": "73.253.136.119", "Network": "NAC-US-9468-Needham", "Serial number": "Q2HY-PRV6-8DZH", "Usage": "10.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9469-1", "MAC address": "ac:17:c8:5d:d9:38", "Public IP": "73.172.197.6", "Network": "NAC-US-9469-Rockville", "Serial number": "Q2HY-4CAW-3NRV", "Usage": "31.29 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9470-1", "MAC address": "ac:17:c8:5d:fc:93", "Public IP": "184.181.73.139", "Network": "NAC-US-9470-Chantilly", "Serial number": "Q2HY-UY9V-8X9H", "Usage": "11.46 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9471-1", "MAC address": "e0:cb:bc:bc:b4:50", "Public IP": "172.56.166.175", "Network": "NAC-US-9471-Warwick", "Serial number": "Q2KN-X475-GLV8", "Usage": "11.12 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9476-1", "MAC address": "e0:cb:bc:bc:43:58", "Public IP": "98.52.43.13", "Network": "NAC-US-9476-Hammond", "Serial number": "Q2KN-SDHD-HWBA", "Usage": "35.10 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9479-1", "MAC address": "e0:cb:bc:44:d2:20", "Public IP": "73.81.104.9", "Network": "NAC-US-9479-East Norriton", "Serial number": "Q2KN-VHX2-57PG", "Usage": "18.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9486-1", "MAC address": "bc:db:09:bd:8e:a1", "Public IP": "12.190.236.105", "Network": "NAC-US-9486-Lafayette", "Serial number": "Q2HY-AEMV-R8S2", "Usage": "115.52 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9489-1", "MAC address": "0c:8d:db:85:5e:f8", "Public IP": "96.11.236.46", "Network": "NAC-US-9489-Maineville", "Serial number": "Q2KN-CKR3-7BER", "Usage": "21.16 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9490-1", "MAC address": "e0:cb:bc:98:f6:88", "Public IP": "104.138.134.198", "Network": "NAC-US-9490-Winston Salem", "Serial number": "Q2KN-C7VN-A9B6", "Usage": "20.09 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9493-1", "MAC address": "e0:cb:bc:44:f7:10", "Public IP": "71.228.171.119", "Network": "NAC-US-9493-Franklin", "Serial number": "Q2KN-YERM-GYRD", "Usage": "13.60 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9494-1", "MAC address": "e0:cb:bc:44:d6:a8", "Public IP": "96.87.202.42", "Network": "NAC-US-9494-Mt. Juliet", "Serial number": "Q2KN-VX5J-QNGY", "Usage": "10.87 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9495-1", "MAC address": "bc:db:09:bd:8f:65", "Public IP": "69.138.50.0", "Network": "NAC-US-9495-Murfreesboro", "Serial number": "Q2HY-AFJJ-9MPQ", "Usage": "6.87 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9502-2", "MAC address": "68:3a:1e:7d:49:c8", "Public IP": "71.71.164.141", "Network": "NAC-US-9502-Mooresville", "Serial number": "Q2KN-T28F-552E", "Usage": "59.19 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9504-1", "MAC address": "98:18:88:75:61:e4", "Public IP": "76.151.160.11", "Network": "NAC-US-9504-Frederick", "Serial number": "Q2HY-H7RA-4EMF", "Usage": "21.96 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9506-1", "MAC address": "e0:cb:bc:bc:7a:a8", "Public IP": "173.90.42.210", "Network": "NAC-US-9506-Oakwood Village", "Serial number": "Q2KN-UP5Z-B2SB", "Usage": "10.36 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9562-1", "MAC address": "98:18:88:75:6b:3e", "Public IP": "172.58.175.166", "Network": "NAC-US-9562-Universal", "Serial number": "Q2HY-HS8V-JB6D", "Usage": "5.68 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9601-1", "MAC address": "bc:db:09:bd:60:72", "Public IP": "73.6.87.128", "Network": "NAC-US-9601-Pasadena", "Serial number": "Q2HY-8CMP-8UCA", "Usage": "5.42 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9602-1", "MAC address": "e0:cb:bc:bb:d1:a0", "Public IP": "24.182.100.92", "Network": "NAC-US-9602-Spring", "Serial number": "Q2KN-MF38-8RZP", "Usage": "15.17 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9603-1", "MAC address": "ac:17:c8:5d:83:5c", "Public IP": "73.77.212.146", "Network": "NAC-US-9603-Tomball", "Serial number": "Q2HY-5UUZ-PSA5", "Usage": "8.40 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9605-1", "MAC address": "0c:8d:db:91:f3:90", "Public IP": "76.30.139.93", "Network": "NAC-US-9605-Webster", "Serial number": "Q2KN-KE76-6RGH", "Usage": "125.38 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9606-1", "MAC address": "0c:8d:db:e2:f0:50", "Public IP": "76.30.167.137", "Network": "NAC-US-9606-Houston", "Serial number": "Q2KN-YRSB-4EHM", "Usage": "124.22 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9608-1", "MAC address": "ac:17:c8:5d:98:6a", "Public IP": "73.115.0.128", "Network": "NAC-US-9608-Houston", "Serial number": "Q2HY-AD3U-AR4Y", "Usage": "17.96 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9609-1", "MAC address": "bc:db:09:bd:8e:e7", "Public IP": "75.110.183.8", "Network": "NAC-US-9609-College Station", "Serial number": "Q2HY-AEY4-DWPN", "Usage": "111.74 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9610-1", "MAC address": "e0:cb:bc:bc:b7:08", "Public IP": "173.11.234.150", "Network": "NAC-US-9610-Sugarland", "Serial number": "Q2KN-X74Y-SLYT", "Usage": "116.12 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9611-1", "MAC address": "bc:db:09:bd:b7:43", "Public IP": "73.155.248.156", "Network": "NAC-US-9611-Houston", "Serial number": "Q2HY-C5SH-PFRU", "Usage": "10.58 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9612-1", "MAC address": "e0:cb:bc:98:f8:e8", "Public IP": "98.195.205.177", "Network": "NAC-US-9612-Katy", "Serial number": "Q2KN-CANU-8PMY", "Usage": "21.37 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9613-1", "MAC address": "0c:8d:db:91:88:58", "Public IP": "73.76.154.9", "Network": "NAC-US-9613-Humble", "Serial number": "Q2KN-E39K-4C8B", "Usage": "13.04 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9614-1", "MAC address": "e0:cb:bc:98:49:a0", "Public IP": "73.206.106.179", "Network": "NAC-US-9614-Conroe", "Serial number": "Q2KN-4NZH-DRRT", "Usage": "139.34 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9617-1", "MAC address": "0c:8d:db:e0:a7:08", "Public IP": "98.173.238.66", "Network": "NAC-US-9617-New Orleans", "Serial number": "Q2KN-8QSW-MHVM", "Usage": "10.36 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9618-1", "MAC address": "0c:8d:db:92:33:98", "Public IP": "73.166.76.236", "Network": "NAC-US-9618-Houston", "Serial number": "Q2KN-NRPF-F8YE", "Usage": "27.65 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9619-1", "MAC address": "e0:cb:bc:bc:b7:28", "Public IP": "98.201.82.87", "Network": "NAC-US-9619-Pearland", "Serial number": "Q2KN-X79S-TDZU", "Usage": "16.80 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9621-1", "MAC address": "cc:9c:3e:43:10:46", "Public IP": "172.56.51.221", "Network": "NAC-US-9621-Houston", "Serial number": "Q2HY-Y4ES-ESWN", "Usage": "23.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9623-1", "MAC address": "98:18:88:75:6a:49", "Public IP": "47.24.114.18", "Network": "NAC-US-9623-Denton", "Serial number": "Q2HY-HPZM-39NM", "Usage": "10.75 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9626-1", "MAC address": "e0:cb:bc:bc:b7:a8", "Public IP": "70.115.167.47", "Network": "NAC-US-9626-Pantego", "Serial number": "Q2KN-X85B-Y8QR", "Usage": "15.49 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9628-1", "MAC address": "98:18:88:75:7d:58", "Public IP": "74.195.122.55", "Network": "NAC-US-9628-San Angelo", "Serial number": "Q2HY-JWZE-HNWH", "Usage": "7.99 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9630-1", "MAC address": "cc:9c:3e:42:a7:c4", "Public IP": "172.58.180.241", "Network": "NAC-US-9630-Benbrook", "Serial number": "Q2HY-SQUU-E7WA", "Usage": "10.68 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9631-1", "MAC address": "e0:cb:bc:bc:f4:78", "Public IP": "70.119.192.176", "Network": "NAC-US-9631-Sunnyvale", "Serial number": "Q2KN-ZR4W-QL9U", "Usage": "9.59 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9632-1", "MAC address": "bc:db:09:bd:b8:bd", "Public IP": "75.110.173.8", "Network": "NAC-US-9632-Lubbock", "Serial number": "Q2HY-C7JV-HTG6", "Usage": "11.82 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9637-1", "MAC address": "e0:cb:bc:bb:78:70", "Public IP": "74.195.61.61", "Network": "NAC-US-9637-Amarillo", "Serial number": "Q2KN-HR72-B4Y9", "Usage": "16.12 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9638-1", "MAC address": "0c:8d:db:63:02:e0", "Public IP": "24.173.34.50", "Network": "NAC-US-9638-West Plano", "Serial number": "Q2KN-4YYC-NL3X", "Usage": "12.02 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9641-1", "MAC address": "0c:8d:db:85:bd:a8", "Public IP": "97.77.209.242", "Network": "NAC-US-9641-Dallas", "Serial number": "Q2KN-PK7G-UAZ9", "Usage": "34.86 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9642-1", "MAC address": "0c:8d:db:e2:8a:88", "Public IP": "76.182.228.243", "Network": "NAC-US-9642-Mckinney", "Serial number": "Q2KN-UL65-84CD", "Usage": "17.15 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9643-1", "MAC address": "0c:8d:db:62:c1:38", "Public IP": "68.113.217.130", "Network": "NAC-US-9643-Roanoke", "Serial number": "Q2KN-XCYF-M792", "Usage": "26.99 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9644-1", "MAC address": "0c:8d:db:85:cb:e0", "Public IP": "76.187.76.163", "Network": "NAC-US-9644-Frisco", "Serial number": "Q2KN-R7UC-4KZY", "Usage": "7.49 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9647-1", "MAC address": "e0:cb:bc:44:bb:c8", "Public IP": "73.87.107.197", "Network": "NAC-US-9647-Silver Spring", "Serial number": "Q2KN-TQXV-M3HW", "Usage": "12.96 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9650-1", "MAC address": "0c:8d:db:85:8e:88", "Public IP": "70.112.227.62", "Network": "NAC-US-9650-Austin", "Serial number": "Q2KN-J7W6-4Y9C", "Usage": "10.68 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9651-1", "MAC address": "0c:8d:db:85:45:18", "Public IP": "67.11.186.152", "Network": "NAC-US-9651-San Antonio", "Serial number": "Q2KN-9VT8-M8AQ", "Usage": "14.25 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9652-1", "MAC address": "0c:8d:db:85:d4:98", "Public IP": "70.123.229.147", "Network": "NAC-US-9652-Universal City", "Serial number": "Q2KN-S5NY-C3TU", "Usage": "13.86 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9654-1", "MAC address": "e0:cb:bc:bc:7a:18", "Public IP": "75.87.116.233", "Network": "NAC-US-9654-Corpus Christi", "Serial number": "Q2KN-UNRQ-RQRT", "Usage": "12.37 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9655-1", "MAC address": "e0:cb:bc:98:7a:88", "Public IP": "70.122.185.251", "Network": "NAC-US-9655-Mcallen", "Serial number": "Q2KN-6U88-HJ3V", "Usage": "11.94 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9656-1", "MAC address": "0c:8d:db:61:17:48", "Public IP": "24.27.57.177", "Network": "NAC-US-9656-Round Rock", "Serial number": "Q2KN-4ASB-7W6D", "Usage": "227.55 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9657-1", "MAC address": "e0:cb:bc:bb:c6:00", "Public IP": "24.170.62.43", "Network": "NAC-US-9657-Laredo", "Serial number": "Q2KN-LYSU-3UNC", "Usage": "123.40 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9658-1", "MAC address": "e0:cb:bc:98:1b:b0", "Public IP": "173.173.252.122", "Network": "NAC-US-9658-Harlingen", "Serial number": "Q2KN-2PRU-J6ZT", "Usage": "112.63 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9659-1", "MAC address": "0c:8d:db:85:85:30", "Public IP": "98.6.49.230", "Network": "NAC-US-9659-San Antonio", "Serial number": "Q2KN-H4RT-EWHK", "Usage": "12.25 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9660-1", "MAC address": "e0:cb:bc:bc:e0:68", "Public IP": "173.175.13.13", "Network": "NAC-US-9660-Killeen", "Serial number": "Q2KN-YVH3-94K3", "Usage": "118.69 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9661-1", "MAC address": "e0:cb:bc:bc:b3:e0", "Public IP": "24.28.29.60", "Network": "NAC-US-9661-Cedar Park", "Serial number": "Q2KN-X3JG-HMZL", "Usage": "16.80 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9662-1", "MAC address": "0c:8d:db:8d:c2:88", "Public IP": "24.26.244.169", "Network": "NAC-US-9662-San Antonio", "Serial number": "Q2KN-YMRQ-YD5U", "Usage": "11.72 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9663-1", "MAC address": "e0:cb:bc:bc:67:00", "Public IP": "70.112.210.229", "Network": "NAC-US-9663-Austin", "Serial number": "Q2KN-TWME-8S8B", "Usage": "11.01 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9665-1", "MAC address": "e0:cb:bc:bb:c5:a0", "Public IP": "70.117.183.31", "Network": "NAC-US-9665-Austin", "Serial number": "Q2KN-LYAN-2KLN", "Usage": "22.07 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9666-1", "MAC address": "0c:8d:db:85:4f:98", "Public IP": "66.190.64.160", "Network": "NAC-US-9666-Weatherford", "Serial number": "Q2KN-AY97-WJET", "Usage": "123.05 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9667-1", "MAC address": "e0:cb:bc:bb:68:10", "Public IP": "97.93.183.114", "Network": "NAC-US-9667-Fort Worth", "Serial number": "Q2KN-H36F-T8LB", "Usage": "11.03 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9669-1", "MAC address": "98:18:88:75:7a:db", "Public IP": "70.169.8.97", "Network": "NAC-US-9669-Virginia Beach", "Serial number": "Q2HY-JS8C-8689", "Usage": "8.74 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9673-1", "MAC address": "e0:cb:bc:bc:f5:30", "Public IP": "24.167.5.187", "Network": "NAC-US-9673-Brownsville", "Serial number": "Q2KN-ZSDK-RQ52", "Usage": "21.99 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9674-1", "MAC address": "0c:8d:db:8e:22:28", "Public IP": "75.87.115.174", "Network": "NAC-US-9674-Corpus Christi", "Serial number": "Q2KN-5R4V-DHCE", "Usage": "14.21 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9676-1", "MAC address": "e0:cb:bc:bc:b7:90", "Public IP": "24.160.22.17", "Network": "NAC-US-9676-New Braunfels", "Serial number": "Q2KN-X7WQ-YUWQ", "Usage": "37.43 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9677-1", "MAC address": "0c:8d:db:85:83:90", "Public IP": "76.143.157.140", "Network": "NAC-US-9677-Pasadena", "Serial number": "Q2KN-GWNX-LV83", "Usage": "41.02 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9680-1", "MAC address": "0c:8d:db:91:fd:a8", "Public IP": "173.174.229.101", "Network": "NAC-US-9680-San Antonio", "Serial number": "Q2KN-KWPZ-NK52", "Usage": "15.00 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9682-1", "MAC address": "0c:8d:db:85:78:88", "Public IP": "68.184.178.90", "Network": "NAC-US-9682-Mansfield", "Serial number": "Q2KN-FJC3-759K", "Usage": "8.01 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9708-1", "MAC address": "e0:cb:bc:bc:8a:98", "Public IP": "12.153.231.187", "Network": "NAC-US-9708-Little Rock", "Serial number": "Q2KN-VCRY-PN8J", "Usage": "20.23 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9709-1", "MAC address": "cc:9c:3e:42:ac:e8", "Public IP": "172.58.140.210", "Network": "NAC-US-9709-Ft Smith", "Serial number": "Q2HY-SZAD-PR3D", "Usage": "11.70 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9712-1", "MAC address": "0c:8d:db:85:83:48", "Public IP": "24.144.51.18", "Network": "NAC-US-9712-Conway", "Serial number": "Q2KN-GVP4-CAWJ", "Usage": "8.86 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9714-1", "MAC address": "98:18:88:75:76:e4", "Public IP": "24.160.27.144", "Network": "NAC-US-9714-Wichita Falls", "Serial number": "Q2HY-JHYK-UFP9", "Usage": "12.67 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9715-1", "MAC address": "0c:8d:db:85:ca:90", "Public IP": "172.58.250.236", "Network": "NAC-US-9715-Baton Rouge", "Serial number": "Q2KN-R4K8-X3YC", "Usage": "16.19 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9717-1", "MAC address": "e0:cb:bc:bc:b4:70", "Public IP": "73.151.123.235", "Network": "NAC-US-9717-Visalia", "Serial number": "Q2KN-X4GE-UV8S", "Usage": "41.70 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9718-1", "MAC address": "e0:cb:bc:bc:7a:e0", "Public IP": "99.22.13.41", "Network": "NAC-US-9718-Clovis", "Serial number": "Q2KN-UPAW-PDSN", "Usage": "9.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9721-1", "MAC address": "ac:17:c8:c1:a1:33", "Public IP": "76.87.182.227", "Network": "NAC-US-9721-Lancaster", "Serial number": "Q2HY-W4MD-YBU6", "Usage": "36.90 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9722-1", "MAC address": "ac:17:c8:5d:7c:8d", "Public IP": "2605:e000:ffc0:3f:7967:bd2d:5abf:2ed7", "Network": "NAC-US-9722-Palm Desert", "Serial number": "Q2HY-4C9T-QCQP", "Usage": "124.47 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9723-1", "MAC address": "e0:cb:bc:bc:b2:40", "Public IP": "98.238.149.172", "Network": "NAC-US-9723-Madera", "Serial number": "Q2KN-WYP4-BRNF", "Usage": "20.13 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9726-1", "MAC address": "ac:17:c8:c1:a9:36", "Public IP": "172.91.4.216", "Network": "NAC-US-9726-Los Angeles", "Serial number": "Q2HY-XURU-FC9E", "Usage": "30.15 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9729-1", "MAC address": "98:18:88:75:3c:98", "Public IP": "75.167.101.211", "Network": "NAC-US-9729-Casa Grande", "Serial number": "Q2HY-EV9U-EQCT", "Usage": "11.58 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9730-1", "MAC address": "e0:cb:bc:bc:51:a8", "Public IP": "63.226.108.254", "Network": "NAC-US-9730-Orem", "Serial number": "Q2KN-SZRE-XPWD", "Usage": "9.96 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9731-1", "MAC address": "e0:cb:bc:bc:b7:e0", "Public IP": "73.20.30.39", "Network": "NAC-US-9731-Riverdale", "Serial number": "Q2KN-X8AU-T2S8", "Usage": "12.10 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9733-1", "MAC address": "98:18:88:75:89:c2", "Public IP": "172.56.208.208", "Network": "NAC-US-9733-Las Vegas", "Serial number": "Q2HY-KPQ6-R7YQ", "Usage": "35.53 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9733-1", "MAC address": "0c:8d:db:91:7f:88", "Public IP": null, "Network": "NAC-US-0000-Prod-Test-NW", "Serial number": "Q2KN-DLQL-LCNQ", "Usage": null, "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R9734-1", "MAC address": "e0:cb:bc:bc:7a:a0", "Public IP": "72.130.140.123", "Network": "NAC-US-9734-Waipahu", "Serial number": "Q2KN-UP5N-K9UU", "Usage": "24.21 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9735-1", "MAC address": "e0:cb:bc:bb:d1:20", "Public IP": "72.130.65.41", "Network": "NAC-US-9735-Kahului", "Serial number": "Q2KN-MEFV-DRV5", "Usage": "9.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9736-1", "MAC address": "ac:17:c8:c1:aa:86", "Public IP": "70.91.223.125", "Network": "NAC-US-9736-Panama City", "Serial number": "Q2HY-Y87H-ZJEZ", "Usage": "11.08 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9737-1", "MAC address": "ac:17:c8:c1:a6:42", "Public IP": "68.35.233.79", "Network": "NAC-US-9737-Panama City Beach", "Serial number": "Q2HY-X8EN-TQ2L", "Usage": "9.01 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9739-1", "MAC address": "98:18:88:c9:25:40", "Public IP": "98.230.72.129", "Network": "NAC-US-9739-Tallahassee", "Serial number": "Q2HY-N8JE-H4JT", "Usage": "10.50 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9741-2", "MAC address": "e0:cb:bc:bc:81:98", "Public IP": "99.11.159.174", "Network": "NAC-US-9741-Riverside", "Serial number": "Q2KN-UYMZ-PFE2", "Usage": "116.90 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9742-1", "MAC address": "0c:8d:db:85:83:88", "Public IP": "24.10.204.113", "Network": "NAC-US-9742-Midvale", "Serial number": "Q2KN-GWFN-NY38", "Usage": "10.30 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9743-1", "MAC address": "0c:8d:db:85:4f:f0", "Public IP": "172.56.208.48", "Network": "NAC-US-9743-Tucson", "Serial number": "Q2KN-AZJQ-CMJ7", "Usage": "28.65 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9747-1", "MAC address": "ac:17:c8:5d:fc:a8", "Public IP": "172.56.209.8", "Network": "NAC-US-9747-Peoria", "Serial number": "Q2HY-UYTF-MMG7", "Usage": "110.37 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9763-1", "MAC address": "e0:cb:bc:98:c7:00", "Public IP": "172.56.209.149", "Network": "NAC-US-9763-Flagstaff", "Serial number": "Q2KN-A6FU-EUEB", "Usage": "8.92 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9764-1", "MAC address": "ac:17:c8:c1:b1:be", "Public IP": "66.168.227.40", "Network": "NAC-US-9764-Opelika", "Serial number": "Q2HY-ZV87-ARE8", "Usage": "8.57 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9765-1", "MAC address": "98:18:88:75:7b:59", "Public IP": "12.153.231.186", "Network": "NAC-US-9765-Texarkana", "Serial number": "Q2HY-JT39-EQU4", "Usage": "11.71 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9767-1", "MAC address": "ac:17:c8:5d:fd:03", "Public IP": "172.59.104.140", "Network": "NAC-US-9767-Miramar Beach", "Serial number": "Q2HY-V2YV-Q4JV", "Usage": "16.71 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9768-1", "MAC address": "ac:17:c8:5d:d9:85", "Public IP": "24.128.117.89", "Network": "NAC-US-9768-Broomfield", "Serial number": "Q2HY-4FP8-BZ9X", "Usage": "14.83 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9769-1", "MAC address": "e0:cb:bc:bc:b4:08", "Public IP": "172.58.9.162", "Network": "NAC-US-9769-Burnsville", "Serial number": "Q2KN-X3SJ-9WHW", "Usage": "12.10 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9771-1", "MAC address": "ac:17:c8:c1:a6:03", "Public IP": "68.45.232.42", "Network": "NAC-US-9771-Muncie", "Serial number": "Q2HY-X6N2-47JG", "Usage": "10.34 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9772-1", "MAC address": "e0:cb:bc:bc:61:00", "Public IP": "73.252.29.84", "Network": "NAC-US-9772-Houma", "Serial number": "Q2KN-TN73-BSMU", "Usage": "9.81 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9773-1", "MAC address": "98:18:88:75:6c:80", "Public IP": "71.80.20.10", "Network": "NAC-US-9773-Morristown", "Serial number": "Q2HY-HV2A-HGMJ", "Usage": "119.06 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9775-1", "MAC address": "e0:cb:bc:bc:b7:80", "Public IP": "96.239.119.109", "Network": "NAC-US-9775-Long Island City", "Serial number": "Q2KN-X7WQ-5B6X", "Usage": "120.56 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9778-1", "MAC address": "0c:8d:db:63:39:38", "Public IP": "71.236.110.205", "Network": "NAC-US-9778-Allison Park", "Serial number": "Q2KN-7S7H-EQ7C", "Usage": "16.67 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9779-1", "MAC address": "0c:8d:db:85:f5:70", "Public IP": "73.79.203.31", "Network": "NAC-US-9779-Washington", "Serial number": "Q2KN-W3B4-TZHP", "Usage": "8.73 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9783-1", "MAC address": "e0:cb:bc:bc:b4:60", "Public IP": "98.219.228.58", "Network": "NAC-US-9783-Pittsburgh", "Serial number": "Q2KN-X49M-E49X", "Usage": "19.89 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9784-1", "MAC address": "0c:8d:db:85:fd:58", "Public IP": "73.40.142.195", "Network": "NAC-US-9784-Wheeling", "Serial number": "Q2KN-WWLT-FQM3", "Usage": "120.06 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9785-1", "MAC address": "98:18:88:75:5d:3e", "Public IP": "73.79.42.23", "Network": "NAC-US-9785-Carnegie", "Serial number": "Q2HY-GVR8-F2UR", "Usage": "14.08 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9787-1", "MAC address": "0c:8d:db:62:53:e8", "Public IP": "71.236.125.203", "Network": "NAC-US-9787-South Hills", "Serial number": "Q2KN-QDHH-S63M", "Usage": "10.61 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9788-1", "MAC address": "0c:8d:db:63:47:18", "Public IP": "73.52.218.62", "Network": "NAC-US-9788-North Hills", "Serial number": "Q2KN-XYVA-9LQW", "Usage": "11.60 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9789-1", "MAC address": "0c:8d:db:63:47:c0", "Public IP": "71.245.181.66", "Network": "NAC-US-9789-Mt Lebanon", "Serial number": "Q2KN-XZSA-97TJ", "Usage": "10.87 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9790-1", "MAC address": "0c:8d:db:62:52:88", "Public IP": "73.79.15.44", "Network": "NAC-US-9790-Mcmurray", "Serial number": "Q2KN-QAXV-LGTA", "Usage": "21.78 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9791-1", "MAC address": "ac:17:c8:c1:aa:9b", "Public IP": "74.134.168.173", "Network": "NAC-US-9791-Erie", "Serial number": "Q2HY-Y8TC-KA5F", "Usage": "13.77 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9792-1", "MAC address": "98:18:88:75:3c:44", "Public IP": "96.236.199.83", "Network": "NAC-US-9792-Monroeville", "Serial number": "Q2HY-EUHH-AR5A", "Usage": "121.89 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9793-1", "MAC address": "0c:8d:db:62:52:70", "Public IP": "24.3.25.172", "Network": "NAC-US-9793-Greensburg", "Serial number": "Q2KN-QAQF-QG47", "Usage": "110.75 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9794-1", "MAC address": "0c:8d:db:62:db:b0", "Public IP": "24.101.178.93", "Network": "NAC-US-9794-Cranberry", "Serial number": "Q2KN-3284-GHHJ", "Usage": "163.90 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9796-1", "MAC address": "0c:8d:db:62:db:f8", "Public IP": "74.109.247.123", "Network": "NAC-US-9796-Shadyside", "Serial number": "Q2KN-32TH-D8TC", "Usage": "23.48 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9797-1", "MAC address": "0c:8d:db:8d:d1:78", "Public IP": "66.65.62.54", "Network": "NAC-US-9797-Poughkeepsie", "Serial number": "Q2KN-24FP-5HK2", "Usage": "12.07 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9826-1", "MAC address": "cc:9c:3e:43:08:f9", "Public IP": "50.82.188.243", "Network": "NAC-US-9826-Cedar Rapids", "Serial number": "Q2HY-XPY5-U9Z9", "Usage": "119.13 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9827-1", "MAC address": "e0:cb:bc:bc:b7:58", "Public IP": "172.58.14.128", "Network": "NAC-US-9827-Davenport", "Serial number": "Q2KN-X7MV-CKEQ", "Usage": "17.56 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9828-1", "MAC address": "98:18:88:c9:32:13", "Public IP": "173.28.196.85", "Network": "NAC-US-9828-West Des Moines", "Serial number": "Q2HY-Q6T2-MCQY", "Usage": "13.47 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9829-1", "MAC address": "0c:8d:db:8d:c3:70", "Public IP": "173.28.1.237", "Network": "NAC-US-9829-Des Moines", "Serial number": "Q2KN-YQGR-8VJ7", "Usage": "25.28 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9831-1", "MAC address": "bc:db:09:bd:83:e9", "Public IP": "172.58.140.47", "Network": "NAC-US-9831-Iowa City", "Serial number": "Q2HY-9X2L-FSG9", "Usage": "13.09 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9832-1", "MAC address": "bc:db:09:bd:9b:eb", "Public IP": "173.26.19.67", "Network": "NAC-US-9832-Mason City", "Serial number": "Q2HY-AYBZ-FU4M", "Usage": "15.84 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9833-1", "MAC address": "98:18:88:75:61:eb", "Public IP": "50.82.23.254", "Network": "NAC-US-9833-Ottumwa", "Serial number": "Q2HY-H7S5-NRS6", "Usage": "114.29 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9834-1", "MAC address": "e0:cb:bc:bc:b8:00", "Public IP": "67.60.48.171", "Network": "NAC-US-9834-Sioux City", "Serial number": "Q2KN-X8F6-LEJA", "Usage": "42.42 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9836-1", "MAC address": "98:18:88:75:82:13", "Public IP": "172.58.10.202", "Network": "NAC-US-9836-Waterloo", "Serial number": "Q2HY-K9QP-GA4J", "Usage": "98.51 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9841-1", "MAC address": "e0:cb:bc:bc:9d:18", "Public IP": "74.193.252.21", "Network": "NAC-US-9841-Jonesboro", "Serial number": "Q2KN-W4NH-CN92", "Usage": "124.56 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9849-1", "MAC address": "e0:cb:bc:bc:b7:a0", "Public IP": "68.46.21.165", "Network": "NAC-US-9849-Blaine", "Serial number": "Q2KN-X843-T2WB", "Usage": "24.72 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9851-1", "MAC address": "ac:17:c8:5d:db:53", "Public IP": "98.61.107.30", "Network": "NAC-US-9851-Edina", "Serial number": "Q2HY-4UBG-BPDR", "Usage": "118.25 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9853-1", "MAC address": "e0:cb:bc:bc:b4:a0", "Public IP": "73.228.201.11", "Network": "NAC-US-9853-St Paul", "Serial number": "Q2KN-X4NU-YTLL", "Usage": "12.40 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9855-1", "MAC address": "0c:8d:db:85:ad:08", "Public IP": "50.76.150.110", "Network": "NAC-US-9855-Blue Springs", "Serial number": "Q2KN-MR94-K75M", "Usage": "10.93 GB", "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R9858-1", "MAC address": "0c:8d:db:85:89:58", "Public IP": "173.46.77.232", "Network": "NAC-US-9858-Kansas City", "Serial number": "Q2KN-HLPB-8B5Q", "Usage": "12.17 GB", "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R9859-1", "MAC address": "0c:8d:db:85:81:50", "Public IP": "173.46.77.235", "Network": "NAC-US-9859-Kansas City", "Serial number": "Q2KN-GNHX-WFUX", "Usage": "7.36 GB", "Configuration status": "Not up to date"}, {"Model": "MX64", "Name": "R9862-1", "MAC address": "e0:cb:bc:bc:61:90", "Public IP": "76.84.165.251", "Network": "NAC-US-9862-Lincoln", "Serial number": "Q2KN-TNSK-EDSN", "Usage": "126.74 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9863-1", "MAC address": "0c:8d:db:85:84:f8", "Public IP": "184.184.199.90", "Network": "NAC-US-9863-Omaha", "Serial number": "Q2KN-H3QG-M743", "Usage": "16.48 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9864-1", "MAC address": "0c:8d:db:85:5a:40", "Public IP": "172.59.225.210", "Network": "NAC-US-9864-Omaha", "Serial number": "Q2KN-C4SB-SUEC", "Usage": "18.35 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9865-1", "MAC address": "98:18:88:75:7c:5c", "Public IP": "172.59.226.211", "Network": "NAC-US-9865-Omaha", "Serial number": "Q2HY-JUMZ-LC2E", "Usage": "11.32 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9969-1", "MAC address": "ac:17:c8:0f:45:f8", "Public IP": "98.168.103.190", "Network": "NAC-US-9969-Chesapeake", "Serial number": "Q2KN-ULTG-A8YL", "Usage": "11.39 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9971-1", "MAC address": "98:18:88:74:c1:e7", "Public IP": "71.80.85.205", "Network": "NAC-US-9971-Johnson City", "Serial number": "Q2HY-6XGM-8H3F", "Usage": "20.11 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9972-1", "MAC address": "e0:cb:bc:bc:55:68", "Public IP": "71.45.181.212", "Network": "NAC-US-9972-Birmingham", "Serial number": "Q2KN-T6E2-CYFL", "Usage": "18.91 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9973-1", "MAC address": "ac:17:c8:0f:49:40", "Public IP": "174.178.121.131", "Network": "NAC-US-9973-Carlisle", "Serial number": "Q2KN-V8BH-YZXE", "Usage": "24.04 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9974-1", "MAC address": "ac:17:c8:5d:98:4e", "Public IP": "24.89.11.8", "Network": "NAC-US-9974-Hagerstown", "Serial number": "Q2HY-ACH3-WG78", "Usage": "20.00 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9976-1", "MAC address": "ac:17:c8:5d:d8:6d", "Public IP": "73.53.244.190", "Network": "NAC-US-9976-Jacksonville", "Serial number": "Q2HY-45VF-CN9X", "Usage": "19.91 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9977-1", "MAC address": "98:18:88:75:5d:0d", "Public IP": "68.83.142.3", "Network": "NAC-US-9977-Springfield", "Serial number": "Q2HY-GVDK-CH43", "Usage": "12.09 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9982-1", "MAC address": "e0:cb:bc:bc:f5:78", "Public IP": "72.216.247.173", "Network": "NAC-US-9982-Phoenix", "Serial number": "Q2KN-ZSWR-EQRV", "Usage": "9.69 GB", "Configuration status": "Up to date"}, {"Model": "MX67C-NA", "Name": "R9983-1", "MAC address": "98:18:88:75:6a:65", "Public IP": "24.107.242.165", "Network": "NAC-US-9983-Cleveland", "Serial number": "Q2HY-HQ7H-4CSA", "Usage": "14.74 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9984-1", "MAC address": "0c:8d:db:85:f3:80", "Public IP": "76.122.211.219", "Network": "NAC-US-9984-Paducah", "Serial number": "Q2KN-VTXB-BA4B", "Usage": "11.65 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "R9991-1", "MAC address": "0c:8d:db:85:83:98", "Public IP": "76.104.135.3", "Network": "NAC-US-9991-Auburn", "Serial number": "Q2KN-GWS7-H79Q", "Usage": "16.45 GB", "Configuration status": "Up to date"}, {"Model": "MX64", "Name": "RProd-DEV", "MAC address": "0c:8d:db:85:bd:70", "Public IP": "24.129.255.240", "Network": "NAC-US-0000-Prod-Test-NW", "Serial number": "Q2KN-PJ67-UCUM", "Usage": null, "Configuration status": "Not up to date"}]

                                                                                                                                                                                                                                                                                          






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
                "remoted into wpaf{1}-2 > saw the issue > closed elevate >  restarted pc",
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
                "remoted into wpaf{1}-2 > got the order number > saw check payment > reached out to systems support with order number > ",
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
