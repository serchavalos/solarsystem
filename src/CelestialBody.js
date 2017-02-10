class CelestialBody {
  constructor(props) {
    props = props || {};

    this.radius = props.radius|| 10;
    this.color = props.color || 'black';

    this.posY = 0;
    this.posX = 0;
  }

  setPosition(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  getPosition(hour) {
    return [this.posX, this.posY];
  }
}

module.exports = CelestialBody;