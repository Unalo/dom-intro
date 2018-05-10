describe('The Radio Bill function', function() {
  it('Calculate Sum from a selected Radio button', function() {
    var radio = TextBill();
    radio.Maths('call');
    radio.Maths('call');
    radio.Maths('sms');
    radio.Maths('call');
    radio.Maths('call');
    radio.Maths('sms');
    radio.Maths('sms');
    assert.equal(radio.Sum(), 13.25);
    assert.equal(radio.Call(), 11.00);
    assert.equal(radio.Sms(), 2.25);
  });
  it('Calculate a total from sms', function() {
    var radio = TextBill();
    radio.Maths('sms');
    radio.Maths('sms');
    radio.Maths('sms');
    radio.Maths('sms');
    assert.equal(radio.Sum(), 3.00);
    assert.equal(radio.Sms(), 3.00);
    assert.equal(radio.Call(), 0.00);
  });
  it('calculate a total from calls ', function() {
    var radio = TextBill();
    radio.Maths('call');
    radio.Maths('call');
    assert.equal(radio.Sum(), 5.50);
    assert.equal(radio.Sms(), 0.00);
    assert.equal(radio.Call(), 5.50);
  });
  it('Return nothing if nothing was selected', function() {
    var radio = TextBill();
    radio.Maths('');
    assert.equal(radio.Sum(), 0.00);
    assert.equal(radio.Sms(), 0.00);
    assert.equal(radio.Call(), 0.00);
  });
});