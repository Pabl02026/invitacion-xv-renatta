document.addEventListener("DOMContentLoaded",()=>{

// scroll reveal tipo instagram
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));

// flores animadas
const contenedor=document.querySelector(".flores");

for(let i=0;i<20;i++){
let flor=document.createElement("span");
flor.innerHTML="🌸";
flor.style.left=Math.random()*100+"vw";
flor.style.animationDuration=(5+Math.random()*5)+"s";
contenedor.appendChild(flor);
}

// lógica normal
const params=new URLSearchParams(window.location.search);
const pases=params.get("pases")||"1";

document.getElementById("pases").textContent="🎟️ "+pases+" persona(s)";

document.getElementById("ubicacion").href="https://maps.google.com";
document.getElementById("whatsapp").href="https://wa.me/528443884334";

const btn=document.getElementById("abrirInvitacion");
const pantalla=document.getElementById("pantallaInicio");
const audio=document.getElementById("musica");

btn.onclick=()=>{
pantalla.style.display="none";
audio.play().catch(()=>{});
};

});
