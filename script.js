const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.dataset.value;
        const action = button.dataset.action;

        if (action === "clear") {
            expression = "";
            display.value = "";
            return;
        }

        if (action === "delete") {
            expression = expression.slice(0, -1);
            display.value = expression;
            return;
        }

        if (action === "calculate") {
            calculate();
            return;
        }

        expression += value;
        display.value = expression;
    });
});

function calculate() {
    try {
        const result = Function(`return ${expression}`)();

        expression = result.toString();
        display.value = expression;

    } catch {
        display.value = "Error";
        expression = "";
    }
}