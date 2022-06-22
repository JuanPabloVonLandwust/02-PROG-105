let apps = [];
let app = {name: "Default", password: "Aa1Bb2Cc", length: 8};
let types = [0, 0, 0];
const TYPES = 3;
const VALID_PASSWORD_LENGTH = 7;

function generatePassword(name, length) {
    app["name"] = name;
    app["length"] = length;
    password = "";

    for (let i = 0; i < app["length"]; i++) {
        let type = Math.ceil(TYPES * Math.random());
        let code;
        
        if (type == 1) {    // generate a random number
            code = Math.floor((58-48) * Math.random() + 48);
            types[0] = 1;
        }
        else if (type == 2) {   // generate a random capital letter
            code = Math.floor((91-65) * Math.random() + 65);
            types[1] = 2;
        }
        else {  // generate a random lowercase letter
            code = Math.floor((123-97) * Math.random() + 97);
            types[2] = 4;
        }
            
        password += String.fromCharCode(code);
    }

    if (!isValid)
        generatePassword(name, length);

    return password;
} // generatePassword()

function isValid() {
    let sum = 0;

    for (let i = 0; i < types.length; i++)
        sum += types[i];

    return sum == VALID_PASSWORD_LENGTH;
} // isValid()

function exists(name) {
    for (let i = 0; i < apps.length; i++) {
        if (apps[i].name.toUpperCase() == name.toUpperCase())
            return true;
    }
    return false;
}

let siteInput = document.querySelector(".in-site");
let generateHandler = document.querySelector(".btn-generate");
let sitesOutput = document.querySelector(".out-sites");
let successDiv = document.querySelector(".success-msg");
let errorDiv = document.querySelector(".error-msg");

generateHandler.addEventListener("click", getSite);

function getSite() {
    let site = siteInput.value;

    successDiv.classList.add("hidden");
    errorDiv.classList.add("hidden");

    if (site.length > 0) {
        if (!exists(site)) {
            app["password"] = generatePassword(site, 16);
            apps.push(app);
            let dataDiv = document.createElement("div");
            dataDiv.className = "div";
            let data = app["name"] + "\t\t" + app["password"];
            console.log(data);
            dataDiv.textContent = data;
            document.getElementsByClassName("out-sites")[0].appendChild(dataDiv);
            showSuccessMsg("✅ Password successfully generated");
        }
        else
            showErrorMsg(`🚫 Password already generated for ${site}`);
    }
    else
        showErrorMsg("🚫 Type a site name");
} // getSite()
 
function showSuccessMsg(message) {
    successDiv.textContent = message;
    successDiv.classList.remove("hidden");
} // showSuccessMsg()

function showErrorMsg(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
} // showErrorMsg()