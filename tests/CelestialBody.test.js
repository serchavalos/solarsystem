const assert = require('assert');
const CelestialBody = require('../src/CelestialBody.js');

describe('CelestialBody', () => {

  const sun = new CelestialBody({
    radius: 15,
    color: 'orange'
  });

  const earth = new CelestialBody({
    centerBody: sun,
    distanceToCenter: 100,
    radius: 9,
    hoursAroundCenter: (365 * 24),
    color: 'blue'
  });

  describe('#getRadians', () => {
    it('return the right radian according to a given day (in hours)', () => {
      assert.equal(earth.getRadians(0), 0);

      // @see http://www.rapidtables.com/convert/number/radians-to-degrees.htm
      let radians = (earth.getRadians(365 * 24) + '').substring(0, 4);
      assert.equal(radians, '6.28');

      radians = (earth.getRadians(365/2 * 24) + '').substring(0, 4);
      assert.equal(radians, '3.14');
    });
  });

  describe('#getPosition', () => {
    it('return the right position', () => {
      assert.deepEqual(earth.getPosition(0), [0, -100]);
      assert.deepEqual(earth.getPosition(365/4 * 24), [100, 0]);
      assert.deepEqual(earth.getPosition(365/2 * 24), [0, 100]);
      assert.deepEqual(earth.getPosition(365 * 24), [-1, -100]);

      // Sun is not orbiting
      assert.deepEqual(sun.getPosition(0), [0, 0]);
      assert.deepEqual(sun.getPosition(365/2 * 24), [0, 0]);
    });
  });
});
