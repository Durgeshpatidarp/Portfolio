let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");

cvBtn.addEventListener("click", function()
{
    alert("Download Succesfully")
})


submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let mess = document.getElementById("mess");

    if(email.value == "" && pass.value == "" && mess.value == ""){
        alert("Please Fill Detail")
    }else{
        alert("You Logged IN")
        email.value="";
        pass.value="";
        mess.value="";

    }

})




