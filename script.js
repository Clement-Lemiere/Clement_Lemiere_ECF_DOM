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

        markInputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
                let value = parseInt(event.target.value);
                if (isNaN(value) || value < 1 || value > 4) {
                    event.target.value = '';
                    return;
                }
                if (index < markInputs.length - 1) {
                    markInputs[index + 1].focus();
                } else {
                    markInputs[0].focus();
                }
            });
        });
        
        //if color mode is set, switch to number mode
    } else if (markTable.classList.contains('markByColor')) {
        markTable.classList.remove('markByColor');
        markTable.classList.add('markByNumber');
        switchModeBtn.textContent = "Notes par chiffre";


    
        markInputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
                const colorNumber = parseInt(event.target.value);
                if (isNaN(colorNumber) || value < 1 || value > 5) {
                    event.target.value = '';
                    return;
                }
                assignNumberBackground(value);
                if (index < markInputs.length - 1) {
                    markInputs[index + 1].focus();
                } else {
                    markInputs[0].focus();
                }
            });
        });
    }
    // Ajoutez un gestionnaire d'événements "keydown" à l'élément markTable
    markTable.addEventListener('keydown', (event) => {
    // Récupérez la touche appuyée sous forme de chiffre
        const keyNumber = parseInt(event.key);

        // Vérifiez si la touche appuyée est l'une des options valides (1, 2, 3, 4)
        if (!isNaN(keyNumber) && keyNumber >= 1 && keyNumber <= 4) {
            // Récupérez l'input actuellement en focus
            const focusedInput = document.activeElement;
            
            // Appliquez la classe correspondante à la couleur en fonction du chiffre
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

// Condition pour exécuter le code du gestionnaire d'événements "keydown" uniquement si la classe ".markByColor" existe
if (markTable.classList.contains('markByColor')) {
    
}
