class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.hour = 0;
    this.celestialBodies = [];
  }

  clearCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    return this;
  }

  setHour(hour) {
    this.hour = hour;
  }

  setCelestialBodies(bodiesArray) {
    bodiesArray.forEach((celestialBody) => {
      if (celestialBody instanceof CelestialBody) {
        this.celestialBodies.push(celestialBody);
      }
    });
    return this;
  }

  render() {
    this.celestialBodies.forEach(this._renderCelestialBody.bind(this));

    return this;
  }

  _renderCelestialBody(celestialBody) {
    let coordX, coordY;
    if (celestialBody.hasCenter()) {
      [coordX, coordY] = celestialBody.getPosition(this.hour);
    } else {
      [coordX, coordY] = [this.canvas.width/2, this.canvas.height/2];
      celestialBody.setPosition(coordX, coordY);
    }

    this.ctx.beginPath();
    this.ctx.arc(coordX, coordY, celestialBody.radius, 0,  2 * Math.PI, true);
    this.ctx.fillStyle = celestialBody.color;
    this.ctx.fill();
  }
}
