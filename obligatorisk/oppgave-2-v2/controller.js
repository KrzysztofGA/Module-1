// @ts-nocheck
var contentDiv = document.getElementById('content');

function choseBar(barNo) {
    if (barNo == chosenBar) {
        chosenBar = '';
        info = `Stolpe nummer ${barNo} er ikke valgt`;
    } else {
        chosenBar = barNo;
        info = `Stolpe nummer ${barNo} er valgt`;
    }
    show();
}

function removeBar(barNo) {
    numbers.splice(barNo, 1);
    chosenBar = 0;
    info = `Stolpe fjernet fra posisjon ${barNo + 1}`;
    show();
}

function changeBarValue(barNo) {
    if (inputValue < 1 || inputValue > 10 || inputValue == undefined) {
        info = 'Ugyldig verdi, skriv inn tall fra 1-10';
        show();
    } else {
        numbers[barNo] = inputValue;
        chosenBar = 0;
        info = `Stolpe ${barNo + 1} ble endret til ${inputValue}`;
        show();
        inputValue = '';
    }
}

function addNewBar(inputValue) {
    if (inputValue < 1 || inputValue > 10 || inputValue == undefined) {
        info = 'Ugyldig verdi, skriv inn tall fra 1-10';
        show();
    } else {
        numbers.push(inputValue);
        chosenBar = 0;
        info = `Lagt stolpe i posisjon ${numbers.length} om verdi ${inputValue}`;
        show();
        inputValue = '';
    }
}
