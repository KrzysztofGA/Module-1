/*
Obejrzałem cały film ale nie robiłem wszstikich ćwiczeń bo były za proste
 */
window.onresize = windowSizeChanged;

function windowSizeChanged() {
    const div = document.getElementById('info');
    const height = window.innerHeight;
    const width = window.innerWidth;
    div.innerHTML = height + ' x ' + width;
    div.style.width = width / 2 + 'px';
    let totalPix = height * width;
    if (totalPix > 1000000) {
        div.innerHTML += ' > 1Mpx';
    }
    totalPix = Math.floor(totalPix / 1000);
    div.innerHTML += ` ( totalPix: ${totalPix}k )`;
}
