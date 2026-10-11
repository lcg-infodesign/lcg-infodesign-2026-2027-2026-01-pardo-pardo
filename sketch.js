let Cmax = 500;
let n = 500;
let pX = [];
let pY = [];
let toccato = [];   // variabile per memoria
let i, t;

function setup() {
  createCanvas(Cmax, Cmax);
  
}

function draw() {
  //ciclo per griglia
  background(200);
  for (t = 0; t < n; t += 5) {
    for (i = 0; i < n; i += 5) {
      pX[t] = t;
      pY[i] = i;
      noStroke();

      // colora se tasto è premuto con raggio 15
      if (mouseIsPressed && (mouseX - pX[t]) * (mouseX - pX[t]) + (mouseY - pY[i]) * (mouseY - pY[i]) < 225) {
        toccato[t * n + i] = true;
      }

      // colore dei quadrati
      if (toccato[t * n + i]) {
        fill(155, 105, 112);
      } else {
        fill(50,190,190);
      }

      square(pX[t], pY[i], 3.5);
    }
  }
   fill(0);
  //testo
  text("mouseX:" + mouseX + ". mouseY:" + mouseY + ". tenere_premuto_per_disegnare."+" doppio_click_per_il_reset" , 20, 20,2);
  
}

// reset
function doubleClicked() {
  toccato = [];
}