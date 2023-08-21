const emailBtn=document.getElementById("emailBtn");
const passwordBtn=document.getElementById("passwordBtn");
const nameBtn=document.getElementById("nameBtn");
const errortext=document.getElementById("errortext");

emailBtn.addEventListener("click",()=>{
    const email=document.getElementById("email").value;
    if(validateEmail(email)){
        errortext.textContent="";
    }else{
        errortext.textContent="invalid email";
    }
});
passwordBtn.addEventListener("click",()=>{
    const password=document.getElementById("password").value;
    if(validatepassword(password)){
        errortext.textContent="";
    }else{
        errortext.textContent="invalid password";
    }
});

nameBtn.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    if(validatename(name)){
        errortext.textContent="";
    }else{
        errortext.textContent="name";
    }
});


