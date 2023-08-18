function calculateMoney() {
    const income = getInputValue('income-input');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('clothes-cost');

    const expense = foodCost + rentCost + clothesCost;
    const balance = income - expense;

    // if(typeof income === 'undefined' || typeof foodCost === 'undefined' || typeof rentCost === 'undefined' || typeof clothesCost === 'undefined'){
    //     alert('this is undefined');
    //     return;
    // }
    // else{
    //     totalExpense.innerText = expense;
    //     totalBalance.innerText = balance;
    // }

    // totalExpense.innerText = expense;
    // totalBalance.innerText = balance;

    setInnerText('total-expense', expense);
    setInnerText('total-balance', balance);
}

function saveMoney() {
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    const saveRatio = getInputValue('save-ratio');

    const saveAmount = ((totalBalance / 100) * saveRatio).toFixed(2);
    const remaining = totalBalance - saveAmount;

    if (typeof saveRatio === 'undefined') {
        return;
    }
    else {
        setInnerText('total-saving', saveAmount);
        setInnerText('remaining-balance', remaining);
    }
}
