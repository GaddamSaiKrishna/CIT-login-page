let btn1=document.querySelector("#about");
let btn2=document.querySelector("#login");
btn1.addEventListener('mousemove',e=>{
    let rect=e.target.getBoundingClientRect();
    let x=e.clientX*3-rect.left;
    btn1.style.setProperty('--x',x + 'deg');
})
btn2.addEventListener('mousemove',e=>{
    let rect=e.target.getBoundingClientRect();
    let x=e.clientX-rect.left;
    btn2.style.setProperty('--x',x + 'deg');
})

function signIn(){
    let oauth2Endpoint="https://accounts.google.com/o/oauth2/v2/auth";
    let form =document.createElement('form');
    form.setAttribute('method','GET');
    form.setAttribute('action',oauth2Endpoint);
    let params ={
        "client_id":"581333481597-8rrrin5jg3kcaum95m572qrvk02gjp9p.apps.googleusercontent.com",
        "redirect_uri":"https://gaddamsaikrishna.github.io/CIT-login-page/login.html",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes":'true',
        'state':'pass-through-value'
    }
    for(var p in params){
        let input = document.createElement('input');
        input.setAttribute('type','hidden');
        input.setAttribute('name',p);
        input.setAttribute('value',params[p]);
        form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
}