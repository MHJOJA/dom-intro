describe('the radio bill factory function', function () {

    it("should update calls total when the call button is clicked", function () {

        let radioBillBtn = radioButtons();
       

        radioBillBtn.radioBillTotal('call')


        assert.equal(2.75,radioBillBtn.getTotals())
    })

    it('should be able to update the sms total when the sms button is clicked', function(){

        let radioBillBtn = radioButtons();

        radioBillBtn.radioBillTotal('sms');

        assert.equal(0.75, radioBillBtn.getTotals())
    })
    it('should be able to load both calls and sms total when the "add" radio button is clicked',function(){

        let radioBillBtn = radioButtons();
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('sms')
        radioBillBtn.radioBillTotal('sms')
        radioBillBtn.radioBillTotal('call')

        assert.equal(8.25, radioBillBtn.getCallsTotal())
        assert.equal(1.5,radioBillBtn.getSmsTotal())
        assert.equal(9.75, radioBillBtn.getTotals())
    })

    // it('should return "warning" if cost excceed R30',function(){

    //     let radioBillBtn = radioButtons();
    

    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')
    //     radioBillBtn.radioBillTotal('call')


    //     assert.equal(30.25, radioBillBtn.getTotals())
    //     assert.equal('warning', radioBillBtn.totalClassName())
    // })

    it('should return "critical" when the amount total is more than 50',function(){

        let radioBillBtn = radioButtons();
        
        radioBillBtn.radioBillTotal('sms')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('sms')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')
        radioBillBtn.radioBillTotal('call')


        assert.equal(53.75, radioBillBtn.getTotals())
        assert.equal('critical', radioBillBtn.totalClassName())

    })
})

