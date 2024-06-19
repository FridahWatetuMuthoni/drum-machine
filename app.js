const drum_pads = document.getElementById("drum-pads");
const display = document.getElementById("display");
const volume = document.getElementById("volume");
const control = document.getElementById("control");

let current_volume = 0.06;
let position = 10;

drum_pads.addEventListener("click", handlePlay);
volume.addEventListener("click", increaseVolume);

function handlePlay(event) {
  if (event.target && event.target.nodeName === "BUTTON") {
    const value = event.target.value;
    display.innerText = clicked_drum(value);
    const audio = event.target.querySelector("audio");
    if (audio) {
      // Reset the audio to start from the beginning
      audio.currentTime = 0;
      // Play the audio
      audio.play();
      audio.volume = current_volume;
    }
  }
}

function clicked_drum(value) {
  switch (value) {
    case "Q":
      return "Heater 1";
    case "W":
      return "Heater 2";
    case "E":
      return "Heater 3";
    case "A":
      return "Heater 4";
    case "S":
      return "Clap";
    case "D":
      return "Open-HH";
    case "Z":
      return "Kick-n-Hat";
    case "X":
      return "Kick";
    case "C":
      return "Closed-HH";
  }
}

function increaseVolume() {
  const containerWidth = document.querySelector("#control-line").offsetWidth;
  const step = 5;
  const max_position = containerWidth - control.offsetWidth;

  if (position < max_position) {
    position += step;
    if (current_volume < 1) {
      current_volume += 0.03;
    }

    control.style.left = position + "px";
  }
}
