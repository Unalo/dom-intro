var billType = document.querySelector(".billTypeText");
var addBillButton = document.querySelector(".addToBillBtn");
var totalCall = document.querySelector(".callTotalOne");
var totalSms = document.querySelector(".smsTotalOne");
var sum1 = document.querySelector(".totalOne");

var main = TextBill(); //factory function [instance]

function calculateText() {
  //input value
  var textOne = billType.value.trim();
  main.Maths(textOne); // update calls and sms
  //add total for calls and sms
  totalSms.innerHTML = main.Sms().toFixed(2);
  totalCall.innerHTML = main.Call().toFixed(2);
  sum1.innerHTML = main.Sum().toFixed(2);
}

function totalCostColor() {
  var totalSum = main.Sum();
  //if less than 30 remove classList
  if (totalSum < 30) {
    sum1.classList.remove("warning");
    sum1.classList.remove("danger");
  }
  //if greater than 30 remove "danger" add "warning"
  if (totalSum > 30 && 50 > totalSum) {
    sum1.classList.remove("danger");
    sum1.classList.add("warning");
  }
  //if greater than 50 remove "warning" add "danger"
  else if (totalSum > 50) {
    sum1.classList.remove("warning");
    sum1.classList.add("danger");
  }
}
// add Event Listener [call my functions]
addBillButton.addEventListener("click",
  function() {
    calculateText();
    totalCostColor();
  }
);