// get a reference to the sms or call radio buttons
const billItem= document.querySelector(".billItemTypeRadio");

// get a reference to the  calls total
const callsElement =document.querySelector('.callTotalTwo');

//get refference to sms total
const smsElement = document.querySelector('.smsTotalTwo')

//get a reference to the add button
const adBtnElement = document.querySelector(".radioBillAddBtn");
    
//create a variable that will keep track of the total bill
const totalCostElement = document.querySelector(".totalTwo");

//add an event listener for when the add button is pressed

var callsTotalTwo = 0;
var smsTotalTwo = 0;
var billTotalTwo = 0;


function radioBillTotal(){
       
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){

      let  billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    
        if (billItemType === "call"){
            callsTotalTwo += 2.75
        }
         if (billItemType === "sms"){
            smsTotalTwo+= 0.75;
        }

    }
callsElement.innerHTML = callsTotalTwo.toFixed(2);
smsElement.innerHTML = smsTotalTwo.toFixed(2);
billTotalTwo = callsTotalTwo + smsTotalTwo;
totalCostElement.innerHTML = billTotalTwo.toFixed(2);
styling()
}

function styling(){


    totalCostElement.classList.remove("danger");
    totalCostElement.classList.remove("warning");

    const totalCost = Number( totalCostElem.innerHTML)

    if (billTotalTwo >= 50){
        totalCostElement.classList.add("danger");
    }
    else if (billTotalTwo >= 30  && billTotalTwo < 50){
        totalCostElement.classList.add('warning');

    }
}
adBtnElement.addEventListener('click', radioBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

/*var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    billItemType = checkedRadioBtn.value*/
    // billItemType will be 'call' or 'sms'