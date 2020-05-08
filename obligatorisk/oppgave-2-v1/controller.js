// @ts-nocheck
var contentDiv = document.getElementById('content');

function choseBar(bar) {
    buttonActivation(setBorder(bar));
}

function setBorder(bar) {
    const valgtStolpe = document.getElementById('valgtStolpe');
    if (chosenBar != bar.id) {
        for (let i = 0; i < numbers.length; i++) {
            const bars = i + 1;
            document.getElementById(`${bars}`).classList.remove('barBorder');
        }
        chosenBar = bar.id;
        valgtStolpe.innerHTML = chosenBar;
        bar.classList.add('barBorder');
        return true;
    } else {
        bar.classList.remove('barBorder');
        valgtStolpe.innerHTML = 'ingen';
        chosenBar = '';
        return false;
    }
}

function buttonActivation(chosen) {
    const fjerneButton = document.getElementById('fjerneButton');
    const endreButton = document.getElementById('endreButton');
    if (chosen === true) {
        endreButton.removeAttribute('disabled');
        fjerneButton.removeAttribute('disabled');
    } else {
        endreButton.setAttribute('disabled', '');
        fjerneButton.setAttribute('disabled', '');
    }
}

function removeBar(barNo) {
    numbers.splice(barNo, 1);
    show();
}

function changeBarValue(barNo) {
    if (inputValue < 1 || inputValue > 10 || inputValue == undefined) {
        alert('Ugyldig verdi, skriv inn tall fra 1-10');
    } else {
        numbers[barNo] = inputValue;
    }
    show();
}

function addNewBar(inputValue) {
    if (inputValue < 1 || inputValue > 10 || inputValue == undefined) {
        alert('Ugyldig verdi, skriv inn tall fra 1-10');
    } else {
        numbers.push(inputValue);
    }
    show();
}
