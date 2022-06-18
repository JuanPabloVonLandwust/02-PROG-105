let app = {name: "Default", password: "Aa1Bb2Cc", length: 8};
let types = [0, 0, 0];
const TYPES = 3;
const VALID_PASSWORD = 7;

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

    return sum == VALID_PASSWORD;
} // isValid()

let appName = "Microsoft";
let length = 16;

app["password"] = generatePassword(appName, length);

console.log("Name: " + app["name"]);
console.log("Password: " + app["password"]);