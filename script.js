let no = document.getElementById("no");
let yes = document.getElementById("yes");
let result = document.getElementById("result");

let taille = 1;

no.addEventListener("mouseover", function(){

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    no.style.left = x + "px";
    no.style.top = y + "px";

    taille += 0.2;
    yes.style.transform = "scale(" + taille + ")";
});

yes.addEventListener("click", function(){

    result.innerHTML = `
    <canvas id="confetti"></canvas>
    <h1>OUIIIIIIIII ❤️</h1>
    <video width="300" autoplay loop muted>
<source src="oui.mp4" type="video/mp4">
</video><br><br>
    <a href="suite.html">
    <button>Clique dessus si tu veux voir la suite</button>
    </a>
    `;

    lancerConfetti();
});

function lancerConfetti(){

let canvas = document.getElementById("confetti");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettis = [];

for(let i=0;i<200;i++){
    confettis.push({
        x: canvas.width/2,
        y: canvas.height/2,
        r: Math.random()*6+2,
        vx: (Math.random()-0.5)*10,
        vy: (Math.random()-0.5)*10,
        gravity: 0.2
    });
}

function animation(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confettis.forEach(c=>{

    c.x += c.vx;
    c.y += c.vy;
    c.vy += c.gravity;

    ctx.beginPath();
    ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
    let colors=["pink","red","purple","orange"];
    ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.fill();

});

requestAnimationFrame(animation);
}

animation();
}
