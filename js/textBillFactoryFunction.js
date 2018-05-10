function TextBill() {

  var callsTotal = 0;
  var smsTotals = 0;
  var totalBill = 0;

  function Maths(billType) { // calculates for call and sms
    var textOne = billType;
    if (textOne === "call") {
      callsTotal += 2.75;
    } else if (textOne === "sms") {
      smsTotals += 0.75;
    }
  }

  function Call() { // update call total
    return callsTotal;
  }

  function Sms() { // update sms total
    return smsTotals;
  }

  function Sum() { // update total for call and sms
    totalBill = callsTotal + smsTotals;
    return totalBill;
  }
  return {
    Maths,
    Call,
    Sms,
    Sum
  }
}