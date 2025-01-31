let RUser = " ";
let RPass = " ";
let result;
let user1;
let nPass;
let cpass;

let register = () => {
    user1 = document.getElementById("user1").value;
    nPass = document.getElementById("npass").value;
    cpass = document.getElementById("cpass").value;

    if (nPass === cpass) {
        document.getElementById("valid1").textContent = "Successfully Registered.";
        return [user1, cpass];
    } else {
        document.getElementById("valid1").textContent = "Both are not match. Try again.";
        return null;
    }
}

let registerUser = () => {
    const result = register();
    if (result !== null) {
        [RUser, RPass] = result;
    }
    console.log(`Registered User: ${RUser}`);
    console.log(`Registered Password: ${RPass}`);
}

let login = () => {
    let user = document.getElementById("input-box1").value;
    let pass = document.getElementById("input-box2").value;

    if (user === RUser && pass === RPass) {
        result = "Successfully logged in.";
    } else {
        result = "Invalid credentials. Try again...";
    }
    return document.getElementById("valid").textContent = result;
};

function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the page:', error);
        });
}

