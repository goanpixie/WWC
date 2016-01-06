var bank_balance =303.98;
const phone_price=99.99;
const accesory_price=9.99;
const tax_rate=0.08;
var amount=0;
var noOfPhones;
var totalphonePrice;

function calculateTax(amount){
  return amount * tax_rate;
}
function formatAmount(amount){
  return "$" + amount.toFixed(2);
}

function calculateHowManyPhonesCanIBuy(numberOfPhones) {
  totalphonePrice= numberOfPhones*phone_price;
  console.log(totalphonePrice);
}

while(amount < bank_balance){
  amount=amount+phone_price;

  if (totalphonePrice<bank_balance){
    amount=amount+accesory_price;
  }
}

amount=amount+calculateTax(amount);
console.log("Your purchase:" + formatAmount(amount));
if(amount>bank_balance){
  console.log("You can't afford this purchase");
}   


