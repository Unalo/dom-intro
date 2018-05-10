var roundedBillTotal = 0;
//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(billStringFunction) {

  //split the impu
  var billItems = billStringFunction.split(",");
  //  console.log(billItems);
  var billTotal = 0;
  //  * loop over all the entries in the the resulting list
  for (var i = 0; i < billItems.length; i++) {
    var billItem = billItems[i].trim();
    console.log(billItem);
    //  * check if it is a call or an sms and add the right amount to the overall total
    if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
  }
  //  * once done looping over all the entries - display the total onto the screen in the billTotal element
  return billTotal.toFixed(2);
}

calculateBtnElement.addEventListener('click',
  function() {
    var billStringFunction = billStringElement.value;
    var roundedBillTotal = calculateBtnClicked(billStringFunction)
    billTotalElement.innerHTML = roundedBillTotal
    //  color();
    if (roundedBillTotal < 20) {
      billTotalElement.classList.remove("warning");
      billTotalElement.classList.remove("danger");
    }
    //if greater than 20 remove "danger" add "warning"
    if (roundedBillTotal > 20 && 30 > roundedBillTotal) {
      billTotalElement.classList.remove("danger");
      billTotalElement.classList.add("warning");
    }
    //if greater than 30 remove "warning" add "danger"
    if (roundedBillTotal > 30) {
      billTotalElement.classList.remove("warning");
      billTotalElement.classList.add("danger");
    }
  }
);