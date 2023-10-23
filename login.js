let signup=document.getElementById("signup");
let signin=document.getElementById("signin");
let nameField=document.getElementById("namefield");
let title=document.getElementById('title');
let name1=document.getElementById('name1');
let tag=document.getElementById('tag');



let okaybtn=document.getElementById('done');

signin.addEventListener('click', ()=>{
    nameField.style.display='none';
    signup.classList.add('disable');
    signin.classList.remove('disable');
    
})


signup.addEventListener('click',()=>{
    nameField.style.display='flex';
    signup.classList.remove('disable');
    signin.classList.add('disable');
} )




