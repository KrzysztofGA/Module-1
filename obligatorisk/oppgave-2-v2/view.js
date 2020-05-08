show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    let buttonDisabled = '';
    chosenBar == '' || chosenBar == undefined
        ? (buttonDisabled = 'disabled')
        : '';
    let valgtStolpe = 'ingen';
    chosenBar == '' || chosenBar == undefined
        ? (valgtStolpe = 'ingen')
        : (valgtStolpe = chosenBar);
    contentDiv.innerHTML = `
            <svg id="chart" width="500" viewBox="-1 0 100 61">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>${valgtStolpe}</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" />
            <button id="endreButton" onclick="changeBarValue(chosenBar-1)" ${buttonDisabled}>Endre valgt stolpe</button>
            <button onclick="addNewBar(inputValue)">Legg til stolpe</button>
            <button id="fjerneButton" onclick="removeBar(chosenBar-1)" ${buttonDisabled}>Fjerne valgt stolpe</button>
            <p><span id="info">INFO:</span> ${info}</p>
            `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let borderStyle = '';
    barNo == chosenBar ? (borderStyle = 'barBorder') : '';
    let x = (barNo - 1) * (width + spacing);
    let height = number * 5;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect id="${barNo}" onclick="choseBar(${barNo})" class="${borderStyle}" width="${width}" height="${height}"
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
