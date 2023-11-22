const date = document.getElementById("date");
const wrapper = document.querySelector('.box');
const button = document.querySelector('.btn');
// const dateVal = date.value;
const errorMsg = document.createElement('div');

errorMsg.textContent = ' ';
function check() {
    const dateVal = date.value;
    if (dateVal === '') {
        errorMsg.textContent = 'Введите дату';
        errorMsg.classList.add('error');
        wrapper.append(errorMsg);
    } else { errorMsg.textContent = ' ';
    }
}
const result = document.createElement('div');
result.textContent = '';
function calculateDaysUntilBd() {
const dateVal = date.value;
const now = Date.now();
const msDateVal = Date.parse(dateVal);
const difference = msDateVal - now;
const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
// const result = document.createElement('div');
result.textContent = `До дня рождения осталось ${daysLeft} дней`;
wrapper.append(result);

if(dateVal=='') {
    result.textContent = '';   
}
}


button.addEventListener('click', function allFunctions() {
    check()
    calculateDaysUntilBd()  
});

button.addEventListener('submit', function (evt) {
    evt.preventDefault(); 
});


date.addEventListener('submit', function (evt) {
    evt.preventDefault(); 
});