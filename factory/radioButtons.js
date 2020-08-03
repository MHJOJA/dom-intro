function radioButtons() {
    var callsTotalTwo = 0;
    var smsTotalTwo = 0;
    var billTotalTwo = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    

    function radioBillTotal(billItemType) {

        
        if (billItemType === "call") {
            callsTotalTwo += 2.75
        }
        if (billItemType === "sms") {
            smsTotalTwo += 0.75;
        }
    }

    function getCallsTotal() {
        return callsTotalTwo
    }
    function getSmsTotal() {
        return smsTotalTwo;
    }

    function getTotals() {
        billTotalTwo = callsTotalTwo + smsTotalTwo;
        return billTotalTwo;

    } function getWarningLevel (warningLevel){
        return theWarningLevel;
    
    }
    function getCriticalLevel(criticalLevel){
        return theCriticalLevel;
    }
    

function hasReachedCriticalLevel(){

    return getTotals() >= getCriticalLevel()
    }
    
    
    function totalClassName(){
        
        if ( hasReachedCriticalLevel()){
    
            return 'critical'
        };
      
            if (getTotals() >= getWarningLevel()){
    
                return "warning"
            }
            
        }
    return {
        getSmsTotal,
        radioBillTotal,
        getTotals,
        getCallsTotal,
        totalClassName,
        getCriticalLevel,
        getWarningLevel
    }
}