//get a reference to the add button
const addToBillBtn = document.querySelector('.addToBillBtn');

// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector('.billTypeText');

//create a variable that will keep track of the total bill
const totalCostElem = document.querySelector('.totalTwo');

//create a variable that will keep track of the sms bill
const smsTotalElem = document.querySelector('.smsTotalTwo');

//create a variable that will keep track of the call bill
const callsTotalElem =document.querySelector('.totalTwo');

var callsTotal = 0;
var smsTotal = 0;
var billTotal = '';
//add an event listener for when the add button is pressed



    function textBillTotal(){
       
        var billTypeEntered = billTypeText.value.trim();
        
        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }else {
            billTotal = '';
        }
        
        //update the totals that is displayed on the screen.
        callsTotalElem.innerHTML = callsTotal.toFixed(2);
        smsTotalElem.innerHTML = smsTotal.toFixed(2);
        var totalCost = callsTotal + smsTotal;
        totalCostElem.innerHTML = totalCost.toFixed(2);
        styleTotal();
    }
    
    function styleTotal (){

    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    const totalCost = Number( totalCostElem.innerHTML)

    if (totalCost >= 50 ){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30 && totalCost <= 50) {
        totalCostElem.classList.add("warning");
    }

    }
    addToBillBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
