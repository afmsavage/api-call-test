
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
// paragraph.style.display = 'none';
priceButton.addEventListener('click', function() {
    var request = new XMLHttpRequest();

    // http call to get the price of TRX in USD/BTC/ETH from CoinGecko
    request.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=btc,eth,usd', true);
    request.onload = function() {
      var data = JSON.parse(this.responseText); // Begin accessing JSON data here
      //var totalTron = trxTotal.value;
      // Display the TRX/BTC and TRX/ETH Price
      usdparagraph.style.display = 'block';
      btcparagraph.style.display = 'block';
      ethparagraph.style.display = 'block';
      // grab the correct price from the API call
      usdparagraph.innerText = ' ' + data.tron.usd + ' ' + 'USD';
      btcparagraph.innerText = ' ' + data.tron.btc + ' ' + 'BTC';
      ethparagraph.innerText = ' ' + data.tron.eth + ' ' + 'ETH';
      
    };

    request.send();

});


// This function gets the total value of USD/BTC/ETH that you have in the QTY of TRX you enter
totalButton.addEventListener('click', function() {
  var request2 = new XMLHttpRequest();

  // http call to get the price of TRX in USD/BTC/ETH from CoinGecko
  request2.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=btc,eth,usd', true);
  request2.onload = function() {
    var data2 = JSON.parse(this.responseText); // Begin accessing JSON data here
    // assign the TRX total to variable from the text field
    var totalTron = trxTotal.value;

   // Display the totals in USD/ETH/BTC
    usdTotal.style.display = 'block';
    btcTotal.style.display = 'block';
    ethTotal.style.display = 'block';

    // grab the correct price from the API call and multiply total by price
    // round to 2 places for USD and 8 decimal places for BTC/ETH
    usdTotal.innerText = (totalTron * data2.tron.usd).toFixed(2) + ' ' + 'USD';
    btcTotal.innerText = (totalTron * data2.tron.btc).toFixed(8) + ' ' + 'BTC';
    ethTotal.innerText = (totalTron * data2.tron.eth).toFixed(8) + ' ' + 'ETH';
    
  };

  request2.send();

}); 