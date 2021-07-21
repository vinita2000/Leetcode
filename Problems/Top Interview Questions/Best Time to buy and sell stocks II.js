var maxProfit = function(prices) {
    profit = 0;
    for (let i=0; i<prices.length-1; i++){
        if (prices[i+1]-prices[i] > 0){
            profit += prices[i+1] - prices[i];
        }
    }
    console.log(profit);
    return profit;
};
