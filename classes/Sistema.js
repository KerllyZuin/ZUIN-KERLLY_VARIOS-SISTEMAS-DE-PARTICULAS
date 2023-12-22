class Sistema {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.ps = [];
    this.t = random(100);
    this.colors = [
      color(random(100, 255), random(255), 0),
      color(random(255), 0, random(100, 255)),
    ];
  }

  update() {
    this.t += 0.01;
    this.pos.x = map(noise(this.t), 0, 1, 0, width);
    this.pos.y = map(noise(this.t + 10), 0, 1, 0, height);

    let colorIndex = Math.floor(random(this.colors.length));
    let color = this.colors[colorIndex];

    // Crear partícula círculo
    let circleParticle = new Particula(this.pos.x, this.pos.y, color, "circle");
    this.ps.push(circleParticle);

    // Crear partícula rectángulo
    let rectangleParticle = new Particula(
      this.pos.x,
      this.pos.y,
      color,
      "rectangle"
    );
    this.ps.push(rectangleParticle);

    // Crear partícula triángulo
    let triangleParticle = new Particula(
      this.pos.x,
      this.pos.y,
      color,
      "triangle"
    );
    this.ps.push(triangleParticle);

    // Eliminar partículas muertas del array
    for (let i = this.ps.length - 1; i >= 0; i--) {
      if (!this.ps[i].isAlive) {
        this.ps.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.ps.length; i++) {
      this.ps[i].update();
      this.ps[i].display();
    }
  }
}
