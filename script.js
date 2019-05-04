
// setting DOM elements for price
var usdparagraph = document.getElementById('usdArea');
var btcparagraph = document.getElementById('btcArea');
var ethparagraph = document.getElementById('ethArea');
var priceButton = document.getElementById( "priceButton");
// total TRX DOM variables
var trxTotal = document.getElementById('trxTotal');
var totalButton = document.getElementById('totalButton');
var usdTotal = document.getElementById('usdTotal');
var btcTotal = document.getElementById('btcTotal');
var ethTotal = document.getElementById('ethTotal');

// when button is clicked, reach out to API and get current TRX/BTC Price
priceButton.addEventListener('click', function() {
fetch('https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=btc,eth,usd')
  .then(response => response.json())
  .then(function(data) {
    usdparagraph.innerText = ' ' + data.tron.usd + ' ' + 'USD';
    btcparagraph.innerText = ' ' + data.tron.btc + ' ' + 'BTC';
    ethparagraph.innerText = ' ' + data.tron.eth + ' ' + 'ETH';
    console.log(data);
  });
});

totalButton.addEventListener('click', function() {
  var request2 = new XMLHttpRequest();

  fetch('https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=btc,eth,usd')
  .then(response => response.json())
  .then(function(data2) {
    var totalTron = trxTotal.value;
    usdTotal.innerText = (totalTron * data2.tron.usd).toFixed(2) + ' ' + 'USD';
    btcTotal.innerText = (totalTron * data2.tron.btc).toFixed(8) + ' ' + 'BTC';
    ethTotal.innerText = (totalTron * data2.tron.eth).toFixed(8) + ' ' + 'ETH';  
  }); 
});