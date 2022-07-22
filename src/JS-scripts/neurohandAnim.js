let contactMeBtn = document.getElementById("contact-me-btn");
let handPicture = document.getElementById("neuro-hand-pic");

contactMeBtn.addEventListener("mouseover", () => {
  handPicture.classList.remove("neuro-hand-in");
  handPicture.className = "neuro-hand-out";
  console.log("malda");
});

contactMeBtn.addEventListener("mouseleave", () => {
  handPicture.classList.remove("neuro-hand-out");
  handPicture.className = "neuro-hand-in";
  console.log("malda2");
});
