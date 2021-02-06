let displayStocks,
col1,
col2,
col3;

let symbolHeading,
currentPriceHeading,
dateHeading;

let theStockSymbol,
stockSymbol,
currentPrice,
date;

let stockSymbolText,
currentPriceText,
dateText;

let mainContent = document.querySelector('main');

function createElements(symbol) {
    //let symbol = document.querySelector('form > input').value;
    //create elements
    displayStocks = document.createElement('div');
    col1 = document.createElement('div');
    col2 = document.createElement('div');
    col3 = document.createElement('div');

    symbolHeading = document.createElement('h2');
    currentPriceHeading = document.createElement('h2');
    dateHeading = document.createElement('h2');

    stockSymbol = document.createElement('p');
    currentPrice = document.createElement('p');
    date = document.createElement('p');

    stockSymbolText = document.createTextNode('Stock Symbol');
    currentPriceText = document.createTextNode('Current Price');
    dateText = document.createTextNode('Date');

    //add classes
    displayStocks.classList.add('display-stocks');
    col1.classList.add('col-1');
    col2.classList.add('col-2');
    col3.classList.add('col-3');

    symbolHeading.classList.add('stock-symbol-heading');
    currentPriceHeading.classList.add('current-price-heading');
    dateHeading.classList.add('date-heading');

    stockSymbol.classList.add('stock-symbol');
    currentPrice.classList.add('current-price');
    date.classList.add('date');
    
    //build document fragment
    mainContent.appendChild(displayStocks);

    displayStocks.appendChild(col1);
    displayStocks.appendChild(col2);
    displayStocks.appendChild(col3);

    col1.appendChild(symbolHeading);
    col2.appendChild(currentPriceHeading);
    col3.appendChild(dateHeading);

    col1.appendChild(stockSymbol);
    col2.appendChild(currentPrice);
    col3.appendChild(date);
    theStockSymbol = document.createTextNode(symbol);

    symbolHeading.append(stockSymbolText);
    currentPriceHeading.append(currentPriceText);
    dateHeading.append(dateText);

    stockSymbol.appendChild(theStockSymbol);
}

function displayInfo (symbol) {
    createElements(symbol);
}

export default displayInfo;