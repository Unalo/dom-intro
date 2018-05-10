describe('The Bill with Settings function', function() {
  it("It should return the total for a call", function() {

    var settings = BillSettings();
    settings.CallOne(5.00);
    settings.SmsOne(2.50);
    settings.WarningOne(8.00);
    settings.CriticalOne(10.00);

    settings.Calc('call');

    assert.equal(settings.CallSumOne(), 5.00);
    assert.equal(settings.SmsSumOne(), 0.00);
    assert.equal(settings.SumOne(), 5.00);

  });

  it("It should return the total for sms", function() {

    var settings = BillSettings();
    settings.CallOne(5.00);
    settings.SmsOne(2.50);
    settings.WarningOne(10.00);
    settings.CriticalOne(15.00);


    settings.Calc('sms');
    settings.Calc('sms');
    settings.Calc('sms')

    assert.equal(settings.CallSumOne(), 0.00);
    assert.equal(settings.SmsSumOne(), 7.50);
    assert.equal(settings.SumOne(), 7.50);

  });

  it("It should calculate total for multiple calls", function() {

    var settings = BillSettings();
    settings.CallOne(4.00);
    settings.SmsOne(2.00);
    settings.WarningOne(7.00);
    settings.CriticalOne(15.00);

    settings.Calc('call');
    settings.Calc('call');
    settings.Calc('sms');
    settings.Calc('sms');

    assert.equal(settings.CallSumOne(), 8.00);
    assert.equal(settings.SmsSumOne(), 4.00);
    assert.equal(settings.SumOne(), 12.00);

  });

  it("It should return nothing if someone did not add anything", function() {
    var settings = BillSettings();
    settings.CallOne(0.00);
    settings.SmsOne(0.00);
    settings.WarningOne(0.00);
    settings.CriticalOne(0.00);

    settings.Calc('');
    settings.Calc('')

    assert.equal(settings.CallSumOne(), 0.00);
    assert.equal(settings.SmsSumOne(), 0.00);
    assert.equal(settings.SumOne(), 0.00);

  });
  it('It should check if warning level is reached', function() {
    var settings = BillSettings();
    settings.CallOne(3.50);
    settings.SmsOne(1.50);
    settings.WarningOne(10.00);
    settings.CriticalOne(20.00);

    settings.Calc('call');
    settings.Calc('sms');
    settings.Calc('call')

    assert.isAtMost(settings.SumOne(), settings.GetWarning());

  });
  it('It should check if critical level is reached', function() {
    var settings = BillSettings();
    settings.CallOne(2.80);
    settings.SmsOne(2.50);
    settings.WarningOne(12.90);
    settings.CriticalOne(14.50);

    settings.Calc('sms');
    settings.Calc('sms');
    settings.Calc('call');
    settings.Calc('sms')

    assert.isAtMost(settings.SumOne(), settings.GetCritical(), 'sum is less than critical');
  });
});