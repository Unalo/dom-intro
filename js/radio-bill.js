var addBtn = document.querySelector(".radioBillAddBtn");
var totalCallTwo = document.querySelector(".callTotalTwo");
var totalSmsTwo = document.querySelector(".smsTotalTwo");
var sumTwo = document.querySelector(".totalTwo");
var first = TextBill(); // factory function [instance]

function radioBill() {
  //input value
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;
  }
  first.Maths(billItemType); // update calls and sms
  totalCallTwo.innerHTML = first.Call().toFixed(2);
  totalSmsTwo.innerHTML = first.Sms().toFixed(2);
  sumTwo.innerHTML = first.Sum().toFixed(2);
}
// screen changes
function totalColor() {
  var sumTotal = first.Sum();
  if (sumTotal < 30) {
    sumTwo.classList.remove("danger");
    sumTwo.classList.remove("warning");
  }
  if (sumTotal > 30 && 50 > sumTotal) {
    sumTwo.classList.remove("danger");
    sumTwo.classList.add("warning");
  } else if (sumTotal > 50) {
    sumTwo.classList.remove("warning");
    sumTwo.classList.add("danger");
  }
}
// add Event Listener [call my function]
addBtn.addEventListener("click",
  function() {
    radioBill();
    totalColor();
  }
);