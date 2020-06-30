// get a reference to the sms or call radio buttons
const billItemTypeSettings = document.querySelector('.billItemTypeWithSettings');

// create a variables that will keep track of all three totals.
const callTotalSettingsElem = document.querySelector('.callTotalSettings');
const smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
const totalSettingsElem = document.querySelector('.totalSettings');

// get refences to all the settings fields

// create a variables that will keep track of all the settings
const callCostSettingElement = document.querySelector('.callCostSetting');
const smsCostSettingElement = document.querySelector('.smsCostSetting');
const criticalLevelSettingElement = document.querySelector('.criticalLevelSetting');
const warningLevelSettingElement = document.querySelector('.warningLevelSetting')

//get a reference to the add button
const addBtn = document.querySelector('.addBtn')

//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector('.updateSettings')


//add an event listener for when the 'Update settings' button is pressed


var callsTotalSet = 0;
var smsTotalSet= 0;
var billTotalSet = 0;
//-----------------
var callCost = 0;
var  smsCost = 0;
var warningLev= 0;
var criticalLev = 0;





function billSettings (){
callCost = Number (callCostSettingElement.value);
smsCost = Number (smsCostSettingElement.value);
warningLev = Number(warningLevelSettingElement.value)
criticalLev = Number(criticalLevelSettingElement.value);

}


function billItemTypeRadio(){
       
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){

      let  bill = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    
        if (bill === "call"){
            callsTotalSet += callCost; 
        
        }
         if (bill === "sms"){
            smsTotalSet += smsCost;
        }

    }
    callTotalSettingsElem.innerHTML = callsTotalSet.toFixed(2);
 smsTotalSettingsElem.innerHTML = smsTotalSet.toFixed(2);
billTotalSet = callsTotalSet + smsTotalSet;

totalSettingsElem.innerHTML = billTotalSet.toFixed(2);
setStyle()
}


function setStyle(){


    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    const totalCost = Number( totalCostElem.innerHTML)

    if (billTotalSet >= 50){
        totalSettingsElem.classList.add("danger");
    }
    else if (billTotalSet >= 30  && billTotalTwo < 50){
        totalSettingsElem.classList.add("warning");

    }
}

//add an event listener for when the add button is pressed
addBtn.addEventListener('click',billItemTypeRadio)
updateSettingsBtn.addEventListener('click', billSettings)


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
