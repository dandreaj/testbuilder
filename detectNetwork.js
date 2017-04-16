// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber.slice(0,2);
  var cardLength = cardNumber.length;

  if(prefix === "38" && cardLength == 14 || prefix ===  "39" && cardLength == 14) {
    return "Diner's Club";
  }
  if(prefix === "34" && cardLength ==15 || prefix === "37" && cardLength == 15){
      return "American Express";
  }
  if(cardLength == 13 && prefix[0] == "4" ||cardLength == 16 && prefix[0] == "4" ||cardLength == 19 && prefix[0] === "4") {
      return "Visa";
  }
  if(cardLength == 16 && prefix === "51" || cardLength == 16 && prefix === "52" ||cardLength == 16 && prefix === "53" ||cardLength == 16 && prefix === "54" || cardLength == 16 && prefix === "55"){
      return "MasterCard";
  }
  if(cardLength == 16 || 19) {
      if(cardNumber.slice(0,4) == "6011"){
        return "Discover";
      }
      if(cardNumber.slice(0,3) >= 644 && cardNumber.slice(0,3) <= 649) {
        return "Discover";
      }
      if(cardNumber.slice(0,2) == "65"){
        return "Discover";
      }
  }
  if(cardLength >=12 && cardLength <=19){
    if(cardNumber.slice(0,4) == "5018" || "5020" || "5038" || "6304"){
      return "Maestro";
    }
  }
  // return "unknown card network";
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
