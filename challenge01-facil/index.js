function findFirstRepeated(gifts) {
    const seenGifts = {};
 
    for (const gift of gifts) {
        if (seenGifts[gift]) {
            return gift;
        }
        seenGifts[gift] = true;
    }

    return -1;
}
  