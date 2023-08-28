function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    var convertedAmount;

    // Perform currency conversion here
    if (fromCurrency === "USD" && toCurrency === "EUR") {
        convertedAmount = amount * 0.85;
    } else if (fromCurrency === "USD" && toCurrency === "GBP") {
        convertedAmount = amount * 0.72;
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
        convertedAmount = amount * 1.18;
    } else if (fromCurrency === "EUR" && toCurrency === "GBP") {
        convertedAmount = amount * 0.85;
    } else if (fromCurrency === "GBP" && toCurrency === "USD") {
        convertedAmount = amount * 1.39;
    } else if (fromCurrency === "GBP" && toCurrency === "EUR") {
        convertedAmount = amount * 1.18;
    } else {
        convertedAmount = amount;
    }

    document.getElementById("result").innerText = convertedAmount.toFixed(2) + " " + toCurrency;
}
