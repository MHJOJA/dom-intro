// get a reference to the sms or call radio buttons
const billItem= document.querySelector(".billItemTypeRadio");

// get a reference to the  calls total
const callsElement =document.querySelector('.callTotalTwo');

//get refference to sms total
const smsElement = document.querySelector('.smsTotalTwo')

//get a reference to the add button
const adBtnElement = document.querySelector(".radioBillAddBtn");
    
//create a variable that will keep track of the total bill
const totalCostElement = document.querySelector(".TotalTwo");

//add an event listener for when the add button is pressed

var callsTotal = 2.75;
var smsTotal = 0;
var billTotal = '';


function radioBillTotal(){
       
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        billItemType = checkedRadioBtn.value*
        // billItemType will be 'call' or 'sms'
    
    
        (billItemType === "call")
            callsTotal += 2.75
        }
        (billItemType === "sms")
            smsTotal += 0.75;
        }

    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    styleTotal();



adBtnElement.addEventListener('click', radioBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

/*var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    billItemType = checkedRadioBtn.value*/
    // billItemType will be 'call' or 'sms'