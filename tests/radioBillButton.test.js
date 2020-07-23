describe('the radio bill factory function', function () {

    it("should update calls total when the call button is clicked", function () {

        let radioBillBtn = radioButtons();
       

        radioBillBtn.radioBillTotal('call')


        assert.equal(2.75,radioBillBtn.getTotal())
    })

    it('should be able to update the sms total when the sms button is clicked', function(){

        let radioBillBtn = radioButtons();

        radioBillBtn.radioBillTotal('sms');

        assert.equal(0.75, radioBillBtn.getTotal())
    })

    it('should return "warning" when warning level is reached',function(){

        let radioBillBtn = radioButtons();
    

        radioBillBtn.radioBillTotal('call')
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


        assert.equal(33.75, radioBillBtn.getTotal())
    })

    it('should return "critical" when the critical level is reached',function(){

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


        assert.equal(53.75, radioBillBtn.getTotal())

    })
})

