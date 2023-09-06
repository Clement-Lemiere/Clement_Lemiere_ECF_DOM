// Get elements of the html document
const generateTableBtn = document.getElementById('generateTableBtn');
const main = document.getElementById('main');
const markTable = document.getElementById('markTable');
const switchModeBtn = document.getElementById('switchModeBtn');
const markInputs = document.querySelectorAll('.mark');  

// add an event listener to make the table and button appear
generateTableBtn.addEventListener('click', () => {
    switchModeBtn.style.opacity = '1';
    markTable.style.opacity = '1';
    generateTableBtn.style.opacity = '0';
});

// Reinitialize all the data from table inputs
function resetTableData() {
    markInputs.forEach(input => {
      input.value = '';
    });
};

// Add an event listener in a loop to watch every inputs
markInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const value = parseInt(event.target.value);
        if (isNaN(value) || value < 1 || value > 5) {
            event.target.value = ''; // Reinitialize input if entry is incorrect
            return;
        }
        
        // Automatically switch to the next input
        if (index < markInputs.length - 1) {
            markInputs[index + 1].focus();
        } else {
            // If last input, go to the first one
            markInputs[0].focus();
        }
    });
});



// Associate numbers with classes
function assignNumberBackground(number) {
    const element = document.getElementById(number);
    
    if (/^1$/.test(number)) {
      element.classList.add('colorOne');
    } else if (/^2$/.test(number)) {
      element.classList.add('colorTwo');
    } else if (/^3$/.test(number)) {
      element.classList.add('colorThree');
    } else if (/^4$/.test(number)) {
      element.classList.add('colorFour');
    }
};


// Add event listener on click 
switchModeBtn.addEventListener('click', function() {
    // Reset all datas on modes switches
    resetTableData();
    
    // Check for markByNumber class in the Table
    if (markTable.classList.contains('markByNumber')) {
        // If number mode, switch to color mode
        markTable.classList.toggle('markByColor');
        markTable.classList.toggle('markByNumber');
        switchModeBtn.textContent = "Notes par couleur";
         
    //if color mode is set, switch to number mode
    } else if (markTable.classList.contains('markByColor')) {
        markTable.classList.remove('markByColor');
        markTable.classList.add('markByNumber');
        switchModeBtn.textContent = "Notes par chiffre";
    }
    // Add Keydown listener event 
    markTable.addEventListener('keydown', (event) => {
    // get key pressed value
        const keyNumber = parseInt(event.key);

        // Check if the number picked by the user is correct
        if (!isNaN(keyNumber) && keyNumber >= 1 && keyNumber <= 4) {
            // Get the value on the focused input
            const focusedInput = document.activeElement;
            
            // associates a class according to the color chosen by the user with a key
            focusedInput.classList.remove('colorOne', 'colorTwo', 'colorThree', 'colorFour');
            if (keyNumber === 1) {
                focusedInput.classList.add('colorOne');
            } else if (keyNumber === 2) {
                focusedInput.classList.add('colorTwo');
            } else if (keyNumber === 3) {
                focusedInput.classList.add('colorThree');
            } else if (keyNumber === 4) {
                focusedInput.classList.add('colorFour');
            }
        }
    });
});