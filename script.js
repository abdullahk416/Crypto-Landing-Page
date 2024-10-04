var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

const apiKey = 'TzphMEfbMSecBHknmnjscg==gWckHmsrfk8LHeCx'; 
const apiUrl = 'https://api.api-ninjas.com/v1/cryptoprice?symbol=';

const symbols = ['BTCUSD', 'ETHUSD', 'DOGEUSD'];

symbols.forEach(symbol => {
    fetch(`${apiUrl}${symbol}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.price) {
            if (symbol === 'BTCUSD') {
                btc.innerHTML = `$${data.price}`;
            } else if (symbol === 'ETHUSD') {
                eth.innerHTML = `$${data.price}`;
            } else if (symbol === 'DOGEUSD') {
                doge.innerHTML = `$${data.price}`;
            }
        } else {
            console.error(`Failed to fetch price for ${symbol}`);
        }
    })
    .catch(error => console.error(`Error fetching data for ${symbol}:`, error));
});
