let count = 0;
let btn = document.getElementById("button");
let resetBtn = document.getElementById("reset-button");
let numDisplayed = document.getElementById("display");

btn.addEventListener("click", function () {
    count++;
    numDisplayed.innerHTML = count;
});
resetBtn.addEventListener("click", function () {
    count = 0;
    numDisplayed.innerHTML = count;
});
