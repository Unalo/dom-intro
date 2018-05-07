describe('The calculateBill function' , function(){
    it('calculate a string with call or sms' , function(){
      assert.equal(calculateBtnClicked ('call, call, sms, call, call'), 11.75);
    });
    it('Takes in a string with calls' , function(){
      assert.equal(calculateBtnClicked('call, call, call, call, call, call'), 16.50);
    });
    it('Calculate a string with sms', function(){
      assert.equal(calculateBtnClicked('sms, sms, sms, sms, sms, sms'), 4.50);
    });
    it('Checks if someone did\t add anything', function(){
      assert.equal(calculateBtnClicked(""), 0.00);
    });
});
