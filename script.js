
// setting DOM elements
var paragraph = document.getElementById('textArea');
var priceButton = document.getElementById( "priceButton");

// when button is clicked, reach out to API and get current TRX/BTC Price
// paragraph.style.display = 'none';
priceButton.addEventListener('click', function() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=btc', true);
    request.onload = function() {
      var data = JSON.parse(this.responseText); // Begin accessing JSON data here
      // Display the TRX/BTC Price
      paragraph.style.display = 'block';
      paragraph.innerText = data.tron.btc + ' ' + 'BTC';
    };
    
    request.send();

});