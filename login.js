let btn=document.querySelector("#submit");
        btn.addEventListener('mousemove',e=>{
            let rect=e.target.getBoundingClientRect();
            let x=e.clientX*3-rect.left;
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
let reg = document.querySelector(".reg");
let wel = document.querySelector(".wel");

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    reg.classList.add("hidden");
    wel.classList.remove("hidden");

    // Get form values
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let college = document.getElementById("college").value;
    let branch = document.getElementById("branch").value;
    let year = document.getElementById("year").value;

    // Display form values
    let welContent = document.querySelector(".wel ul");
    welContent.innerHTML = `
        <li>Name: ${name}</li>
        <li>Username: ${username}</li>
        <li>Mobile No.: ${number}</li>
        <li>College/School: ${college}</li>
        <li>Department: ${branch}</li>
        <li>Year of Study: ${year}</li>
    `;
});

