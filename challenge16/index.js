function transformTree(tree) {
    const index = arguments[1] ?? 0
    const value = tree[index]
    let base
    let result

    if (value !== null && value !== undefined) {
        base = index * 2
        result = {
        value: value,
        left: transformTree(tree, base + 1),
        right: transformTree(tree, base + 2),
        }
    }

    return result ?? null
}
console.log(transformTree([3, 1, 0, 8, 12, null, 1]))