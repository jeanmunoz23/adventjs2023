function findBalancedSegment(message) {
    let max_length = 0;
    let indices = [];
    const len = message.length
    for (let start = 0; start < len; start++) {
      let zeros = 0;
      let ones = 0;
      for (let end = start; end < len; end++) {
        if (message[end] === 0) {
          zeros++;
        } else {
          ones++;
        }
        if (zeros === ones && end - start + 1 > max_length) {
          max_length = end - start + 1;
          indices = [start, end];
        }
      }
    }

    return indices;
}