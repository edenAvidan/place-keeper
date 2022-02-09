'use strict'

function onInit() {
    showAge();
}

function onSetUserInfo(ev) {
    ev.preventDefault();
    const elEmail = document.getElementById('email');
    const elAge = document.getElementById('age');
    const elBgColor = document.getElementById('bg-color');
    const elTxtColor = document.getElementById('txt-color');
    const elBirthDay = document.getElementById('birth-day');
    const elBirthTime = document.getElementById('birth-time');
}

function showAge() {
    const currAge = document.getElementById('age').value;
    document.querySelector('.current-age').innerText = currAge;
}