function BillSettings() {
  var callCostBlock = 0;
  var smsCostBlock = 0;
  var warningBlock = 0;
  var criticalBlock = 0;
  // create a variables that will keep track of all three totals.
  var callSum = 0;
  var smsSum = 0;
  var billSum = 0;

  function calc(billItemTypeWithSettings) {
    if (billItemTypeWithSettings === "call") {
      callSum += callCostBlock;
      billSum += callCostBlock;
      if (billSum > criticalBlock) {
        var remainder = billSum - criticalBlock;
        billSum -= remainder;
        callSum -= remainder;
      }
    }
    if (billItemTypeWithSettings === "sms") {
      smsSum += smsCostBlock;
      billSum += smsCostBlock;
      if (billSum > criticalBlock) {
        var remainder = billSum - criticalBlock;
        billSum -= remainder;
        smsSum -= remainder;
      }
    }
  }

  function smsOne(smsText) {
    smsCostBlock = parseFloat(smsText);
    return smsCostBlock;
  }

  function callOne(callText) {
    callCostBlock = parseFloat(callText);
    return callCostBlock;
  }

  function warningOne(warningColor) {
    warningBlock = parseFloat(warningColor);
  }

  function getWarning() {
    return warningBlock;

  }

  function criticalOne(criticalColor) {
    criticalBlock = parseFloat(criticalColor);
  }

  function getCritical() {
    return criticalBlock;
  }

  function callSumOne() {
    return callSum;
  }

  function smsSumOne() {
    return smsSum;
  }

  function sumOne() {
    billSum = callSum + smsSum
    return billSum;
  }

  function screenBehaviour() {
    if (billSum < warningBlock) { //remove both classes
      totalSum.classList.remove("warning");
      totalSum.classList.remove("danger");
    }
    if (billSum > warningBlock && criticalBlock > billSum) {
      totalSum.classList.add("warning");
      totalSum.classList.remove("danger");
    }
    if (billSum >= criticalBlock) {
      totalSum.classList.add("danger");
      totalSum.classList.remove("warning");
    }
  }
  return {
    calc,
    smsOne,
    callOne,
    warningOne,
    criticalOne,
    getCritical,
    getWarning,
    callSumOne,
    smsSumOne,
    screenBehaviour,
    sumOne
  }
}