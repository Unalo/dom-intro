describe('The Text Bill function', function() {
  it('calculate a string with call or sms', function() {
    var text = TextBill();

    text.Maths('call');
    text.Maths('sms');
    text.Maths('call');
    text.Maths('sms');
    text.Maths('sms');
    assert.equal(text.sum(), 7.75); //true
    assert.equal(text.call(), 5.50); //true
    assert.equal(text.sms(), 2.25); //true
  });
  it('calculate a string from a given inpute', function() {
    var text = TextBill();

    text.Maths('call');
    text.Maths('call');
    text.Maths('call');
    text.Maths('call');
    text.Maths('call');
    assert.equal(text.sum(), 13.75);
    assert.equal(text.call(), 13.75);
    assert.equal(text.sms(), 0.00);
  });
  it('calculate a string with sms', function() {
    var text = TextBill();

    text.Maths('sms');
    text.Maths('sms');
    text.Maths('sms');
    text.Maths('sms');
    assert.equal(text.sum(), 3.00);
    assert.equal(text.sms(), 3.00);
    assert.equal(text.call(), 0.00);
  });
  it('')
});