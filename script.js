let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        if (display.value.includes("/0")) {
            throw "Cannot divide by zero";
        }

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});
