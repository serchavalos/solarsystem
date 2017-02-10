/**
 * @class
 */
class CelestialBody {
  /**
   * @constructor
   */
  constructor(props) {
    props = props || {};

    this.radius = props.radius|| 10;
    this.color = props.color || 'black';

    this.posY = 0;
    this.posX = 0;
  }

  /**
   * @param {integer} posX
   * @param {integer} posY
   */
  setPosition(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  /**
   * Returns the coordinates around the orbit
   * @return {array<int, int>} Current coordinates
   */
  getPosition() {
    return [this.posX, this.posY];
  }
}

module.exports = CelestialBody;