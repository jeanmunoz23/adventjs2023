function maxGifts(houses) {
    if (houses.length === 0) return 0;
    if (houses.length === 1) return houses[0];

    let dp = [];
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < houses.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
    }

    return dp[houses.length - 1];
}

console.log(maxGifts([2, 4, 2])); // 4
console.log(maxGifts([5, 1, 1, 5])); // 10
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9
console.log(maxGifts([1, 3, 1, 3, 100])); // 103
