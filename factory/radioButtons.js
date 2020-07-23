function radioButtons() {
    var callsTotalTwo = 0;
    var smsTotalTwo = 0;
    var billTotalTwo = 0;

    

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

    function getTotal() {
        billTotalTwo = callsTotalTwo + smsTotalTwo;
        return billTotalTwo;

    }

    return {
        getSmsTotal,
        radioBillTotal,
        getTotal,
        getCallsTotal,
    }
}