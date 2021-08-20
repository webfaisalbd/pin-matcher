function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin() {
    const pinNumber = getPin();
    document.getElementById('display-pin').value = pinNumber;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if (number == '&lt;') {
            console.log("back button")
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }


})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failedMassage = document.getElementById('notify-failed');
    if (pin == typedNumbers) {
        failedMassage.style.display = 'none';
        successMassage.style.display = 'block';
    }
    else {
        successMassage.style.display = 'none';
        failedMassage.style.display = 'block';
    }
}
