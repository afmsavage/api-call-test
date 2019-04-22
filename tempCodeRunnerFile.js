
// setting DOM elements
var usdparagraph = document.getElementById('usdArea');
var btcparagraph = document.getElementById('btcArea');
var ethparagraph = document.getElementById('ethArea');
var priceButton = document.getElementById( "priceButton");

// when button is clicked, reach out to API and get current TRX/BTC Price
// paragraph.style.display = 'none';
priceButton.addEventListener('click', function() {
    var request = new XMLHttpRequest();

    // http call to get the price of TRX in USD/BTC/ETH from CoinGecko
    request.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=btc,eth,usd', true);
    request.onload = function() {
      var data = JSON.parse(this.responseText); // Begin accessing JSON data here
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