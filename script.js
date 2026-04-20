document.addEventListener("DOMContentLoaded",()=>{

// scroll reveal
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));

// flores visibles
const contenedor=document.querySelector(".flores");

for(let i=0;i<40;i++){
let flor=document.createElement("span");
flor.innerHTML="🌸";
flor.style.left=Math.random()*100+"vw";
flor.style.animationDuration=(5+Math.random()*5)+"s";
contenedor.appendChild(flor);
}

// datos dinámicos
const params=new URLSearchParams(window.location.search);
const pases=params.get("pases")||"1";

document.getElementById("pases").textContent="🎟️ "+pases+" persona(s)";

document.getElementById("ubicacion").href="https://www.google.com/maps/place/Palapa+El+Fresno";
document.getElementById("whatsapp").href="https://wa.me/528443884334";

// música
const btn=document.getElementById("abrirInvitacion");
const pantalla=document.getElementById("pantallaInicio");
const audio=document.getElementById("musica");

btn.onclick=()=>{
pantalla.style.display="none";
audio.play().catch(()=>{});
};

const toggle=document.getElementById("toggleMusica");
let play=true;

toggle.onclick=()=>{
if(play){
audio.pause();
toggle.textContent="🔇 Activar música";
}else{
audio.play();
toggle.textContent="🎵 Pausar música";
}
play=!play;
};

// contador
const fechaEvento=new Date("June 20, 2026 17:00:00").getTime();

setInterval(()=>{
const ahora=new Date().getTime();
const diff=fechaEvento-ahora;

const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff/(1000*60*60))%24);
const m=Math.floor((diff/(1000*60))%60);

document.getElementById("contador").innerHTML=
`⏳ ${d} días • ${h} hrs • ${m} min`;
},1000);

});
