describe('The Radio Bill function', function() {
  it('Calculate total from a selected Radio button', function() {
    var radio = TextBill();
    radio.Maths('call');
    radio.Maths('call');
    radio.Maths('sms');
    radio.Maths('call');
    radio.Maths('call');
    radio.Maths('sms');
    radio.Maths('sms');
    assert.equal(radio.sum(), 13.25);
    assert.equal(radio.call(), 11.00);
    assert.equal(radio.sms(), 2.25);
  });
  it('Calculate a total from sms', function() {
    var radio = TextBill();
    radio.Maths('sms');
    radio.Maths('sms');
    radio.Maths('sms');
    radio.Maths('sms');
    assert.equal(radio.sum(), 3.00);
    assert.equal(radio.sms(), 3.00);
    assert.equal(radio.call(), 0.00);
  });
  it('calculate a total from calls ', function() {
    var radio = TextBill();
    radio.Maths('call');
    radio.Maths('call');
    assert.equal(radio.sum(), 5.50);
    assert.equal(radio.sms(), 0.00);
    assert.equal(radio.call(), 5.50);
  });
});