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
// create a variables that will keep track of all the settings
// var callCostBlock = 0;
// var smsCostBlock = 0;
// var warningBlock = 0;
// var criticalBlock = 0;
// // create a variables that will keep track of all three totals.
// var callSum = 0;
// var smsSum = 0;
// var billSum = 0;


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
  // var siya = settingsBillFunc.stop();

  //screen to change behaviour when "warning" and "danger" are reached
  //   function screenBehaviour() {
  //     var sumTotals1 = settingsBillFunc.sumOne();
  //     console.log(sumTotals1);
  //     if (sumTotals1 < warningBlock) { //remove both classes
  //       totalSum.classList.remove("warning");
  //       totalSum.classList.remove("danger");
  //     }
  //     if (sumTotals1 > warningBlock && criticalBlock > sumTotals1) {
  //       totalSum.classList.add("warning");
  //       totalSum.classList.remove("danger");
  //     }
  //     if (sumTotals1 >= criticalBlock) {
  //       totalSum.classList.add("danger");
  //       totalSum.classList.remove("warning");
  //     }
  //   }
});
// function billWithSettings() {
//
//   // update call
//   // if (billItemTypeWithSettings === "call") {
//   //   callSum += callCostBlock;
//   //   billSum += callCostBlock;
// if (billSum > criticalBlock) {
//   var remainder = billSum - criticalBlock;
//   billSum -= remainder;
//   callSum -= remainder;
// }
// if (billSum > criticalBlock) {
//   var remainder = billSum - criticalBlock;
//   billSum -= remainder;
//   smsSum -= remainder;
// }
//
// }
// //update sms
// if (billItemTypeWithSettings === "sms") {
//   smsSum += smsCostBlock;
//   billSum += smsCostBlock;

//
// }
// }
//
// function update() {
//   var callText = callSetting.value;
//   settingsBillObj.callOne(callText)
//   // callCostBlock = parseFloat(callText);
//   var smsText = smsSetting.value;
//   smsCostBlock = parseFloat(smsText);
//   var warningColor = warningSetting.value;
//   warningBlock = parseFloat(warningColor);
//   var criticalColor = criticalSetting.value;
//   criticalBlock = parseFloat(criticalColor);
//   // console.log(callText);
//   //console.log(smsText);
// }
// //screen to change behaviour when "warning" and "danger" are reached
// function screenBehaviour() {
//   if (billSum < warningBlock) { //remove both classes
//     totalSum.classList.remove("warning");
//     totalSum.classList.remove("danger");
//   }
//   if (billSum > warningBlock && criticalBlock > billSum) {
//     totalSum.classList.add("warning");
//     totalSum.classList.remove("danger");
//   }
//   if (billSum >= criticalBlock) {
//     totalSum.classList.add("danger");
//     totalSum.classList.remove("warning");
//   }
// }
// //add an event listener for when the 'Update settings' button is pressed
// updateBtn.addEventListener("click", function() {
//   update();
// });
// //add an event listener for when the add button is pressed
// addBtn.addEventListener("click", function() {
//   billWithSettings();
//   screenBehaviour();
// });