function BillSettings() {
  var callCostBlock = 0;
  var smsCostBlock = 0;
  var warningBlock = 0;
  var criticalBlock = 0;
  // create a variables that will keep track of all three totals.
  var callSum = 0;
  var smsSum = 0;
  var billSum = 0;

  function Calc(billItemTypeWithSettings) {
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

  function SmsOne(smsText) {
    smsCostBlock = parseFloat(smsText);
    return smsCostBlock;
  }

  function CallOne(callText) {
    callCostBlock = parseFloat(callText);
    return callCostBlock;
  }

  function WarningOne(warningColor) {
    warningBlock = parseFloat(warningColor);
  }

  function GetWarning() {
    return warningBlock;

  }

  function CriticalOne(criticalColor) {
    criticalBlock = parseFloat(criticalColor);
  }

  function GetCritical() {
    return criticalBlock;
  }

  function CallSumOne() {
    return callSum;
  }

  function SmsSumOne() {
    return smsSum;
  }

  function SumOne() {
    billSum = callSum + smsSum
    return billSum;
  }

  function ScreenBehaviour() {
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
    Calc,
    SmsOne,
    CallOne,
    WarningOne,
    CriticalOne,
    GetCritical,
    GetWarning,
    CallSumOne,
    SmsSumOne,
    ScreenBehaviour,
    SumOne
  }
}