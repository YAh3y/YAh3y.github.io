
window.addEventListener("load",()=>{

const layer=document.createElement("div");
layer.className="cyber-particles";

for(let i=0;i<70;i++){

 let p=document.createElement("span");

 p.style.left=Math.random()*100+"%";
 p.style.animationDuration=(5+Math.random()*10)+"s";
 p.style.animationDelay=(-Math.random()*10)+"s";

 let size=2+Math.random()*6;
 p.style.width=size+"px";
 p.style.height=size+"px";

 layer.appendChild(p);
}

document.body.appendChild(layer);


// 3D movement with mouse

const terminal=document.getElementById("out");

if(terminal){

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.clientX)/80;
let y=(window.innerHeight/2-e.clientY)/80;

terminal.style.transform=
`rotateY(${x}deg) rotateX(${y}deg)`;

});

}

});
