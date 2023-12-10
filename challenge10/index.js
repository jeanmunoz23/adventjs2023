function createChristmasTree(ornaments, height) {
	let tree = "";
	let ornament = 0;
	for (let i = 0; i < height; i++) {
		const ornamentsInRow = i + 1;
		let row = " ".repeat(height - ornamentsInRow);
		for (let j = 0; j < ornamentsInRow; j++) {
			row += `${ornaments[ornament]} `;
			ornament++;
			if (ornament === ornaments.length) ornament = 0;
		}
		tree += `${row.trimEnd()}\n`;
	}
	tree += `${" ".repeat(height - 1)}|\n`;
	return tree;
}



// Ejemplos de uso:
const tree1 = createChristmasTree("123", 4);
console.log(tree1);

const tree2 = createChristmasTree("*@o", 3);
console.log(tree2);
// Ejemplos de uso:
const arbol1 = createChristmasTree("xo", 4);
console.log(arbol1);
// "   x
//   o x
//  o x o
// x o x o
//    |