const amount = document.getElementById("amount");
function buy() {
    while (amount.value.substring(0, 1) == 0) { // Remove all zeros at the start of the string
        amount.value = amount.value.substring(1, amount.value.length);
    }
    if (amount.value) {
        let popup = document.createElement("div");
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
        let messageBox = document.createElement("div");
        messageBox.id = "message";
        messageBox.innerHTML = "We are currently experiencing delays in delivery";
        document.body.appendChild(messageBox);
        
        setTimeout(function() { // Make sure the div is loaded before moving it
            document.getElementById("message").style.right = "5px";
        }, 100);
    }, 20000);
});