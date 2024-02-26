let btn=document.querySelector("#submit");
        btn.addEventListener('mousemove',e=>{
            let rect=e.target.getBoundingClientRect();
            let x=e.clientX-rect.left;
            btn.style.setProperty('--x',x + 'deg');
        })
let params={}
let regex= /([^&=]+)=([^&]*)/g, m
while (m=regex.exec(location.href)) {
    params[decodeURIComponent(m[1])]=decodeURIComponent(m[2])
} 
if(Object.keys(params).length>0){
    localStorage.setItem('authInfo',JSON.stringify(params))
}
window.history.pushState({},document.title,"/"+"CIT-login-page/login.html");
let info=JSON.parse(localStorage.getItem('authInfo'));
console.log(JSON.parse(localStorage.getItem('authInfo')))
console.log(info['access_token'])      
console.log(info['expires_in'])
fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
    headers:{
        "Authorization":`Bearer ${info['access_token']}`
    }
})
.then((data)=>data.json())
.then((info)=>{
    console.log(info);
    var nameValue=info.name;
    console.log(nameValue);
   document.querySelector("#name").value=nameValue;
})

const firebaseConfig = {
    apiKey: "AIzaSyCLgBdTdf2clX4LZTHyGBZMQuAZSJtIoQc",
    authDomain: "loginpagecit.firebaseapp.com",
    databaseURL: "https://loginpagecit-default-rtdb.firebaseio.com",
    projectId: "loginpagecit",
    storageBucket: "loginpagecit.appspot.com",
    messagingSenderId: "364150150556",
    appId: "1:364150150556:web:d2e6e8fc7533c050a32459"
  };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//
var loginFormDB=firebase.database().ref('loginForm')
document.querySelector("#submit").addEventListener("click",submitForm);
function submitForm(e){
    e.preventDefault();
    var name=getElementVal(name);
    var username=getElementVal(username);
    var number=getElementVal(number);
    var college=getElementVal(college);
    var branch=getElementVal(branch);

    console.log(name,username,number,college,branch)
}

const getElementVal = (id)=>{
    return document.getElementById(id).value;
}