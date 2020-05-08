const div = document.getElementById('info');
const point = document.getElementById('point');
const randomX = Math.floor(Math.random() * window.innerWidth);
const randomY = Math.floor(Math.random() * window.innerHeight);
point.style.left = randomX - 5 + 'px';
point.style.top = randomY - 5 + 'px';

function usePosition(x, y) {
    var dx = x - randomX;
    var dy = y - randomY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
        div.innerText = 'Tampen brenner';
        var redAmount = (1 + Math.floor(distance / 7)).toString(16);
        div.style.backgroundColor =
            '#ff' + redAmount + redAmount + redAmount + redAmount;
    } else if (distance < 12) {
        div.innerText = 'Du klarte det!';
        point.style.display = 'block';
    } else {
        div.innerText = 'Finn det hemmelige punktet!';
        div.style.backgroundColor = '#ffffff';
    }
}

(function () {
    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX =
                event.clientX +
                ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
            event.pageY =
                event.clientY +
                ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                ((doc && doc.clientTop) || (body && body.clientTop) || 0);
        }

        // Use event.pageX / event.pageY here
        usePosition(event.pageX, event.pageY);
    }
})();
