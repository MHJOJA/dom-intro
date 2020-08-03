
    function TextTotal (){

        var callsTotal = 0;
        var smsTotal = 0;
        var totalCost = 0;
        var theWarningLevel = 0;
        var theCriticalLevel = 0;
                    

   function textBillTotal(billTypeText){
     
        var billTypeEntered = billTypeText;

        if (billTypeEntered === "call"){
             callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
              smsTotal += 0.75
        }
    }
  function  getCallTotal (){
     return callsTotal;

    }
    function getSmsTotal (){
        return smsTotal;
    }
 function   getTotal (){

  totalCost = callsTotal + smsTotal
        return totalCost;
    }
    function setWarningLevel (warningLevel){
        theWarningLevel = warningLevel;
    }
    function setCriticalLevel (criticalLevel){
        theCriticalLevel = criticalLevel;
    }


    function getWarningLevel (warningLevel){
        return theWarningLevel;
    
    }
    function getCriticalLevel(criticalLevel){
        return theCriticalLevel;
    }
    

function hasReachedCriticalLevel(){

    return getTotal() >= getCriticalLevel()
    }
    
    
    function totalClassName(){
        
        if ( hasReachedCriticalLevel()){
    
            return 'critical'
        };
      
            if (getTotal() >= getWarningLevel()){
    
                return "warning"
            }
            
        }
        

    return {
        getCallTotal,
        getSmsTotal,
        getTotal,
        textBillTotal,
        getWarningLevel,
        setWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        totalClassName,
         hasReachedCriticalLevel
        
    }
}

