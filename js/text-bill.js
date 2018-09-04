var billType = document.querySelector(".billTypeText");
var addBillButton = document.querySelector(".addToBillBtn");
var totalCall = document.querySelector(".callTotalOne");
var totalSms = document.querySelector(".smsTotalOne");
var sum1 = document.querySelector(".totalOne");

var main = TextBill(); //factory function [instance]

var sumTwo = document.querySelector(".totalTwo");
var totalTemplateOne = document.getElementById("displayTotalOne");
var totalsDataOne = document.querySelector(".templateTotals").innerHTML;
var templateDataOne = Handlebars.compile(totalsDataOne);

window.addEventListener('load', function() {
  var totalsOne = {
    callTotalTwo: "0.00",
    smsTotalTwo: "0.00",
    totalTwo: "0.00"
  };
  console.log("run template");
  totalTemplateOne.innerHTML = templateDataOne(totalsOne);
});



function calculateText() {
  //input value
  var textOne = billType.value.trim();
  main.Maths(textOne); // update calls and sms
  //add total for calls and sms

  var totalsOne = {
    callTotalTwo: main.Call(textOne).toFixed(2),
    smsTotalTwo: main.Sms(textOne).toFixed(2),
    totalTwo: main.Sum().toFixed(2),
    color: main.Screen()
  };
  console.log("run template");
  totalTemplateOne.innerHTML = templateDataOne(totalsOne);

  // totalSms.innerHTML = main.Sms().toFixed(2);
  // totalCall.innerHTML = main.Call().toFixed(2);
  // sum1.innerHTML = main.Sum().toFixed(2);
}

// function totalCostColor() {
//   var totalSum = main.Sum();
//   //if less than 30 remove classList
// // {{#if totalSum > 30 && 50 > totalSum}}
// // totalTwo.classList.remove("warning");
// // totalTwo.classList.remove("danger");
// // {{/if}}

//   if (totalSum < 30) {
//     sumTwo.classList.remove("warning");
//     sumTwo.classList.remove("danger");
//   }
//   //if greater than 30 remove "danger" add "warning"
//   if (totalSum > 30 && 50 > totalSum) {
//     sumTwo.classList.remove("danger");
//     sumTwo.classList.add("warning");
//   }
//   //if greater than 50 remove "warning" add "danger"
//   else if (totalSum > 50) {
//     sumTwo.classList.remove("warning");
//     sumTwo.classList.add("danger");
//   }
// }
// add Event Listener [call my functions]
addBillButton.addEventListener("click",
  function() {
    calculateText();
  }
);