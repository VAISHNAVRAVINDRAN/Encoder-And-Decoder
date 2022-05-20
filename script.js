const entxt=document.querySelector(".entxt");
const detxt=document.querySelector(".detxt");
const btn=document.querySelector(".btn");
btn.addEventListener("click", code);
function code() {
const txt=document.querySelector(".text").value;
try{
    const temp=btoa(txt);
    entxt.innerHTML=btoa(temp);   
    detxt.innerText=atob(temp);  
}  
catch(err){
    entxt.innerHTML=txt+" : Not Encodable";   
    detxt.innerText=txt+" : Not decodable";
}
}
