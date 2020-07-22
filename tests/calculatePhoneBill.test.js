describe('the calculate bill functionn', function() {

it ('should calculate the total of the string passed in the function',function(){

assert.equal(9,calculateButton('call,sms,call,call'))
} )

it('should be able to place a call', function(){

    assert.equal(2.75,calculateButton('call'))
})
it('should be able to make two calls',function(){

    assert.equal(5.5,calculateButton('call,call'))
})

it('should be able to send an sms', function(){
    
    assert.equal(0.75, calculateButton('sms'))
})    
it('should be able to send five sms\'es',function(){

    assert.equal(3.75,calculateButton('sms,sms,sms,sms,sms'))
})

it('should be able to make  three call and send two sms',function(){

    assert.equal(9.75, calculateButton('call,call,call,sms,sms'))
})


})


