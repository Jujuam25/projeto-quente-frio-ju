let x, y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background("yellow");

  x += random(-2, 2);
  y += random(-2, 2);

  // Mantém x e y dentro dos limites da tela
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  let distancia = dist(mouseX, mouseY, x, y);

  // Define a cor com base na distância
  if (distancia < 20) {
    fill('red'); // Vermelho (próximo)
  } else {
    fill('blue'); // Azul (longe)
  }

  circle(mouseX, mouseY, distancia);
  circle(x, y, 10);

  // Quando encontra
  if (distancia < 3) {
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Encontrei!", width / 2, height / 2);
    noLoop();
  }
}
