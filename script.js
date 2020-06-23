window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");

  const colors = [
    "#916565",
    "#90ee90",
    "#ffffe0",
    "#800000",
    "#c71585",
    "#cd853f",
  ];
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubble(index);
    });
  });
  const createBubble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener('animationend', ()=>{
        visual.removeChild(this)
    })
  };
});
