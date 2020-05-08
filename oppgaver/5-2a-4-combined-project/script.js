function displayNone(id, id2) {
    document.getElementById(id).classList.toggle("displayNone");
    document.getElementById(id2).classList.toggle("displayNone");
    console.log('Elemnt id="' + id + '" is display OFF');
    console.log('Elemnt id="' + id2 + '" is display ON');
}

let fadeInOpacity = 0;
function fadeIn(itemId) {
    if (fadeInOpacity < 1) {
        fadeInOpacity += 0.02;
        setTimeout(function() {
            fadeIn(itemId);
        }, 17);
    }
    document.getElementById(itemId).style.opacity = fadeInOpacity;
}

// introduction -----------------------------

function start() {
    fadeIn("message");
    console.log('Start fadeIn("message")');
}

// mystery ----------------------------------

function unLock(id) {
    document.getElementById(id).innerHTML = '<img src="img/open.png" style="width: 80px; margin-top: 35px" />';
    console.log("Unlock " + id);
}

function showNext(id, id2) {
    document.getElementById(id).classList.toggle("displayNone");
    id2.removeAttribute("onchange");
    console.log('Elemnt id="' + id + '" is display ON');
}

// case 1 -----------------------------------

function case1() {
    displayNone("introduction", "mystery");
    fadeInOpacity = 0;
    fadeIn("case1");
}

function pushNumber(number) {
    let num = number.innerHTML;
    document.getElementById("monitor").innerHTML += num;
}

function reset() {
    document.getElementById("monitor").innerHTML = "";
}

function verify() {
    let correct = "1024";
    let answer = document.getElementById("monitor");
    if (correct == answer.innerHTML) {
        unLock("code1");
        showNext2("nextCase1", "verify");
    } else {
        answer.innerHTML = "Wrong answer";
    }
}

function showNext2(id, id2) {
    document.getElementById(id).classList.toggle("displayNone");
    document.getElementById(id2).removeAttribute("onclick");
    console.log('Elemnt id="' + id + '" is display ON');
}

// case 2 -----------------------------------

function case2() {
    displayNone("case1", "case2");
    fadeInOpacity = 0;
    fadeIn("case2");
    clearInput(document.getElementById("catLetter"));
}

let sat = 0;
function satisfaction() {
    document.getElementById("satisfaction").innerHTML += '<div class="sat"></div>';
    sat++;
    console.log("The cat have satisaction on level - " + sat);
    if (sat == 100) {
        document.getElementById("catImg").removeAttribute("onmouseover");
        document.getElementById("catImg").removeAttribute("onmouseout");
        document.getElementById("catLetter").removeAttribute("oninput");
        document.getElementById("cat2").innerHTML = '<img id="catImg" src="img/catSmile.jpg" style="margin-top: 20px;"/>';
        unLock("code2");
        showNext("nextCase2");
    }
}

// case 3 -----------------------------------

function case3() {
    displayNone("case2", "case3");
    fadeInOpacity = 0;
    fadeIn("case3");
}

function clearInput(id) {
    id.value = "";
}

function award() {
    displayNone("case3", "award");
    fadeInOpacity = 0;
    fadeIn("award");
}
