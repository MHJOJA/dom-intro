// get a reference to the sms or call radio buttons
const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");

// get a reference to the  calls radio buttons
callsTotalElem =document.querySelector('.callTotalTwo');

// get a refference to the sms radio buttons
smsTotalElement = document.querySelector('.smsTotalTwo')

//get a reference to the add button
const adBtnElement = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
const TotalBill = document.querySelector("callTotalTwo");

var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}






//add an event listener for when the add button is pressed


var callsTotal = 0;
var smsTotal = 0;

function radioBillTotal(){
       
    var billTypeEntered = callsTotalElem.value.trim();
    
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
adBtnElement.addEventListener('click', radioBillTotal())

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
