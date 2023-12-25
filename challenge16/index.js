function transformTree(tree) {
    function recursiveToTree(arr, i = 0) {
        if (i >= arr.length || arr[i] === null) return null;
        return {
        value: arr[i],
        left: recursiveToTree(arr, 2 * i + 1),
        right: recursiveToTree(arr, 2 * i + 2)
        };
    }

    const result = recursiveToTree(tree);

    return result;
}
console.log(transformTree([3, 1, 0, 8, 12, null, 1]))