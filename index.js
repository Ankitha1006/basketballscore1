let homescore=0
let homescoreEl = document.getElementById("homescore-el")

let guestscore=0
let guestscoreEl = document.getElementById("guestscore-el")

function add1() {
    homescore += 1;
    homescoreEl.textContent = homescore;
}

function add2() {
    homescore += 2;
    homescoreEl.textContent = homescore;
}

function add3() {
    homescore += 3;
    homescoreEl.textContent = homescore;
}

function ad1() {
    guestscore += 1;
    guestscoreEl.textContent = guestscore;
}

function ad2() {
    guestscore += 2;
    guestscoreEl.textContent = guestscore; 
}

function ad3() {
       guestscore += 3;
    guestscoreEl.textContent = guestscore;
}

function reset() {
window.location.reload();
}