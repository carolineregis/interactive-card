let userName = '';
let cardPlaceholderName = document.getElementById('cardName');

function getUserName() {
    userName = document.getElementById('userName').value;
    cardPlaceholderName.textContent = userName;
}

