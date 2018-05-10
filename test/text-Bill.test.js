describe('The Text Bill function', function() {
  it('calculate a string with call or sms', function() {
    var text = TextBill();

    text.Maths('call');
    text.Maths('sms');
    text.Maths('call');
    text.Maths('sms');
    text.Maths('sms');
    assert.equal(text.Sum(), 7.75); //true
    assert.equal(text.Call(), 5.50); //true
    assert.equal(text.Sms(), 2.25); //true
  });
  it('calculate a string from a given inpute', function() {
    var text = TextBill();

    text.Maths('call');
    text.Maths('call');
    text.Maths('call');
    text.Maths('call');
    text.Maths('call');
    assert.equal(text.Sum(), 13.75);
    assert.equal(text.Call(), 13.75);
    assert.equal(text.Sms(), 0.00);
  });
  it('calculate a string with sms', function() {
    var text = TextBill();

    text.Maths('sms');
    text.Maths('sms');
    text.Maths('sms');
    text.Maths('sms');
    assert.equal(text.Sum(), 3.00);
    assert.equal(text.Sms(), 3.00);
    assert.equal(text.Call(), 0.00);
  });
  it('It should check if someone added nothing', function() {
    var text = TextBill();

    text.Maths('');

    assert.equal(text.Sum(), 0.00);
    assert.equal(text.Sms(), 0.00);
    assert.equal(text.Call(), 0.00);
  });
});