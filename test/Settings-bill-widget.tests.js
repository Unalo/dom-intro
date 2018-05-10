describe('The Bill with Settings function', function() {
  it("It should return the total for a call", function() {

    var settings = BillSettings();
    settings.callOne(5.00);
    settings.smsOne(2.50);
    settings.warningOne(8.00);
    settings.criticalOne(10.00);

    settings.calc('call');

    assert.equal(settings.callSumOne(), 5.00);
    assert.equal(settings.smsSumOne(), 0.00);
    assert.equal(settings.sumOne(), 5.00);

  });

  it("It should return the total for sms", function() {

    var settings = BillSettings();
    settings.callOne(5.00);
    settings.smsOne(2.50);
    settings.warningOne(10.00);
    settings.criticalOne(15.00);


    settings.calc('sms');
    settings.calc('sms');
    settings.calc('sms')

    assert.equal(settings.callSumOne(), 0.00);
    assert.equal(settings.smsSumOne(), 7.50);
    assert.equal(settings.sumOne(), 7.50);

  });

  it("It should calculate total for multiple calls", function() {

    var settings = BillSettings();
    settings.callOne(4.00);
    settings.smsOne(2.00);
    settings.warningOne(7.00);
    settings.criticalOne(15.00);

    settings.calc('call');
    settings.calc('call');
    settings.calc('sms');
    settings.calc('sms');

    assert.equal(settings.callSumOne(), 8.00);
    assert.equal(settings.smsSumOne(), 4.00);
    assert.equal(settings.sumOne(), 12.00);

  });

  it("It should return nothing if someone did not add anything", function() {
    var settings = BillSettings();
    settings.callOne(0.00);
    settings.smsOne(0.00);
    settings.warningOne(0.00);
    settings.criticalOne(0.00);

    settings.calc('');
    settings.calc('')

    assert.equal(settings.callSumOne(), 0.00);
    assert.equal(settings.smsSumOne(), 0.00);
    assert.equal(settings.sumOne(), 0.00);

  });
  it('It should check if warning level is reached', function() {
    var settings = BillSettings();
    settings.callOne(3.50);
    settings.smsOne(1.50);
    settings.warningOne(10.00);
    settings.criticalOne(20.00);

    settings.calc('call');
    settings.calc('sms');
    settings.calc('call')

    assert.isAtMost(settings.sumOne(), settings.getWarning());

  });
  it('It should check if critical level is reached', function() {
    var settings = BillSettings();
    settings.callOne(2.80);
    settings.smsOne(2.50);
    settings.warningOne(12.90);
    settings.criticalOne(14.50);

    settings.calc('sms');
    settings.calc('sms');
    settings.calc('call');
    settings.calc('sms')

    assert.isAtMost(settings.sumOne(), settings.getCritical(), 'sum is less than critical');
  });
});