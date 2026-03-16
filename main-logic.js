const intro = document.getElementById("introScreen");
const btn = document.getElementById("enterBtn");
const el = document.getElementById("liamsIntro");
const sound = document.getElementById("bttf-sound");

const popup = document.getElementById("subscribePopup");
const closeBtn = document.getElementById("closePopup");
const popupBox = document.querySelector(".popup-box");

// User click unlocks audio AND starts animation
btn.addEventListener("click", () => {
  intro.style.display = "none";
  el.classList.add("start-animation");
});

// Play sound when animation begins
el.addEventListener("animationstart", () => {
  sound.play();
});

// When the sound finishes → show popup
sound.addEventListener("ended", () => {
  popup.classList.add("show");
});

// ---------------------------------------------------------
// 😈 EVIL MODE 1: Close button runs away from the mouse
// ---------------------------------------------------------

closeBtn.addEventListener("mouseover", () => {
  const boxWidth = popupBox.clientWidth;
  const boxHeight = popupBox.clientHeight;
  const btnWidth = closeBtn.clientWidth;
  const btnHeight = closeBtn.clientHeight;

  const maxX = boxWidth - btnWidth - 20;
  const maxY = boxHeight - btnHeight - 20;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  closeBtn.style.left = `${newX}px`;
  closeBtn.style.top = `${newY}px`;
});

// ---------------------------------------------------------
// 😈😈 EVIL MODE 2: Popup reappears after closing
// ---------------------------------------------------------

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");

  setTimeout(() => {
    popup.classList.add("show");
  }, 1500);
});

// ---------------------------------------------------------
// 😈😈😈 EVIL MODE 3: Popup grows every time you try to close it
// ---------------------------------------------------------

let popupScale = 1;

closeBtn.addEventListener("mouseover", () => {
  popupScale += 0.1;
  popupBox.style.transform = `scale(${popupScale})`;
});
