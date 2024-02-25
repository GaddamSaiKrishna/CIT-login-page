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
window.history.pushState({},document.title,"/"+"cit.login");
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
    var nameValue='info.name';
    console.log(nameValue);
   document.querySelector("#name").value=nameValue;
})