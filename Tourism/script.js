let RUser =" ";
let RPass= " "; 
let result;
let user;
let nPass;
let cpass;
let register = () =>{
  user1 = document.getElementById("user1").value;
  nPass = document.getElementById("npass").value;
  cpass = document.getElementById("cpass").value;
    if( nPass === cpass){
        document.getElementById("valid1").textContent = "Successfully Registered.";
         return [user1, cpass];
    }else{
        document.getElementById("valid1").textContent = "Both are not match.try again..";
         return null;
    } 
}
let Registration = () =>{
    const result1 = register();
    if(result1 != null){
        [RUser,RPass]= result1;
    }
    console.log(`username = ${RUser}`);
    console.log(`Password = ${RPass}`);
}

 let login = () => {
    let user = document.getElementById("input-box1").value;
    let pass = document.getElementById("input-box2").value;
    if(user === RUser && pass === RPass){
        result=" Successfully loggin.";
    }
    else{
        result="invalid credentials.try again...";
    }
    return document.getElementById("valid").textContent = result;
    };
    // function loadPage(url) {
    //     fetch(url)
    //         .then(response => response.text())
    //         .then(html => {
    //             document.getElementById('content').innerHTML = html;
    //         })
    //         .catch(error => {
    //             console.error('Error loading the page:', error);
    //         });
    //}
    