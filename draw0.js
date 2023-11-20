// Získání reference k HTML canvas elementu s id 'myCanvas'
let canvas = document.getElementById('myCanvas');

// Získání 2D vykreslovacího kontextu pro canvas
let ctx = canvas.getContext('2d');

// Nastavení barvy výplně na šedou
ctx.fillStyle = '#000000';

// Vykreslení obdélníka, který pokryje celý canvas touto šedou barvou
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Přidání posluchače událostí k celému dokumentu pro detekci stisku klávesy
document.addEventListener('keydown', function(event) {
    console.log(event);
    // Kontroluje, zda byla stisknuta klávesa Escape
    if (event.code === 'Escape') {
        // Pokud ano, znovu vykreslí celý canvas šedou barvou
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return; // Ukončení funkce
    }
    switch (event.code){
        case 'KeyS':
            randomElipse();
        break;
        case 'KeyM':
            drawManySquares();
            break;
        case 'KeyE':
             // Generuje náhodné souřadnice x a y uvnitř plátna
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    // Generuje náhodnou velikost obdélníka mezi 50 a 150
    let size = Math.random() * 100 + 50;

    // Generuje náhodnou barvu
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    // Vykreslí obdélník s náhodnými parametry
    drawRectangle(x, y, size, size, col);
            break;
            case 'KeyG':
                drawTarget(Math.random()*20+5,Math.random()*10+5);
                break;
            case 'KeyV':
                recursiveTarget(20,10)
                break;
    }

});

function randomElipse(){
    let w = Math.random() * 100 + 50;
    let h = Math.random() * 100 + 50;
    let x = (Math.random() * (canvas.width - w )) + w / 2;
    let y = (Math.random() * (canvas.height - h)) + h / 2;
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;


drawEllipse(x,y,w,h,col);

}

function drawManySquares(){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    let r=200;
    drawSquare(x,y,r,col);

    for (let i = 0; i < 5; i++) {
        drawSquare(x,y,r,col);
        r-=50;
    }

    drawSquare(x,y,r,col);


}


function drawTarget(cirles,gap){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    for (let i = 1; i <= cirles; i++) {
        let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        drawCircle(x,y,i*gap,col);    
    }


        


    }
function recursiveTarget(cirkles, gap){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    if(cirkles>0){
        let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        drawCircle(x,y,cirkles*gap,col);
        recursiveTarget(cirkles-1,gap);
    } else{
        return;
    }
}
    


// Funkce pro vykreslení obdélníka na plátno s danými parametry
function drawRectangle(x, y, w, h, col) {
    // Nastavení barvy výplně pro obdélník
    ctx.fillStyle = col;
    ctx.strokeStyle = col;
    // Vykreslení obdélníka na plátno s danými souřadnicemi (x, y),
    // šířkou (w) a výškou (h)
    // ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
}

// Funkce pro vykreslení elipsy na plátno s danými parametry
function drawEllipse(x, y, w, h, col) {
    // Nastavení barvy výplně pro elipsu
    ctx.fillStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení elipsy s centrem v bodě (x, y), s horizontálním poloměrem (w / 2),
    // vertikálním poloměrem (h / 2) a úhlem od 0 do 2π (což je celý kruh)
    ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
    // Vyplnění elipsy nastavenou barvou
    ctx.fill();
}

// Funkce pro vykreslení kruhu na plátno s danými parametry
function drawCircle(x, y, r, col) {
    // Nastavení barvy výplně pro kruh
    ctx.strokeStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení kruhu s centrem v bodě (x, y), poloměrem (r) a úhlem od 0 do 2π
    // (což je celý kruh)
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    // Vyplnění kruhu nastavenou barvou
    ctx.stroke();
}

// Funkce pro vykreslení čtverce na plátno s danými parametry
function drawSquare(x, y, s, col) {
    // Nastavení barvy výplně pro čtverec
    ctx.strokeStyle = col;
    ctx.fillStyle = col;


    // Vykreslení čtverce na plátno s danými souřadnicemi (x, y) a rozměry (s x s)
    ctx.strokeRect(x, y, s, s);
}

