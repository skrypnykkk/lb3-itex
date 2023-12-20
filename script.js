javascript:(function() {
var tableTr = document.querySelectorAll("tr");
var date;
var maxTemperature = -Infinity;
for(let i = 1; i < tableTr.length; i++){
  var TMPMAX = parseFloat(tableTr[i].querySelector("td:nth-child(4)").textContent);
  if(TMPMAX > maxTemperature){
    maxTemperature = TMPMAX;
      date = tableTr[i].querySelector("td:nth-child(3)").textContent;
    }
}
alert("The most hottest day is:\n Date: " + date + "\nmax temperature: " + maxTemperature);
})();