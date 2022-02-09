window.addEventListener("keydown", (e) => {
  const playAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll(".keys");
  function removeTransition() {
    key.classList.remove("playing");
  }
  keys.forEach((key) => addEventListener("transitionend", removeTransition));
  if (!playAudio) return;
  playAudio.currentTime = 0;
  playAudio.play();
  key.classList.add("playing");
});
