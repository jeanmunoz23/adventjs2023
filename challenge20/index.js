function distributeGifts(weights) {
    const result = [];
    let topRow = [];
    let bottomRow = [];

    for (const [y, weight] of weights.entries()) {
      topRow = weights[y - 1];
      bottomRow = weights[y + 1];
      result[y] = [];

      for (const [x, w] of weight.entries()) {
        let top = topRow?.[x],
          bottom = bottomRow?.[x];
        let left = weight?.[x - 1],
          right = weight?.[x + 1];
        const divisor = !!w + !!top + !!bottom + !!left + !!right;
        (top ??= 0), (bottom ??= 0), (left ??= 0), (right ??= 0);
        const sumValues = w + top + bottom + left + right
        const newValue = Math.round((sumValues) / divisor);
        result[y][x] = newValue;
      }
    }

    return result;
  }