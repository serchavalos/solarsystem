const CelestialBody = require('./CelestialBody.js');

class OrbitingBody extends CelestialBody {
  constructor(props, centerBody, hoursAroundCenter, distanceToCenter) {
    super(props);

    this.centerBody = centerBody;
    this.hoursAroundCenter = hoursAroundCenter;
    this.distanceToCenter = distanceToCenter;
  }

  getRadians(hour) {
    return ((hour / this.hoursAroundCenter) * 360) * (Math.PI / 180);
  }

  getPosition(hour) {
    let [centerX, centerY] = this.centerBody.getPosition(hour);
    let posX = centerX + Math.floor((Math.sin(this.getRadians(hour)) * this.distanceToCenter));
    let posY = centerY - Math.floor((Math.cos(this.getRadians(hour)) * this.distanceToCenter));

    return [posX, posY];
  }
}

module.exports = OrbitingBody;