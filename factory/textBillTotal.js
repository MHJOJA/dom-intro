
    function textBillTotal(billTypeText){
     
        var billTypeEntered = billTypeText;

        var callsTotal = 2.75;
        var smsTotal = 0.75;
            
        if (billTypeEntered === "call"){
            return callsTotal
        }
        else if (billTypeEntered === "sms"){
              return  smsTotal 
        }
   
                
    
    }