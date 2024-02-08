let WEIGHT_CLASS = "Stick";
let WEIGHT = 100;
let CLICK_VALUE = 1;

function click() {
    WEIGHT += CLICK_VALUE;
    updateHTML();
}

function updateHTML() {
    $("#weight")[0].innerHTML = WEIGHT + " lbs";
}

// bind event listeners
document.getElementById("clicker").addEventListener("click", () => {
    click();
})