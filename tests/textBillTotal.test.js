describe('the text bill factory function', function () {

    it('should return the total amount of calls made ', function () {
        let texTotal = TextTotal();
        texTotal.textBillTotal('call')

        assert.equal(2.75, texTotal.getTotal())

    })

    it('should return the total amount of sms sent', function () {
        let texTotal = TextTotal();
        texTotal.textBillTotal('sms')

        assert.equal(0.75, texTotal.getTotal())

    })

    it('should return the total of both calls and sms', function () {
        let texTotal = TextTotal();
        texTotal.textBillTotal("call")
        texTotal.textBillTotal("call")
        texTotal.textBillTotal("sms")
        assert.equal(6.25, texTotal.getTotal())


    })
    it('should return "warnign" when the  warning level', function () {
        let texTotal = TextTotal();
        texTotal.setWarningLevel(10)
        texTotal.setCriticalLevel(15)

        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')

        assert.equal(11, texTotal.getTotal())
        assert.equal("warning", texTotal.totalClassName())

    })

    it('should return "critical" when the critical level', function () {

        let texTotal = TextTotal();
        texTotal.setWarningLevel(5)
        texTotal.setCriticalLevel(15)

        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')

        assert.equal(16.5,texTotal.getTotal())
        assert.equal("critical",texTotal.totalClassName())

    })

    it('should stop  increasing the total when critical level is reached', function(){

        let texTotal = TextTotal();
        texTotal.setCriticalLevel(10);
        texTotal.setWarningLevel(5);

        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')
        texTotal.textBillTotal('call')

        assert.equal()


    })

})


