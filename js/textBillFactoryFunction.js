function TextBill() {

  var callsTotal = 0;
  var smsTotals = 0;
  var totalBill = 0;

  function Maths(billType) {
    var textOne = billType;
    if (textOne === "call") {
      callsTotal += 2.75;
    } else if (textOne === "sms") {
      smsTotals += 0.75;
    }
  }

  function call() {
    return callsTotal;
  }

  function sms() {
    return smsTotals;
  }

  function sum() {
    totalBill = callsTotal + smsTotals;
    return totalBill;
  }
  return {
    Maths,
    call,
    sms,
    sum
  }
}
