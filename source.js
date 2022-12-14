console.log("test!");

let index = 0;
let direction = -1;

let timeOut = setInterval(() => {
    if (index == -1000) direction = 1;
    if (index == 0) direction = -1;
    moveFrame(500 * direction);
}, 5000);

const leftArrowButton = document.querySelector(".left-arrow");
const rightArrowButton = document.querySelector(".right-arrow");

const circles = document.querySelectorAll(".image-circle");
circles[0].style.backgroundColor = "red";

leftArrowButton.addEventListener("click", () => {
    clearInterval(timeOut);
    moveFrame(500);
});

rightArrowButton.addEventListener("click", () => {
    clearInterval(timeOut);
    moveFrame(-500);
});

const moveFrame = function (value) {
    if (index + value <= -1500 || index + value > 0) {
        return;
    }

    index += value;

    circles.forEach((circle) => {
        circle.style.backgroundColor = "white";
    });

    circles[Math.abs(index / 500)].style.backgroundColor = "red";
    const pictures = document.querySelector(".pictures");
    pictures.style.transform = `translateX(${index}px)`;
};
