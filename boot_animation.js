
window.addEventListener("load",()=>{
const state=document.getElementById("state");
if(state){
let text=state.innerText;
state.innerText="";
let i=0;
let timer=setInterval(()=>{
state.innerText+=text[i];
i++;
if(i>=text.length)clearInterval(timer);
},80);
}
});
