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

    var fetchKAs = document.createElement('button');
    fetchKAs.id = "fetchKAs";
    fetchKAs.textContent = "reload templates"

    botContainer.appendChild(searchContact);
    botContainer.appendChild(contactInput);
    botContainer.appendChild(contactInfo);
    botContainer.appendChild(fetchKAs);
}

function addScripts() {
    descriptionButton.addEventListener('click', function() {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value.trim();
        var nameValue = document.getElementById('nameInput').value;
        var description = ka_data[kaValue]['Description'];
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
        var actions = ka_data[kaValue]['Actions & Solutions'];
        actions = actions.replaceAll('{1}', storeValue);
        
        copyToClipboard(actions);

        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service']
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item']
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type']
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

    fetchKAs.addEventListener('click', () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://asm-site-update-baa2f1b3e712.herokuapp.com/list/');  // Replace with the actual URL of your view
        xhr.responseType = 'json';  // Specify expected response type as JSON
      
        xhr.onload = function() {
          if (xhr.status === 200) {
            jsonData = xhr.response;
            // Process the data here using the jsonData variable
            console.log(jsonData)
            ka_data = jsonData
          } else {
            console.error('Error fetching JSON:', xhr.statusText);
          }
        };
      
        xhr.onerror = function(error) {
          console.error('Error fetching JSON:', error);
        };
      
        xhr.send();
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




ka_data = {}
    
