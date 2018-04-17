var billType = document.querySelector(".billTypeText");
var addBillButton = document.querySelector(".addToBillBtn");
var totalCall = document.querySelector(".callTotalOne");
var totalSms = document.querySelector(".smsTotalOne");
var sum = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;

function calculateText() {
  //input value
  var text = billType.value;
  //console.log(text);
  if (text === "sms") {
    smsTotal += 0.75;
  }
  else if(text === "call") {
    callsTotal += 2.75;
  }
  //add total for calls and sms
  totalSms.innerHTML = smsTotal.toFixed(2);
  totalCall.innerHTML = callsTotal.toFixed(2);
  totalBill = callsTotal + smsTotal;
  sum.innerHTML = totalBill.toFixed(2);
}

function totalCostColor () {
  //if less than 30 remove classList
  if (totalBill < 30) {
      sum.classList.remove("warning");
      sum.classList.remove("danger");
  }
  //if greater than 30 remove "danger" add "warning"
  if (totalBill > 30 && 50 > totalBill) {
    sum.classList.remove("danger");
    sum.classList.add("warning");
  }
  //if greater than 50 remove "warning" add "danger"
  else if (totalBill > 50) {
    sum.classList.remove("warning");
    sum.classList.add("danger");
  }
}
// add Event Listener [call my function]
addBillButton.addEventListener("click",
function () {
  calculateText();
  totalCostColor();
}
);
