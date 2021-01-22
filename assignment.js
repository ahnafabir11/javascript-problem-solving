// https://github.com/ahnafabir11/javascript-problem-solving

// Convert Kilometer to Meter
function kilometerToMeter(kilometer) {

  if (kilometer >= 0) {
    var meter = kilometer / 1000;   // 1 kilometer = 1000 meter
    return meter;
  } else {
    return "Kilometer can not be Negative";    //  error message
  }

}


// Calculating total budget
function budgetCalculator(watch, phone, laptop) {

  if (watch < 0 || phone < 0 || laptop < 0) {
    return "Price can not be Negative !";     // error message
  } else {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var budget = watchPrice + phonePrice + laptopPrice;   // total budget
    return budget;
  }

}


// Hotel Cost calculation
function hotelCost(days) {

  var cost = 0;

  if (days < 0) {
    return 'Days can not be Negative !';    // error message
  } else if (days <= 10) {
    cost = days * 100;
  } else if (days <= 20) {
    var firstTenDays = 10 * 100;
    var secondTenDays = (days - 10) * 80;
    cost = firstTenDays + secondTenDays;
  } else {
    firstTenDays = 10 * 100;                // First ten days cost
    secondTenDays = 10 * 80;                // second ten days cost
    var remaining = (days - 20) * 50;       // remaining days cost
    cost = firstTenDays + secondTenDays + remaining;
  }

  return cost;
}


// Count longest word
function megaFriend(friends) {

  var longName = "";

  for (var i = 0; i < friends.length; i++) {
    var names = friends[i];  // getting each friend's name

    if (names.length > longName.length) {
      longName = names;     // replaceing longName
    }
  }

  return longName;
}