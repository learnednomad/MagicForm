let inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
    input.value = localStorage.getItem(input.id);
    input.addEventListener("input", (value) => {
        localStorage.setItem(input.id, value.target.value);
    });
});