
/*
** getElementById = prende elemento HTML con id="canvas"
** getContext() --> accede al contesto grafico bidimensionale, necessario per disegnare.
*/
let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

/*
** Speed = quanto velocemente si muove la palla, 4 px per frame
** Position = posizione orrizizontale attuale della palla
** moveSpeed = direzione attuale del movimento (+4 o -4)
** radius = raggio della palla
*/
const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;


/* 
** La palla rimbalza quando tocca i bordi. Tocca il bordo destro del canvas (640 px per larghezza)
** position - radius < 0: tocca il bordo sinistro
** moveSpeed cambia il segno per invertire la direzione
** position += moveSpeed aggiorna la posizione.  
*/
function moveBall()
{
    if (position + radius > 640)
    {
        moveSpeed = -speed;
    }
    else if (position - radius < 0)
    {
        moveSpeed = speed;
    }
    position += moveSpeed
}

function    drawBall()
{
    context.clearRect(0, 0, 640, 480);
    
    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate()
{
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);