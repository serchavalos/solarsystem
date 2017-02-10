/**
 * @class
 */
class Renderer {
  /**
   * @constructor
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.hour = 0;
    this.celestialBodies = [];
  }

  /**
   * Clear given canvas
   * @return {Renderer}
   */
  clearCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    return this;
  }

  /**
   * @param {int} hour
   * @return {Renderer}
   */
  setHour(hour) {
    this.hour = hour;
  }

  /**
   * Set the celestial bodies that will be rendered in the canvas
   *
   * @param {array<CelestialBody>} bodies
   */
  setCelestialBodies(bodies) {
    bodies.forEach((celestialBody) => {
      if (celestialBody instanceof CelestialBody) {
        this.celestialBodies.push(celestialBody);
      }
    });
    return this;
  }

  /**
   * Render all celestial bodies
   * @return {Renderer}
   */
  render() {
    this.celestialBodies.forEach(this._renderCelestialBody.bind(this));

    return this;
  }

  /**
   * Render one celestial body
   * @param {CelestialBody} celestialBody
   */
  _renderCelestialBody(celestialBody) {
    let coordX, coordY;
    if (celestialBody instanceof OrbitingBody) {
      [coordX, coordY] = celestialBody.getPosition(this.hour);
    } else {
      [coordX, coordY] = this._getCanvasCenterCoords();
      celestialBody.setPosition(coordX, coordY);
    }

    this.ctx.beginPath();
    this.ctx.arc(coordX, coordY, celestialBody.radius, 0,  2 * Math.PI, true);
    this.ctx.fillStyle = celestialBody.color;
    this.ctx.fill();
  }

  /**
   * Returns the center of the current canvas
   *
   * @return {array<int, int>}
   */
  _getCanvasCenterCoords() {
    return [this.canvas.width/2, this.canvas.height/2];
  }
}
