const amount = document.getElementById("amount");
function buy() {
    if (amount.value) {
        var popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = "Din köp på " + amount.value + " kr är nu genomfört &#128077;";
        const container = document.querySelector(".popup-container");
        container.appendChild(popup);
        setTimeout(function() {
            container.removeChild(popup);
        }, 2000);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        buy();
    }
});