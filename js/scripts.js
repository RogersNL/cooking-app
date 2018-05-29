var converter = function(unit, convRate) {
  return unit*convRate;
}
var convRate = 3.78541;
var unit = parseFloat(prompt("Enter volume to be converted to liters in gallons:"));


alert("The conversion is " + converter(unit, convRate) + " liters");
