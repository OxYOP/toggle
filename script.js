function toggle() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    if (button.innerText === "Click Me") {
        container.style.backgroundColor = "#e74c3c";
        text.innerText = "Changed Text";
        button.innerText = "Go Back";
    } else {
        container.style.backgroundColor = "#3498db";
        text.innerText = "Initial Text";
        button.innerText = "Click Me";
    }
}
