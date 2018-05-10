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

// update button
updateBtn.addEventListener('click', function() {
  var callText = callSetting.value; // update call settings field
  settingsBillFunc.CallOne(callText)
  var smsText = smsSetting.value; // update sms settings field
  settingsBillFunc.SmsOne(smsText)
  var warningColor = warningSetting.value; // update warning settings field
  settingsBillFunc.WarningOne(warningColor)
  var criticalColor = criticalSetting.value; // update critical settings field
  settingsBillFunc.CriticalOne(criticalColor)
});
// add button
addBtn.addEventListener('click', function() {
  var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked"); // inpute value [call, sms]
  if (checkedBtn) {
    var billItemTypeWithSettings = checkedBtn.value;
    settingsBillFunc.Calc(billItemTypeWithSettings);
  }
  callTotalSum.innerHTML = settingsBillFunc.CallSumOne().toFixed(2);
  smsTotalSum.innerHTML = settingsBillFunc.SmsSumOne().toFixed(2);
  totalSum.innerHTML = settingsBillFunc.SumOne().toFixed(2);
  settingsBillFunc.ScreenBehaviour(); // call back function for screen changes
});