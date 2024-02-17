const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yehey Dili wala naman diay ka ng luod saako hehe";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

});
noBtn.addEventListener("mouseover", () => {
  question.innerHTML = "Nanong luod luod paman ka nako Princess Sorry na 😭";
  
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX); // Fix typo: change "maxx" to "maxX"
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px"; // Fix typo: change "noẞtn" to "noBtn"
})

  