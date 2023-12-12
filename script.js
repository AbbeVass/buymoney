const amount = document.getElementById("amount");
function buy() {
    if (amount.value) {
        var popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = "Your purchase of $" + amount.value + " is now complete &#128077;";
        const container = document.querySelector(".popup-container");
        container.appendChild(popup);
        setTimeout(function() {
            container.removeChild(popup);
        }, 2000);
    }
}

const numberMap = ["1","2","3","4","5","6","7","8","9","0"];

document.addEventListener("keydown", function(event) {
    if (amount == document.activeElement) { // If the amount input is focused
        if (numberMap.includes(event.key)) {
            if (amount.value.length < 17)
            amount.value += event.key;
        }
        if (event.key === "Enter") {
            buy();
        }
        if (event.key !== "Backspace") {
            event.preventDefault();
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
        document.getElementById("message").style.right = "5px";
    }, 20000);
});