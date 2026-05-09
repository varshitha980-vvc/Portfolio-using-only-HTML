// 1. Grab the display screen
const display = document.querySelector('#maths');

// 2. Grab all buttons
const buttons = document.querySelectorAll('button');

// 3. Loop through buttons to see which one is clicked
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.innerText;

        if (value === 'AC') {
            display.value = ''; // Clear everything
        } 
        else if (value === 'DEL') {
            display.value = display.value.slice(0, -1); // Remove last character
        } 
        else if (value === '=') {
            try {
                // Fix symbols so JS understands them
                let expression = display.value.replace('×', '*').replace('÷', '/');
                display.value = eval(expression); 
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value; // Add the button number/operator to screen
        }
    });
});