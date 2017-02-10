class CelestialBody {
  constructor(props) {
    props = props || {};

    this.centerBody = props.centerBody || null;
    this.hoursAroundCenter = (props.centerBody && props.hoursAroundCenter) ? props.hoursAroundCenter : 0;
    this.distanceToCenter = props.distanceToCenter || 0;
    this.radius = props.radius|| 10;
    this.color = props.color || 'black';

    this.posY = 0;
    this.posX = 0;
  }

  getDegree(hour) {
    return ((hour / this.hoursAroundCenter) * 360) * (Math.PI / 180);
  }

  hasCenter() {
    return this.centerBody !== null;
  }

  setPosition(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  getPosition(hour) {
    let [posX, posY] = [this.posX, this.posY];

    if (this.centerBody) {
      let [centerX, centerY] = this.centerBody.getPosition(hour);
      posX = centerX + (Math.sin(this.getDegree(hour)) * this.distanceToCenter);
      posY = centerY - (Math.cos(this.getDegree(hour)) * this.distanceToCenter);
    }

    return [posX, posY];
  }
}