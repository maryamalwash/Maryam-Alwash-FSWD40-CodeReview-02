var City1 = "Flight to Amsterdam";
var price1 = 1189;

var city2 = "Flight to London";
var price2 = 2360;
var sum = price1 + price2;
document.write("If you want to buy a " + "<b>" + City1 + "</b> " + " and a " + "<b>" + city2 + "</b> " + " it costs: " + sum + " EUR" + "<br>");
document.write("<br>" + "If you want to buy a " + "<b>" + City1 + "</b> " + " and a " + "<b>" + city2 + "</b> " + " as a GoldenCard holder, you will get a 10% discount: " + 90 * sum / 100 + " EUR");