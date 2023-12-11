function getIndexsForPalindrome(word) {
    if (word == [...word].reverse().join('')) return [];

    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
            const changed = [...word];
            changed[i] = word[j];
            changed[j] = word[i];
            const aux = [...changed];
            const reverted =  changed.reverse().every((l, n) => l === aux[n])
            if (reverted) {
                return [i, j];
            }
        }
    }

    return null;
}
  console.log(getIndexsForPalindrome('anna')); // []
  console.log(getIndexsForPalindrome('abab')); // [0, 1]
  console.log(getIndexsForPalindrome('abac')); // null
  console.log(getIndexsForPalindrome('aaaaaaaa')); // []
  console.log(getIndexsForPalindrome('aaababa')); // [1, 3]
  console.log(getIndexsForPalindrome('caababa')); // null
  console.log(getIndexsForPalindrome('rotaratov')); // [4, 8]
  