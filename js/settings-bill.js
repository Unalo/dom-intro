// get a reference to the sms or call radio buttons
var billItem = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callSetting = document.querySelector(".callCostSetting");
var smsSetting = document.querySelector(".smsCostSetting");
var warningSetting = document.querySelector(".warningLevelSetting");
var criticalSetting = document.querySelector(".criticalLevelSetting");
// get refences to total settings
var callTotalSum = document.querySelector(".callTotalSettings");
var smsTotalSum = document.querySelector(".smsTotalSettings");
var totalSum = document.querySelector(".totalSettings");
//get a reference to the add button
var addBtn = document.querySelector(".addbutton");
//get a reference to the 'Update settings' button
var updateBtn = document.querySelector(".updateSettings");
var settingsBillFunc = BillSettings();


updateBtn.addEventListener('click', function() {
  var callText = callSetting.value;
  settingsBillFunc.CallOne(callText)
  var smsText = smsSetting.value;
  settingsBillFunc.SmsOne(smsText)
  var warningColor = warningSetting.value;
  settingsBillFunc.WarningOne(warningColor)
  var criticalColor = criticalSetting.value;
  settingsBillFunc.CriticalOne(criticalColor)
});

addBtn.addEventListener('click', function() {
  var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedBtn) {
    var billItemTypeWithSettings = checkedBtn.value;
    settingsBillFunc.Calc(billItemTypeWithSettings);
  }
  callTotalSum.innerHTML = settingsBillFunc.CallSumOne().toFixed(2);
  smsTotalSum.innerHTML = settingsBillFunc.SmsSumOne().toFixed(2);
  totalSum.innerHTML = settingsBillFunc.SumOne().toFixed(2);
  settingsBillFunc.ScreenBehaviour();
  // var siya = settingsBillFunc.stop(
});