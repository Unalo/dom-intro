var addBtn = document.querySelector(".radioBillAddBtn");
var totalCallTwo = document.querySelector(".callTotalTwo");
var totalSmsTwo = document.querySelector(".smsTotalTwo");
var sumTwo = document.querySelector(".totalTwo");
var first = TextBill(); // factory function [instance]

var totalTemplate = document.getElementById("totalsTwo");
var totalsData = document.querySelector(".templateTotals").innerHTML;
var templateData = Handlebars.compile(totalsData);

window.addEventListener('load', function() {
  var totals = {
    callTotalTwo: "0.00",
    smsTotalTwo: "0.00",
    totalTwo: "0.00"
  };
  console.log("run template");
  totalTemplate.innerHTML = templateData(totals);
});

function radioBill() {
  //input value
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;
  }
  first.Maths(billItemType); // update calls and sms
  var totals = {
    callTotalTwo: first.Call(billItemType).toFixed(2),
    smsTotalTwo: first.Sms(billItemType).toFixed(2),
    totalTwo: first.Sum().toFixed(2),
    color: first.Screen()
  };
  console.log("run template");
  totalTemplate.innerHTML = templateData(totals);
  // first.Maths(billItemType); // update calls and sms
  // totalCallTwo.innerHTML = first.Call().toFixed(2);
  // totalSmsTwo.innerHTML = first.Sms().toFixed(2);
  // sumTwo.innerHTML = first.Sum().toFixed(2);
}
//
// screen changes

// function totalColor() {
//   var sumTotal = first.Sum();
//   if (sumTotal < 30) {
//     sumTwo.classList.remove("danger");
//     sumTwo.classList.remove("warning");
//   }
//   if (sumTotal > 30 && 50 > sumTotal) {
//     sumTwo.classList.remove("danger");
//     sumTwo.classList.add("warning");
//   } else if (sumTotal > 50) {
//     sumTwo.classList.remove("warning");
//     sumTwo.classList.add("danger");
//   }
// }
// add Event Listener [call my function]
addBtn.addEventListener("click", function() {
  radioBill();
});