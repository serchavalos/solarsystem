window.onload = function() {
  const sun = new CelestialBody({
    radius: 15,
    color: 'orange'
  });

  const earth = new OrbitingBody({radius: 9, color: 'blue'}, sun, (365 * 24), 100);
  const moon = new OrbitingBody({radius: 5, color: 'gray'}, earth, 24, 20);
  const mars = new OrbitingBody({radius: 10, color: 'red'}, sun, (687 * 24), 150);
  const phobos = new OrbitingBody({radius: 2, color: 'gray'}, mars, 7, 14);
  const deimos = new OrbitingBody({radius: 3, color: 'gray'}, mars, 60, 24);

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