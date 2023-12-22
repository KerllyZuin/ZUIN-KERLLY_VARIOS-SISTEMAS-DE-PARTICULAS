class Particula {
  constructor(_x, _y, _color, _shape) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 100));
    this.isAlive = true;
    this.size = Math.ceil(random(3, 15));
    this.color = _color;
    this.shape = _shape; // "circulo", "rectangulo" o "triangulo"
    this.vel = createVector(random(-5, 5), random(-5, 5));
  }

  update() {
    this.pos.add(this.vel);
    this.lifespan -= 1;

    if (this.lifespan <= 0) {
      this.isAlive = false;
    }
  }

  display() {
    fill(this.color);
    stroke(255);

    if (this.shape === "circle") {
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    } else if (this.shape === "rectangle") {
      rect(this.pos.x, this.pos.y, this.size, this.size);
    } else if (this.shape === "triangle") {
      // Calcular vértices del triángulo equiláter centrado en this.pos
      let x1 = this.pos.x - this.size / 2;
      let y1 = this.pos.y + this.size / 2;
      let x2 = this.pos.x + this.size / 2;
      let y2 = this.pos.y + this.size / 2;
      let x3 = this.pos.x;
      let y3 = this.pos.y - this.size / 2;

      // Dibujar el triángulo
      triangle(x1, y1, x2, y2, x3, y3);
    }
  }
}
