let count = 0;
let btn = document.getElementById("button");
let numDisplayed = document.getElementById("display");

btn.addEventListener("click", function () {
    count++;
    numDisplayed.innerHTML = count;
});
