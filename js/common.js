const inputField = document.getElementsByTagName('input');
for(const input of inputField){
    input.style.marginBottom = '0.7rem'
    input.style.padding = '0.7rem'
}

function getInputValue(inputId) {
    const amountField = document.getElementById(inputId);
    const amountFieldValue = amountField.value;
    const amount = parseFloat(amountFieldValue);
    amountField.value = '';

    if (isNaN(amount)) {
        alert('Please provide a valid number');
        return;
    }
    else {
        return amount;
    }
}

function setInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}