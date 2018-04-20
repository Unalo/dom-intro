// get a reference to the sms or call radio buttons
var billType = document.querySelector(".billItemTypeRadio");
var addBtn = document.querySelector(".radioBillAddBtn");
var totalCallTwo = document.querySelector(".callTotalTwo");
var totalSmsTwo = document.querySelector(".smsTotalTwo");
var sumTwo = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
var callTotalTwo = 0;
var smsTotalTwo = 0;
var totalBillTwo = 0;

function radioBill () {
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
  }
  if (billItemType === "call") {
    callTotalTwo += 2.75;
  }else if (billItemType === "sms"){
    smsTotalTwo += 0.75;
  }
  totalCallTwo.innerHTML = callTotalTwo.toFixed(2);
  totalSmsTwo.innerHTML = smsTotalTwo.toFixed(2);
  totalBillTwo = callTotalTwo + smsTotalTwo;
  sumTwo.innerHTML = totalBillTwo.toFixed(2);
}
function totalColor () {
  if (totalBillTwo < 30 ) {
    sumTwo.classList.remove("danger");
    sumTwo.classList.remove("warning");
  }
  if (totalBillTwo > 30 && 50 > totalBillTwo ) {
    sumTwo.classList.remove("danger");
    sumTwo.classList.add("warning");
  }
  else if (totalBillTwo > 50) {
    sumTwo.classList.remove("warning");
    sumTwo.classList.add("danger");
  }
}
// add Event Listener [call my function]
addBtn.addEventListener("click",
function () {
  radioBill();
  totalColor();
}
);

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
