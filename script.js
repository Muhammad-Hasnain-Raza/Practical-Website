
const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

function func(){
var email = document.getElementById("username").value;
var pass = document.getElementById("password").value;

if (email == 'hasnain123@gmail.com' && pass == '12345678'){
    window.location.assign= ("dash.html")
    alert("successfully login")

}
else{
    alert("invalid username or password ")
}
}



