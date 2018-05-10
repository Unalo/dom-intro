function BillSettings() {
  // variables to keep track of all settings fields
  var callCostBlock = 0;
  var smsCostBlock = 0;
  var warningBlock = 0;
  var criticalBlock = 0;
  // create a variables that will keep track of all three totals.
  var callSum = 0;
  var smsSum = 0;
  var billSum = 0;
  // calculations and make it stop if critical level is reached
  function Calc(billItemTypeWithSettings) {
    if (billItemTypeWithSettings === "call") {
      callSum += callCostBlock;
      billSum += callCostBlock;
      if (billSum > criticalBlock) { // stop when critical value is reached
        var remainder = billSum - criticalBlock;
        billSum -= remainder;
        callSum -= remainder;
      }
    }
    if (billItemTypeWithSettings === "sms") {
      smsSum += smsCostBlock;
      billSum += smsCostBlock;
      if (billSum > criticalBlock) { // stop when critical value is reached
        var remainder = billSum - criticalBlock;
        billSum -= remainder;
        smsSum -= remainder;
      }
    }
  }
  //  update SMS fiels
  function SmsOne(smsText) {
    smsCostBlock = parseFloat(smsText);
    return smsCostBlock;
  }
  //  update calls field
  function CallOne(callText) {
    callCostBlock = parseFloat(callText);
    return callCostBlock;
  }
  // update warning level field
  function WarningOne(warningColor) {
    warningBlock = parseFloat(warningColor);
  }
  // get WArning
  function GetWarning() {
    return warningBlock;

  }
  // update critical level field
  function CriticalOne(criticalColor) {
    criticalBlock = parseFloat(criticalColor);
  }
  // Get critical
  function GetCritical() {
    return criticalBlock;
  }
  // update call-sum
  function CallSumOne() {
    return callSum;
  }
  // update sms-sun
  function SmsSumOne() {
    return smsSum;
  }
  // update total
  function SumOne() {
    billSum = callSum + smsSum
    return billSum;
  }
  // screen changes
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