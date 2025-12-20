// TRAFFIC LIGHT SIMULATION
let lights = ["RED", "GREEN", "YELLOW"];
let currentLight = 0;

// Change traffic light automatically
function changeTrafficLight() {
  const statusText = document.getElementById("light-status");

  statusText.textContent = lights[currentLight];

  if (lights[currentLight] === "RED") {
    statusText.style.color = "red";
  } else if (lights[currentLight] === "GREEN") {
    statusText.style.color = "green";
  } else {
    statusText.style.color = "orange";
  }

  currentLight = (currentLight + 1) % lights.length;
}

// Run every 8 seconds
setInterval(changeTrafficLight, 3000);


// MONITOR PAGE ACTION
function refreshTraffic() {
  const junction = document.getElementById("junction");
  const traffic = document.getElementById("traffic");

  alert(
    "Monitoring " + junction.value +
    " | Traffic Level: " + traffic.value
  );
}