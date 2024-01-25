let displayValue='';
function number(value){
      displayValue +=value;
      updateDisplay();
}
function operator(opera){
    displayValue += ' ' + opera + ' ';
    updateDisplay();
}
function clearDisplay(){
    displayValue='';
    updateDisplay();
}
function calculateResult()
{
    try{
        displayValue =eval(displayValue);
        updateDisplay();
    }
    catch(error){
        displayValue='error';
        updateDisplay();
    }
}

function updateDisplay()
{
    document.getElementById('screen').value =displayValue;
}