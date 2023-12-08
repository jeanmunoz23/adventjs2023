function organizegifts(gifts) {
    const BOX_SIZE = 10
    const PALLET_SIZE = 5 * BOX_SIZE

    let organizedgifts = ''
    let remainings = gifts

    while (remainings.length > 0) {
        const nextTypeIndex = remainings.search(/[A-Za-z]/g)
        const nextTypeSymbol = remainings[nextTypeIndex]
        const nextTypeAmount = remainings.substring(0, nextTypeIndex)

        const numberOfPallets = Math.floor(nextTypeAmount / PALLET_SIZE)
        const giftOfPallets = numberOfPallets * PALLET_SIZE
        const giftCount = (nextTypeAmount - giftOfPallets) / BOX_SIZE
        const numberOfBoxes = Math.floor(giftCount)
        const giftOfBoxes = numberOfBoxes * BOX_SIZE
       
        const numberOfSpares = nextTypeAmount - giftOfBoxes - giftOfPallets

        if (numberOfPallets > 0) {
            organizedgifts += `[${nextTypeSymbol}]`.repeat(numberOfPallets)
        }
        if (numberOfBoxes > 0) {
            organizedgifts += `{${nextTypeSymbol}}`.repeat(numberOfBoxes)
        }
        if (numberOfSpares > 0) {
            organizedgifts += `(${nextTypeSymbol.repeat(numberOfSpares)})`
        }

        remainings = remainings.substring(nextTypeIndex + 1)
    }

    return organizedgifts
}
const result1 = organizegifts(`76a11b`)
console.log(result1)