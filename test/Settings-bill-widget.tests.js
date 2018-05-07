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
    settings.calc('sms');

    assert.equal(settings.callSumOne(), 0.00);
    assert.equal(settings.smsSumOne(), 7.50);
    assert.equal(settings.sumOne(), 7.50);

  });

  it("It should calculate total for multiple calls", function() {

    var settings = BillSettings();
    settings.callOne(5.00);
    settings.smsOne(2.50);
    settings.warningOne(7.00);
    settings.criticalOne(15.00);

    settings.calc('call');
    settings.calc('call');
    settings.calc('sms');
    settings.calc('call');
    settings.calc('sms');
    settings.calc('sms')

    assert.equal(settings.callSumOne(), 15.00);
    assert.equal(settings.smsSumOne(), 7.50);
    assert.equal(settings.sumOne(), 22.50);

  });

  it("It should return nothing if someone did not add anything", function() {
    var settings = BillSettings();
    settings.callOne(0.00);
    settings.smsOne(0.00);
    settings.warningOne(0.00);
    settings.criticalOne(0.00);

    settings.calc('');
    settings.calc('');
    settings.calc('');
    settings.calc('');
    settings.calc('');
    settings.calc('')

    assert.equal(settings.callSumOne(), 0.00);
    assert.equal(settings.smsSumOne(), 0.00);
    assert.equal(settings.sumOne(), 0.00);

  });
});