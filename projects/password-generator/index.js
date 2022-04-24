const passwordSpansArray = [
    document.querySelector('.first-password'),
    document.querySelector('.second-password'),
    document.querySelector('.third-password'),
    document.querySelector('.fourth-password')
];

let maxPasswordLength = prompt("How much characters should the password have? (Max 10 characters)")

// Null - user pressed Cancel, "" - user pressed OK without providing any number
if (maxPasswordLength === null || maxPasswordLength === "" || maxPasswordLength > 10) {
    maxPasswordLength = 10;
    alert("No character amount specified or the specified amount exceeded 10, setting the amount to 10")
}

const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    '0','1','2','3','4','5','6','7','8','9',
                    '!','#','$','%','&','*','^','(',')','@','#','+','-','[',']'
                    ];

function renderPasswords() {
    for (let i=0; i < passwordSpansArray.length; i++) {
        passwordSpansArray[i].textContent = password();
    }
}

function password() {
    let generatedPassword = "";

    for (let j=0; j < maxPasswordLength; j++) {
        let randomNumber = Math.floor(Math.random()*characters.length);
        generatedPassword += characters[randomNumber];
    }

    return generatedPassword;
}