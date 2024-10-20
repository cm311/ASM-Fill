if (!document.getElementById("container")) {
    loadStyleSheet();
    addElements();
} else {
    var container = document.getElementById("container");

    container.innerHTML = "";
    container.remove();
}

function addElements() {
    var xhr = new XMLHttpRequest();
    
    // Load the external HTML file (elements.html)
    xhr.open('GET', chrome.runtime.getURL('elements.html'), true);

    // Define what happens when the request is successful
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Create a temporary div element to hold the loaded HTML
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = xhr.responseText;

            // Insert the loaded HTML at the top of the body, so other content goes below
            document.body.insertBefore(tempDiv, document.body.firstChild);

            // Once the HTML is loaded, add the necessary event listeners
            addScripts();
        } else {
            console.error('Error loading HTML: ', xhr.statusText);
        }
    };

    // Define what happens in case of an error
    xhr.onerror = function () {
        console.error('Error loading HTML:', xhr.statusText);
    };

    // Send the request
    xhr.send();
}

function loadStyleSheet() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('elements_style.css');  // Load the CSS file
    document.head.appendChild(link);  // Append it to the document's <head>
}

function addScripts() {
    var descriptionButton = document.getElementById('descriptionButton');
    var actionsButton = document.getElementById('actionsButton');
    var searchButton = document.getElementById('searchButton');
    var clearButton = document.getElementById('clearButton');
    var searchContact = document.getElementById('searchContact');
    var fetchKAs = document.getElementById('fetchKAs');
    var searchPassword = document.getElementById('searchPassword');
    var minimizedModalsContainer = document.getElementById('minimizedModalsContainer') || createMinimizedModalsContainer();

    function createMinimizedModalsContainer() {
        const container = document.createElement('div');
        container.setAttribute('id', 'minimizedModalsContainer');
        container.style.position = 'absolute'; // Ensure it appears directly below the extension
        container.style.top = 'calc(100% + 10px)'; // Position it just below the extension
        container.style.left = '0';
        container.style.width = '100%';
        container.style.zIndex = '9998'; // Ensure it's above other content but below active modals
        document.getElementById('container').appendChild(container); // Append to the container
        return container;
    }

    function createModal(title, content, event, modalId, closeButtonId, minimizeButtonId) {
        // Create modal elements
        var modal = document.createElement('div');
        modal.setAttribute('id', modalId);
        modal.classList.add('modal');

        // Set default position in case event coordinates are not available or out of bounds
        modal.style.left = event.pageX ? event.pageX + 'px' : '100px';
        modal.style.top = event.pageY ? event.pageY + 'px' : '100px';

        // Close button
        var closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.setAttribute('id', closeButtonId);
        closeButton.classList.add('closeButton');

        closeButton.onclick = function () {
            modal.remove();
        };

        // Minimize button
        var minimizeButton = document.createElement('span');
        minimizeButton.innerHTML = '-';
        minimizeButton.setAttribute('id', minimizeButtonId);
        minimizeButton.classList.add('minimizeButton');

        minimizeButton.onclick = function () {
            minimizeModal(modal, title);
        };

        // Modal title
        var modalTitle = document.createElement('div');
        modalTitle.className = 'modalTitle';
        modalTitle.innerHTML = title;

        // Modal body
        var modalBody = document.createElement('div');
        modalBody.className = 'modalBody';
        modalBody.innerHTML = content;

        // Append modal elements
        modal.appendChild(closeButton);
        modal.appendChild(minimizeButton);
        modal.appendChild(modalTitle);
        modal.appendChild(modalBody);
        document.body.appendChild(modal);

        return modal;
    }

    function minimizeModal(modal, title) {
        // Create minimized modal representation before removing the modal itself
        var minimizedDiv = document.createElement('div');
        minimizedDiv.className = 'minimizedModal';
        minimizedDiv.innerHTML = title;

        // Close ("X") icon
        var closeIcon = document.createElement('span');
        closeIcon.innerHTML = '✖';
        closeIcon.className = 'closeMinimizedIcon';
        closeIcon.onclick = function () {
            minimizedDiv.remove();
        };

        minimizedDiv.appendChild(closeIcon);
        minimizedDiv.onclick = function (event) {
            if (event.target !== closeIcon) {
                // Restore the modal to its original position
                modal.style.display = 'block';  // Make the modal visible again
                document.body.appendChild(modal);
                minimizedDiv.remove();
            }
        };

        minimizedModalsContainer.appendChild(minimizedDiv);

        // Hide the modal to keep reference
        modal.style.display = 'none'; 
    }

    // Function to handle key press events
    function handleKeyPress(event, button) {
        if (event.key === 'Enter') {
            button.click();
        } else if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal');
            if (openModal) {
                openModal.remove();
            }
        }
    }

    // Event listeners for search input fields
    document.getElementById('searchInput').addEventListener('keydown', function (event) {
        handleKeyPress(event, searchButton);
    });

    document.getElementById('contactInput').addEventListener('keydown', function (event) {
        handleKeyPress(event, searchContact);
    });

    document.getElementById('passwordInput').addEventListener('keydown', function (event) {
        handleKeyPress(event, searchPassword);
    });

    // Description Button Event Listener
    descriptionButton.addEventListener('click', function () {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value.trim();
        var nameValue = document.getElementById('nameInput').value;
        var description = ka_data[kaValue]['Description'];
        description = description.replace('{0}', nameValue).replace('{1}', storeValue);
        
        copyToClipboard(description);
        
        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service'];
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item'];
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type'];
    });

    // Actions Button Event Listener
    actionsButton.addEventListener('click', function () {
        var storeValue = document.getElementById('storeInput').value;
        var kaValue = document.getElementById('kaInput').value.trim();
        var nameValue = document.getElementById('nameInput').value;
        var actions = ka_data[kaValue]['Actions & Solutions'];
        actions = actions.replaceAll('{1}', storeValue);
        
        copyToClipboard(actions);

        document.getElementById('serviceLabel').innerHTML = "Service: " + ka_data[kaValue]['Service'];
        document.getElementById('configLabel').innerHTML = "Configuration Item: " + ka_data[kaValue]['Configuration Item'];
        document.getElementById('typeLabel').innerHTML = 'Type: ' + ka_data[kaValue]['Type'];
    });

    // Search Button Event Listener for Suggested KAs
    searchButton.addEventListener('click', function (event) {
        const searched = document.getElementById('searchInput').value;
        let content = '';

        for (var key in ka_data) {
            if (ka_data[key]["Subject"].toLowerCase().includes(searched.toLowerCase())) {
                // Create clickable KA entry
                content += `<p class="clickableKA" data-ka="${key}"><strong>Key:</strong> ${key}<br><strong>Subject:</strong> ${ka_data[key]["Subject"]}</p>`;
            }
        }

        const modal = createModal('Suggested KAs', content, event, 'searchModal', 'closeSearchModal', 'minimizeSearchModal');

        // Add click event to populate KA in input field
        modal.querySelectorAll('.clickableKA').forEach(function (element) {
            element.addEventListener('click', function () {
                const kaNumber = this.getAttribute('data-ka');
                document.getElementById('kaInput').value = kaNumber;
                modal.remove(); // Optionally close the modal after selecting a KA
            });
        });
    });

    // Search Contact Button Event Listener
    searchContact.addEventListener('click', function (event) {
        const searched = document.getElementById('contactInput').value;
        let content = '';

        for (var key in contacts) {
            if (contacts[key]["Entity:"].toLowerCase().includes(searched.toLowerCase())) {
                content += "<p><strong>Entity:</strong> " + contacts[key]["Entity:"] +
                    "<br><strong>Phone:</strong> " + (contacts[key]["Phone:"] || "N/A") +
                    "<br><strong>Email:</strong> " + (contacts[key]["Email:"] || "N/A") + "</p>";
            }
        }

        createModal('Contacts', content, event, 'contactModal', 'closeContactModal', 'minimizeContactModal');
    });

    // Search Password Button Event Listener
    searchPassword.addEventListener('click', function (event) {
        const searched = document.getElementById('passwordInput').value;
        let content = '';

        for (var key in passwords) {
            var description = passwords[key]["Description"] ? passwords[key]["Description"].toLowerCase() : "";
            var account = passwords[key]["Account"] ? passwords[key]["Account"].toLowerCase() : "";

            if (description.includes(searched.toLowerCase()) || account.includes(searched.toLowerCase())) {
                content += "<p><strong>Description:</strong> " + passwords[key]["Description"] +
                    "<br><strong>Account:</strong> " + passwords[key]["Account"] +
                    "<br><strong>Password:</strong> " + passwords[key]["Password"] + "</p>";
            }
        }

        createModal('Passwords', content, event, 'passwordModal', 'closePasswordModal', 'minimizePasswordModal');
    });

    // Clear Button Event Listener
    clearButton.addEventListener('click', function () {
        document.getElementById('serviceLabel').innerHTML = "Service: ";
        document.getElementById('configLabel').innerHTML = "Configuration Item: ";
        document.getElementById('typeLabel').innerHTML = 'Type: ';
        document.getElementById('kaInput').value = "";
        document.getElementById('nameInput').value = "";
        document.getElementById('searchInput').value = "";
        document.getElementById('storeInput').value = "";
        document.getElementById('suggestedKA').textContent = ' ';
        document.getElementById('contactInput').value = '';
        document.getElementById('contactInfo').textContent = ' ';
        document.getElementById('passwordInput').value = "";
        document.getElementById('passwordInfo').textContent = ' ';
    });

    // Fetch KAs Event Listener
    fetchKAs.addEventListener('click', function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://asm-site-update-baa2f1b3e712.herokuapp.com/list/');
        xhr.responseType = 'json';
        
        xhr.onload = function () {
            if (xhr.status === 200) {
                jsonData = xhr.response;
                console.log(jsonData);
                ka_data = jsonData;
            } else {
                console.error('Error fetching JSON:', xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
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


// Sample Data: Replace with your real data
contacts = {
    "1": {"Entity:": "Apex (US) & Apex (CA)", "Phone:": null, "Email:": "afstorespricing@ppg.com\xa0\xa0 \xa0CanadaStorespricing@ppg.com", "Individual:": null},
"2": {"Entity:": "Bell Alliance", "Phone:": "888-214-7896", "Email:": null, "Individual:": null},
"3": {"Entity:": "Bell Canada", "Phone:": "877-877-2426", "Email:": "888-788-2355  or 866-462-3551", "Individual:": null},
"4": {"Entity:": "Cash Desk (US)", "Phone:": null, "Email:": "PPGACCashDesk@ppg.com", "Individual:": null},
"5": {"Entity:": "Cash Desk (CA)", "Phone:": null, "Email:": "CanadaBankingSupport@ppg.com", "Individual:": null},
"6": {"Entity:": "CEI Driver Services", "Phone:": "866.894.0383", "Email:": "driverservices.PPG@ceinetwork.com", "Individual:": null},
"7": {"Entity:": "Color Lab", "Phone:": "412-517-3738", "Email:": "accolorlab@ppg.com", "Individual:": null},
"8": {"Entity:": "Corob Service", "Phone:": "800-728-8408", "Email:": "ext. 225  -- Previously Listed as 255", "Individual:": "Tech: Mike"},
"9": {"Entity:": "Credit (US)", "Phone:": "800-852-7860", "Email:": "afcredit@ppg.com", "Individual:": null},
"10": {"Entity:": "Credit (CA)", "Phone:": null, "Email:": "*Credit CA PAF Stores", "Individual:": null},
"11": {"Entity:": "Credit (Quebec CA)", "Phone:": "800-321-6564", "Email:": "Quebec Region Only\xa0", "Individual:": null},
"12": {"Entity:": "Credit (PMC)", "Phone:": "855-762-2847", "Email:": null, "Individual:": null},
"13": {"Entity:": "Customer Service (US)", "Phone:": "877-774-3131", "Email:": "StoreOrders@ppg.com   AskStoreCS@ppg.com", "Individual:": null},
"14": {"Entity:": "Customer Service (CA)", "Phone:": "800-387-2253", "Email:": null, "Individual:": null},
"15": {"Entity:": "Customer Service (Dealer Order)", "Phone:": "888-774-1010", "Email:": null, "Individual:": null},
"16": {"Entity:": "Customer Service Dealer Formula Pro Help Desk", "Phone:": "844-916-0606", "Email:": null, "Individual:": null},
"17": {"Entity:": "Central Purchasing - SSO (special sundries)", "Phone:": "844-594-3233", "Email:": "SSO@ppg.com", "Individual:": null},
"18": {"Entity:": "Dealer RITSD Toll Free", "Phone:": "833-562-8030", "Email:": "RITSD-USCA@ppg.com", "Individual:": null},
"19": {"Entity:": "DSR", "Phone:": "877-563-6709", "Email:": "*HARD DOWN CASES after 10 min on hold 918-336-6900", "Individual:": "ppgpaintsupport@dsrglobal.com"},
"20": {"Entity:": "DataColor", "Phone:": "800-982-6496", "Email:": null, "Individual:": null},
"21": {"Entity:": "Dromont (Porter Services)", "Phone:": "980-237-8274", "Email:": "customer.care@dromont.com", "Individual:": null},
"22": {"Entity:": "Dromont(Mark)", "Phone:": "704-388-7914", "Email:": "mark.strickland@dromontgroup.com", "Individual:": null},
"23": {"Entity:": "EFB Support", "Phone:": "866-774-5297", "Email:": "*AC PPG EFB Support", "Individual:": "DO NOT GIVE TO STORES"},
"24": {"Entity:": "Fluid Management HD", "Phone:": "800-462-2466", "Email:": "Old number: 847-520-6008", "Individual:": "DO NOT GIVE TO STORES"},
"25": {"Entity:": "Global IT Service Desk", "Phone:": "412-434-2662", "Email:": "itsd-global@ppg.com", "Individual:": null},
"26": {"Entity:": "HR US", "Phone:": "888-774-2121", "Email:": "hrsupportppgac@ppg.com", "Individual:": null},
"27": {"Entity:": "HR Canada", "Phone:": "877-839-1881", "Email:": null, "Individual:": null},
"28": {"Entity:": "HR Puerto Rico", "Phone:": null, "Email:": "idalis.landrau@ppg.com", "Individual:": "Idalis Iandrau"},
"29": {"Entity:": "Hero", "Phone:": "800-494-4376", "Email:": null, "Individual:": null},
"30": {"Entity:": "Inventory Team", "Phone:": null, "Email:": "PPGStoreInventory@ppg.com", "Individual:": null},
"31": {"Entity:": "AC Kronos Support", "Phone:": null, "Email:": "ACKronosSupport@ppg.com", "Individual:": null},
"32": {"Entity:": "Moneris Solutions", "Phone:": "866-319-7450", "Email:": null, "Individual:": null},
"33": {"Entity:": "Operator ", "Phone:": "412-434-3131", "Email:": null, "Individual:": null},
"34": {"Entity:": "Payroll", "Phone:": null, "Email:": "*PAF Payroll Team", "Individual:": null},
"35": {"Entity:": "People Pulse", "Phone:": "833-774-7772", "Email:": null, "Individual:": null},
"36": {"Entity:": "Promotions US Paint", "Phone:": "724-591-6342", "Email:": "carrozzi@ppg.com", "Individual:": "Shannon Carrozzi"},
"37": {"Entity:": "Promotions US Spray and Equipment ", "Phone:": "724-814-9805", "Email:": "rhodes@ppg.com", "Individual:": "Don Rhodes"},
"38": {"Entity:": "Promotions US Spray and Equipment", "Phone:": "508-717-5255", "Email:": "vigue@ppg.com", "Individual:": "Amy Vigue"},
"39": {"Entity:": "Promotions US All Other Sundries", "Phone:": "412-527-2219", "Email:": "mchugh@ppg.com", "Individual:": "Doreen McHugh"},
"40": {"Entity:": "Promotions CA Paint - Sundry", "Phone:": null, "Email:": "rob.mcdonald@ppg.com - gurmukh.banait@ppg.com", "Individual:": "Rob McDonald  - Gurmukh Banait"},
"41": {"Entity:": "Promotions PR Paint/Sundry", "Phone:": null, "Email:": "velezramos@ppg.com", "Individual:": "Arlivonne Velez-Ramos"},
"42": {"Entity:": "ProSight Support", "Phone:": "833-482-0509", "Email:": "prosighthelp@ppg.com", "Individual:": null},
"43": {"Entity:": "QuestZones", "Phone:": "866-462-3551", "Email:": null, "Individual:": null},
"44": {"Entity:": "International Star Rewards (CA\\PR)", "Phone:": "718-609-8500", "Email:": null, "Individual:": null},
"45": {"Entity:": "Star Rewards", "Phone:": "888-598-4455", "Email:": null, "Individual:": null},
"46": {"Entity:": "Store Maintenance", "Phone:": null, "Email:": "PPGACStoreMaintenance@ppg.com", "Individual:": null},
"47": {"Entity:": "Tax Dept. Fax", "Phone:": "800-640-4726", "Email:": null, "Individual:": null},
"48": {"Entity:": "Tech Support (Canada/French)", "Phone:": "800-387-2253", "Email:": null, "Individual:": null},
"49": {"Entity:": "Tech Support (Product Questions)", "Phone:": "800-441-9695", "Email:": "\u200basktechservice@ppg.com", "Individual:": null},
"50": {"Entity:": "True Finish", "Phone:": "888-638-9795", "Email:": "Tforders@ppg.com", "Individual:": null},
"51": {"Entity:": "One Recognition and Rewards ", "Phone:": "888-598-4455 (US)  718-609-8500 (International toll)", "Email:": "totalvisionrecognition@mcfina.com", "Individual:": null},
"52": {"Entity:": "Site Support Windows 10 Replacment Project", "Phone:": "724-720-4408", "Email:": null, "Individual:": null}

}



passwords = {
    "0": {"Description": "PltadminPAF", "Account": ".\\pltadmin", "Password": "Use PPG Password Manager Tool"},
    "1": {"Description": "PAFSD", "Account": "PAFSD", "Password": "V1ning1vy2025"},
    "2": {"Description": "EMT911 v 5.0", "Account": null, "Password": "EMT-Hotline"},
    "3": {"Description": "Meraki (IP Address of the device)", "Account": "Serial number of the device", "Password": "blank"},
    "4": {"Description": "Meraki PPG Paints WiFi Password", "Account": "PPG Paints", "Password": "VioletVerbena"},
    "5": {"Description": "Descartes (https://servicedesk.descartes.com)", "Account": "RITSD-USCA@ppg.com", "Password": "RITSDppg"},
    "6": {"Description": "Descartes Application Site (https://ondemand.descartes.com)", "Account": "SUPPORT12", "Password": "ODSUPPORT12"},
    "7": {"Description": "SAP O15 Read Only Account", "Account": "pafsd", "Password": "Spring2020!"},
    "8": {"Description": "Stores IT Notification", "Account": "GOF445G", "Password": "St0re$upport2023"},
    "9": {"Description": "KRONOS Default User Password", "Account": "their user ID", "Password": "welcome or welcome1"},
    "10": {"Description": "AC USCA Dealer Support", "Account": "S003912", "Password": "1vyGr33n!"},
    "11": {"Description": "Adstock Site - (https://ppgadstock.archwayconn.com)", "Account": "PPGXXXX (X's are store number)", "Password": "ppgpaints1"},
    "12": {"Description": "Liberty Portal for Puerto Rico", "Account": "Samuel.diaz@ppg.com", "Password": "Dontaskme01"},
    "13": {"Description": "Store Systems Portal", "Account": "STORE", "Password": "STORE"},
    "14": {"Description": "Service Desk Cellphone Lockscreen Code", "Account": "412-335-4778", "Password": "725072"},
    "15": {"Description": "Service Desk Cellphone Apple ID", "Account": "retailitsupport@icloud.com", "Password": "Paint#400"},
    "16": {"Description": "PPG Dealer IT Notifications", "Account": "S004508", "Password": "Deal3rs2024"},
    "17": {"Description": "Verizon One Talk (https://sso.verizonenterprise.com)", "Account": "PPGRSD", "Password": "Paint123 (Passcode will be sent to EMON Box)"},
    "18": {"Description": "DSP (French) - http://sdccboaapp01t.euc.ppg.com", "Account": "PPGStoresFR", "Password": "PPGStoresFR"},
    "19": {"Description": "DSP - http://sdccboaapp01t.euc.ppg.com/dsp/Vir", "Account": "PPGStores", "Password": "PPGStores"},
    "20": {"Description": "FedEx - https://www.fedex.com/en-us/home.html", "Account": "ppgacusca", "Password": "C0l0rful!"},
    "21": {"Description": "PPG Paints App Formstack", "Account": "ppgpaintsapp@ppg.com", "Password": "PPGPaints123!"},
    "22": {"Description": "THD Email Support", "Account": "A137371 - RITSDTHDSupport@ppg.com", "Password": "THD$upport2023"},
    "23": {"Description": "Moneris Go Portal", "Account": "RITSD-USCA@ppg.com", "Password": "PPGPaints!12345"},
    "24": {"Description": "Talon One -https://ppg.us-east4.talon.one/login", "Account": "RITSD-USCA@ppg.com", "Password": "S3rvic3D3sk123!"},
    "29": {"Description": "KIOSK Logins", "Account": null, "Password": null},
    "30": {"Description": "Description", "Account": "Account", "Password": "Password"},
    "31": {"Description": "VOC Kiosk Admin Account - Menards", "Account": "admin", "Password": "M3n4rds!"},
    "32": {"Description": "ELO Cyrstal Touch Manager", "Account": null, "Password": "elo1234"},
    "33": {"Description": "VOC Kiosk PC BIOS", "Account": null, "Password": "PPGVoCKiosk"},
    "34": {"Description": "Voice of Color Mailbox", "Account": "S001215", "Password": "V0c$upport2025"},
    "37": {"Description": "Point of Sale Systems", "Account": null, "Password": null},
    "38": {"Description": "Description", "Account": "Account", "Password": "Password"},
    "39": {"Description": "Store Accounts - US/PR", "Account": "pafxxxx-x, susxxxx-FPx, sprxxxx-FPx", "Password": "Transaction2025"},
    "40": {"Description": "DC Tint Cell Accounts - US - Home Depot/Walmart", "Account": "pafxxxx-hx/pafxxxx-wx/susxxxx-hx", "Password": "Starbright2025"},
    "41": {"Description": "Store Accounts - Canada", "Account": "pafxxxx-x, scaxxxx-FPx", "Password": "Progressive2025"},
    "42": {"Description": "Franchisee Elevate Accounts", "Account": "faxxxx-x", "Password": "Elevate123!"},
    "43": {"Description": "CRO Lab Machines - Reg", "Account": "pafxxxx-x", "Password": "Lim3l1ght#2024"},
    "44": {"Description": "CRO Lab Machines - SRV", "Account": "pafxxxx-x", "Password": "Lim3l1ght#2024"},
    "47": {"Description": "Color Systems", "Account": null, "Password": null},
    "48": {"Description": "Description", "Account": "Account", "Password": "Password"},
    "49": {"Description": "D_SET setup password", "Account": null, "Password": "#+##+#"},
    "50": {"Description": "Datacolor Calibration Password", "Account": null, "Password": "springdale"},
    "51": {"Description": "Corob Tech Password", "Account": "tech", "Password": "tech"},
    "52": {"Description": "FM Customizer / service.exe Password", "Account": null, "Password": "service"},
    "53": {"Description": "Datacolor Log In (Pilot Stores)", "Account": "user", "Password": "user"},
    "54": {"Description": "Datacolor Log In (Pilot Stores)", "Account": "admin", "Password": "admin"},
    "55": {"Description": "Next Gen Dealer PC", "Account": "PPG Dealer", "Password": "PPG"},
    "56": {"Description": "Tintwise Admin", "Account": "Administrator", "Password": "Producer"},
    "57": {"Description": "Fluid Management Acusmart Tinter", "Account": null, "Password": "@PPGASx500"},
    "60": {"Description": "Verisae Website", "Account": null, "Password": null},
    "61": {"Description": "Verisae Website Login", "Account": "PAFXXXX@ppg.com", "Password": "PPGPassword1"},
    "62": {"Description": "Verisae User Guides Login", "Account": "ppguser", "Password": "Verisae1"},
    "65": {"Description": "Authorized Agents", "Account": null, "Password": null},
    "66": {"Description": "Description", "Account": "Account", "Password": "Password"},
    "67": {"Description": "Admin account for Windows", "Account": "PPGAdmin", "Password": ".CATI4Admin"},
    "68": {"Description": "Citrix default password", "Account": "CTXCAA0xx", "Password": "AuthAgent01"},
    "69": {"Description": "Windows password for agents", "Account": "Agent Autorise", "Password": "AuthAgent01"},
    "71": {"Description": "Formula Pro Web (http://formulapro.ppgac.com/)", "Account": null, "Password": null},
    "72": {"Description": "Admin Account", "Account": "ppg-helpdesk-admin@ppg.com", "Password": "ppg123"},
    "73": {"Description": "Dulux Dealer View", "Account": "ppg-helpdesk-dulux@ppg.com", "Password": "ppg123"},
    "78": {"Description": "Prosight / Paints App", "Account": null, "Password": null},
    "79": {"Description": "ProSight Support Phone Number", "Account": "833-482-0509", "Password": null},
    "80": {"Description": "ProSight Support Email Address", "Account": "prosighthelp@ppg.com - S005135", "Password": "ProS1t32026Support"},
    "81": {"Description": "Elevate", "Account": "Z100601", "Password": "WalterP3r"},
    "82": {"Description": "CDX Excel Lookup Tool", "Account": "samuel.diaz@ppg.com", "Password": "dhjp!y"},
    "83": {"Description": "CDP Hypercare Support Email", "Account": "OrderHelp@ppg.com G344362", "Password": "CDP$upport2027!"},
    "84": {"Description": "PPGPaintsapp@ppg.com", "Account": "G015515", "Password": "#1Paints2023"},
    "85": {"Description": "PPG Paints App Customer", "Account": "K817750", "Password": "Paint$@pp!2025!"},
    "88": {"Description": "Google Voice", "Account": null, "Password": null},
    "89": {"Description": "English Voicemails - (724) 220-4773", "Account": "RITSD.english@gmail.com", "Password": "RITSDusca19!"},
    "90": {"Description": "Spanish Voicemails - (724) 220-6139", "Account": "RITSD.Spanish@gmail.com", "Password": "RITSDusca19!"},
    "91": {"Description": "French Voicemails - (724) 201-9180", "Account": "RITSD.French@gmail.com", "Password": "RITSDusca19!"},
    "92": {"Description": "Dealer Voicemails - (724) 201-6795", "Account": "RITSD.Dealer@gmail.com", "Password": "RITSDusca19!"},
    "93": {"Description": "Dealer Installations (Spectrum) - (724) 252 - ...", "Account": "RITSD.DealerInstallation@gmail.com", "Password": "RITSDusca19!"},
    "94": {"Description": "Google Voice Login (On-Call)", "Account": "pafstoreenglish@gmail.com", "Password": "Nyirion3"},
    "95": {"Description": "Intwine English VM", "Account": "724.761.2315", "Password": null},
    "96": {"Description": "Intwine Spanish VM", "Account": "724.761.2219", "Password": null},
    "97": {"Description": "Intwine French VM", "Account": "724.761.1916", "Password": null},
    "98": {"Description": "Intwine Oncall VM", "Account": "724.510.7214", "Password": null},
    "101": {"Description": "Builds Credentials", "Account": null, "Password": null},
    "102": {"Description": "Administrator Builds Password", "Account": ".\\Administrator", "Password": "password"},
    "103": {"Description": "BEDFORD-BEDFORD 8401", "Account": "8401", "Password": "Horseradish2025"},
    "104": {"Description": "BRANTFORD-KING GEORGE 8408", "Account": "8408", "Password": "Passionate2025"},
    "105": {"Description": "HALIFAX-CHAIN LAKE 8461", "Account": "8461", "Password": "Wintergreen2025"},
    "106": {"Description": "THORNHILL-DONCASTER 8605", "Account": "8605", "Password": "Blackhearth2025"},
    "107": {"Description": "THUNDER BAY-784 MEMORIAL 8607", "Account": "8607", "Password": "Blackberry2025"},
    "108": {"Description": "BARRIE-BAYFIELD 8652", "Account": "8652", "Password": "Silverberry2025"},
    "114": {"Description": null, "Account": "Franchisee Elevate Accounts", "Password": "faxxxx-#"}
  };  



















