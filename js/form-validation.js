function comparePasswords(){
    const msg = document.getElementById("validation-msg")

    if(pword.value !== conPword.value){
        msg.textContent = "* Passwords do not match";
    }
    else msg.textContent = "";
}

const pword = document.getElementById("pword");
const conPword = document.getElementById("confirmed-pword");

pword.addEventListener("input", () =>{
    comparePasswords();
});
conPword.addEventListener("input", () =>{
    comparePasswords();
});

