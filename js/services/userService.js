'use strict'

const USER_KEY = 'userDB';

var gUser;


function setUserInfo(email, age, bgColor, txtColor, birthDay, birthTime) {
    gUser = {
        email,
        age,
        bgColor,
        txtColor,
        birthDay,
        birthTime
    }
    saveToStorage(USER_KEY, gUser);
}

