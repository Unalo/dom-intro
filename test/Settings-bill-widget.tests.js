describe('The Bill with Settings function', function() {
  it("It should return the total for a call", function() {

    var settings = BillSettings();
    settings.smsOne(2.50);

    settings.callOne(5.00);
    settings.criticalOne(10.00);
    settings.warningOne(5.00);

    settings.calc('call');

    assert.equal(settings.callSumOne(), 5.00);
    assert.equal(settings.smsSumOne(), 0.00);
    assert.equal(settings.sumOne(), 5.00);

  });


  it("It should return the total for an sms", function() {

    var settings = BillSettings();
    settings.sms(2.50);

    settings.calls(5.00);
    settings.critical(12.00);
    settings.warning(6.00);

    settings.sumBill('sms');

    assert.equal(settings.sumCall(), 0.00);
    assert.equal(settings.sumSms(), 2.50);
    assert.equal(settings.sumTotal(), 2.50);

  });

  it("It should calculate total for multiple calls", function() {

    var settings = BillSettings();
    settings.sms(2.50);

    settings.calls(5.00);
    settings.critical(15.00);
    settings.warning(7.00);

    settings.sumBill('call');
    settings.sumBill('call');
    settings.sumBill('call');
    settings.sumBill('call');

    assert.equal(settings.sumCall(), 20.00);
    assert.equal(settings.sumSms(), 0.00);
    assert.equal(settings.sumTotal(), 20.00);

  });

});