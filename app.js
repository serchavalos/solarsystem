window.onload = function() {
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

  const moon = new CelestialBody({
    centerBody: earth,
    distanceToCenter: 20,
    radius: 5,
    hoursAroundCenter: 24,
    color: 'gray'
  });

  const mars = new CelestialBody({
    centerBody: sun,
    distanceToCenter: 150,
    radius: 10,
    hoursAroundCenter: (687 * 24),
    color: 'red'
  });

  const phobos = new CelestialBody({
    centerBody: mars,
    distanceToCenter: 14,
    radius: 2,
    hoursAroundCenter: 7,
    color: 'gray'
  });

  const deimos = new CelestialBody({
    centerBody: mars,
    distanceToCenter: 24,
    radius: 3,
    hoursAroundCenter: 60,
    color: 'gray'
  });

  const counter = document.getElementById("counter");
  const renderer = new Renderer(document.getElementById("canvas"));
  renderer.setCelestialBodies([sun, earth, moon, mars, phobos, deimos]);

  var hour = 0;
  const animate = function() {
    renderer.clearCanvas();
    renderer.setHour(hour);
    renderer.render();
    counter.innerText = parseInt(hour/24);

    hour += 1;
    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);
};