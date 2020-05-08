function setX(divElement) {
    if (divElement.innerHTML != 'X' && divElement.innerHTML != 'O') {
        divElement.innerHTML = 'X';

        const divs1 = document.getElementsByTagName('div');
        const divs2 = new Array();
        //if (divs2.length != 0) {
        for (let i = 0; i < divs1.length; i++) {
            if (divs1[i].innerHTML != 'X' && divs1[i].innerHTML != 'O') {
                divs2.push(i);
            }
        }
        //}
        if (divs2.length > 0) {
            const i = Math.floor(Math.random() * divs2.length);
            divs1[divs2[i]].innerHTML = 'O';
            divs1[divs2[i]].style.color = 'red';
        }
        console.log(divs2);
    }
}
