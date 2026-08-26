
window.addEventListener("load",()=>{

// boot flash effect
document.body.classList.add("ps4-boot");

setTimeout(()=>{
 document.body.classList.remove("ps4-boot");
},2500);


// terminal boot messages
const boot = [
"INITIALIZING PS4 SECURITY CORE...",
"LOADING POOPS ENGINE...",
"CHECKING SYSTEM FILES...",
"ACCESS GRANTED..."
];

const box=document.getElementById("out");

if(box){
 let i=0;
 let timer=setInterval(()=>{
   let line=document.createElement("div");
   line.innerHTML="<span style='color:#00e5ff'>[BOOT]</span> "+boot[i];
   box.prepend(line);
   i++;
   if(i>=boot.length) clearInterval(timer);
 },500);
}


// startup sound
const audio = new Audio("boot.mp3");
audio.volume = 0.35;

document.body.addEventListener("click",()=>{
 audio.play().catch(()=>{});
},{once:true});

});
