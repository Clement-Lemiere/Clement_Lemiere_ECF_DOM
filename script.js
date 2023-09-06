// Récupérez les éléments HTML dont vous avez besoin
const generateTableBtn = document.getElementById('generateTableBtn');
const main = document.getElementById('main');
const markTable = document.getElementById('markTable');
// Récupérez le bouton "Changer le mode" et les éléments d'entrée de notes
const switchModeBtn = document.getElementById('switchModeBtn');
const markInputs = document.querySelectorAll('.mark');

// Ajoutez un gestionnaire d'événements au bouton generateTableBtn
generateTableBtn.addEventListener('click', () => {
    // Affichez le bouton switchModeBtn et le tableau
    switchModeBtn.style.opacity = '1';
    markTable.style.opacity = '1';
    
    // Cachez le bouton generateTableBtn
    generateTableBtn.style.opacity = '0';
});

function resetTableData() {
    markInputs.forEach(input => {
      input.value = ''; // Réinitialise le contenu de chaque input à une chaîne vide
    });
};

if (markTable.classList.contains)

// Ajoutez un gestionnaire d'événements à chaque input
markInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const value = parseInt(event.target.value);
        if (isNaN(value) || value < 1 || value > 5) {
            event.target.value = ''; // Réinitialisez l'input en cas d'entrée incorrecte
            return;
        }
        
        // Passez automatiquement au prochain input s'il existe
        if (index < markInputs.length - 1) {
            markInputs[index + 1].focus();
        } else {
            // Si c'est le dernier input, revenez au premier input
            markInputs[0].focus();
        }
    });
});




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


// Ajoutez un gestionnaire d'événements "click" au bouton switchModeBtn
switchModeBtn.addEventListener('click', function() {
    // Réinitialise les données du tableau
    resetTableData();
    


    // Vérifie si le mode couleur est activé ou désactivé
    if (markTable.classList.contains('markByNumber')) {
        // Si le mode couleur est désactivé, active-le
        markTable.classList.toggle('markByColor');
        markTable.classList.toggle('markByNumber');
        markInputs.classList.toggle('colorDefault');

        markInputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
                let value = parseInt(event.target.value);
                if (isNaN(value) || value < 1 || value > 4) {
                    event.target.value = ''; // Réinitialisez l'input en cas d'entrée incorrecte
                    return;
                }
                // Passez automatiquement au prochain input s'il existe
                if (index < markInputs.length - 1) {
                    markInputs[index + 1].focus();
                } else {
                    // Si c'est le dernier input, revenez au premier input
                    markInputs[0].focus();
                }
            });
        });
    } else {

        // Si le mode de notation par couleur est activé, désactivez-le
        markTable.classList.remove('markByColor');
        markTable.classList.add('markByNumber');
        
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


        markInputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
                const colorNumber = parseInt(event.target.value);
                if (isNaN(colorNumber) || value < 1 || value > 4) {
                    event.target.value = ''; // Réinitialisez l'input en cas d'entrée incorrecte
                    return;
                }
                
                // Appliquez la couleur en fonction du chiffre choisi par l'utilisateur
                assignNumberBackground(value);
                
                // Passez automatiquement au prochain input s'il existe
                if (index < markInputs.length - 1) {
                    markInputs[index + 1].focus();
                } else {
                    // Si c'est le dernier input, revenez au premier input
                    markInputs[0].focus();
                }
            });
        });
    }
});

// Condition pour exécuter le code du gestionnaire d'événements "keydown" uniquement si la classe ".markByColor" existe
if (markTable.classList.contains('markByColor')) {
    
}
