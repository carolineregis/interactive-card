let userName = '';
let cardNumber = '';
let expDate = '';
let cardPlaceholderName = document.getElementById('cardName');
let cardPlaceholderNumber = document.getElementById('cardNumber');

function getUserName() {
    userName = document.getElementById('userName').value;
    cardPlaceholderName.textContent = userName.toUpperCase();

    if (!userName) {
        cardPlaceholderName.textContent = 'MANOEL GOMES DO CANETA AZUL';
    }
}

function getCardNumber() {
    cardNumber = document.getElementById('userNumber').value;
    let formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1 ');
    cardPlaceholderNumber.textContent = formattedCardNumber;

    if (!cardNumber) {
        cardPlaceholderNumber.textContent = '0000 0000 0000 0000';
    }
}

function getExpDate() {
    expDate = document.getElementById('userNumber').value;
}

