document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
    const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
    const output = document.getElementById('output');
    const transformButton = document.getElementById('transformButton');

    transformButton.addEventListener('click', function() {
        let text = inputText.value;

        if (uppercaseCheckbox.checked) {
            text = text.toUpperCase();
        }

        if (lowercaseCheckbox.checked) {
            text = text.toLowerCase();
        }

        output.textContent = text;
    });
});
