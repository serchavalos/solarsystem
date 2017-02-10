const CelestialBody = require('./CelestialBody.js');

/**
 * @class
 */
class OrbitingBody extends CelestialBody {
  /**
   * @constructor
   */
  constructor(props, centerBody, hoursAroundCenter, distanceToCenter) {
    super(props);

    this.centerBody = centerBody;
    this.hoursAroundCenter = hoursAroundCenter;
    this.distanceToCenter = distanceToCenter;
  }

  /**
   * @param {int} hour
   * @return {int} Calculated radians according to a given hour
   */
  getRadians(hour) {
    return ((hour / this.hoursAroundCenter) * 360) * (Math.PI / 180);
  }

  /**
   * Given an hour, it returns the coordinates in the orbit
   * @param {int} hour
   * @return {array<int, int>} Current coordinates
   */
  getPosition(hour) {
    let [centerX, centerY] = this.centerBody.getPosition(hour);
    let posX = centerX + Math.floor((Math.sin(this.getRadians(hour)) * this.distanceToCenter));
    let posY = centerY - Math.floor((Math.cos(this.getRadians(hour)) * this.distanceToCenter));

    return [posX, posY];
  }
}

module.exports = OrbitingBody;