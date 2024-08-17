window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

//function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 5000, years: 4, rate: 2.6};
  const uiAmount = document.getElementById("loan-amount");
  uiAmount.value = values.amount;
  const uiYears = document.getElementById("loan-years");
  uiYears.value = values.years;
  const uiRate = document.getElementById("loan-rate");
  uiRate.value = values.rate;
  update();
}

//update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(currentUIValues);
  updateMonthly(monthlyPayment);
}

//calculate monthly payment, making sure it ends with 2 decimals
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return ((monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2);
}

//displaying monthly payment
function updateMonthly(monthly) {
  const uiMonthly = document.getElementById("monthly-payment");
  uiMonthly.innerText = "$" + monthly;
}
