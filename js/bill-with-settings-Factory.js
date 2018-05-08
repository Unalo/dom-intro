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
      // if (billSum > criticalBlock) {
      //   var remainder = billSum - criticalBlock;
      //   billSum -= remainder;
      //   callSum -= remainder;
      // }
    }
    if (billItemTypeWithSettings === "sms") {
      smsSum += smsCostBlock;
      billSum += smsCostBlock;
      // if (billSum > criticalBlock) {
      //   var remainder = billSum - criticalBlock;
      //   billSum -= remainder;
      //   smsSum -= remainder;
      // }
    }
  }

  function smsOne(smsText) {
    // var smsText = smsSetting;
    smsCostBlock = parseFloat(smsText);
    return smsCostBlock;
  }

  function callOne(callText) {
    // var callText = callSetting;
    callCostBlock = parseFloat(callText);
    return callCostBlock;
  }

  function warningOne(warningColor) {
    // var warningColor = warningSetting;
    warningBlock = parseFloat(warningColor);
    return warningBlock;
  }

  function criticalOne(criticalColor) {
    // var criticalColor = criticalSetting;
    criticalBlock = parseFloat(criticalColor);
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
    var sumTotals1 = settingsBillFunc.sumOne();
    console.log(sumTotals1);
    if (sumTotals1 < warningBlock) { //remove both classes
      totalSum.classList.remove("warning");
      totalSum.classList.remove("danger");
    }
    if (sumTotals1 > warningBlock && criticalBlock > sumTotals1) {
      totalSum.classList.add("warning");
      totalSum.classList.remove("danger");
    }
    if (sumTotals1 >= criticalBlock) {
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
    callSumOne,
    smsSumOne,
    sumOne,
    screenBehaviour
  }
}