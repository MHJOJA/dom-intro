describe('the text bill factory function', function(){

    it('should return the total amount of the value passed ',function(){

    assert.equal(2.75,textBillTotal('call'))

    })

    it('should return the total amount of the value passed',function() {

        assert.equal('0.75',textBillTotal('sms'))
    })
})