//skrypt powodujący zanikanie elemntu
//funkcję trzeba wywołać z id elenetu do zanikania
let fadeInOpacity = 0;
function fadeIn(itemId) {
    if (fadeInOpacity < 1) {
        fadeInOpacity += 0.02;
        setTimeout(function () {
            fadeIn(itemId);
        }, 17);
    }
    document.getElementById(itemId).style.opacity = fadeInOpacity;
    console.log('Elemnt id="' + itemId + '" is equal to ' + fadeInOpacity);
}

//funkcja z neta powodująca pausę w wykonywaniu następnego skryptu
function pause(milliseconds) {
    console.log('Start waiting"' + milliseconds + ' milliseconds');
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    console.log('Finish waiting"' + milliseconds + ' milliseconds');
}
function HelloWorld({
    greeting = 'hello',
    greeted = '"World"',
    silent = false,
    onMouseOver,
}) {
    if (!greeting) {
        return null;
    }

    // TODO: Don't use random in render
    let num = Math.floor(Math.random() * 1e7)
        .toString()
        .replace(/\.\d+/gi, '');

    return (
        <div
            className="HelloWorld"
            title={`You are visitor number ${num}`}
            onMouseOver={onMouseOver}
        >
            <strong>
                {greeting.slice(0, 1).toUpperCase() +
                    greeting.slice(1).toLowerCase()}
            </strong>
            {greeting.endsWith(',') ? (
                ' '
            ) : (
                <span style={{color: 'grey'}}>", "</span>
            )}
            <em>{greeted}</em>
            {silent ? '.' : '!'}
        </div>
    );
}
