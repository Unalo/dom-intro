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
  settingsBillFunc.callOne(callText)
  var smsText = smsSetting.value;
  settingsBillFunc.smsOne(smsText)
  var warningColor = warningSetting.value;
  settingsBillFunc.warningOne(warningColor)
  var criticalColor = criticalSetting.value;
  settingsBillFunc.criticalOne(criticalColor)
});

addBtn.addEventListener('click', function() {
  var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedBtn) {
    var billItemTypeWithSettings = checkedBtn.value;
    settingsBillFunc.calc(billItemTypeWithSettings);
  }
  callTotalSum.innerHTML = settingsBillFunc.callSumOne().toFixed(2);
  smsTotalSum.innerHTML = settingsBillFunc.smsSumOne().toFixed(2);
  totalSum.innerHTML = settingsBillFunc.sumOne().toFixed(2);
  var unalo = settingsBillFunc.screenBehaviour();
  // var siya = settingsBillFunc.stop(
});