show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
            <svg id="chart" width="500" viewBox="0 0 80 60">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i><span id="valgtStolpe"ingen</span></i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" />
            <button id="endreButton" onclick="changeBarValue(chosenBar-1)" disabled>Endre valgt stolpe</button></br>
            <button onclick="addNewBar(inputValue)">Legg til stolpe</button><br />
            <button id="fjerneButton" onclick="removeBar(chosenBar-1)" disabled>Fjerne valgt stolpe</button>
            `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect id="${barNo}" onclick="choseBar(this)" width="${width}" height="${height}"
                            x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    let minHue = 240,
        maxHue = 0;
    let curPercent = (val - min) / (max - min);
    let colString =
        'hsl(' + (curPercent * (maxHue - minHue) + minHue) + ',100%,50%)';
    return colString;
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
        bar.classList.remove('setBorder');
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
