// get a reference to the sms or call radio buttons
const billTypeElement = document.querySelector(".billItemTypeRadio");

// get a reference to the  calls total
const callsElement =document.querySelector('.callTotalTwo');

//get refference to sms total
const smsElement = document.querySelector('.smsTotalTwo')


//get a reference to the add button
const adBtnElement = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
const TotalBill = document.querySelector("callTotalTwo");

//add an event listener for when the add button is pressed


var callsTotal = 0;
var smsTotal = 0;
var callsTotal = 0;

function radioBillTotal(){
       
    var billTypeEntered = billTypeElement.value.trim();
    
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }else {
        billTotal = '';
    }
    
    //update the totals that is displayed on the screen.
    callsElement.innerHTML = callsTotal.toFixed(2);
    smsElement.innerHTML = smsTotal.toFixed(2);
    var totalCosts = callsTotal + smsTotal;
    TotalBill.innerHTML = totalCosts.toFixed(2);
    styleTotal();
}
adBtnElement.addEventListener('click', radioBillTotal())

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
