function check(lines, sorting) {
	for (let i = 0; i < lines.length - 1; i++) {
		const currentLine = lines[i];
		const nextLine = lines[i+1];
		if (!checkTwoLines(currentLine, nextLine, sorting)) {
			return false;
		}
	}

	return true;
}

function checkTwoLines(line1, line2, sorting) {
	let i = 0;
	let line1W = 0;
	let line2W = 0;
	let map = getWeights(sorting); // can optimize it (do only once)

	while (i < line1.length && line1W === line2W) {
		line1W += map[line1[i]];
		line2W += map[line2[i]];
		i++;
	}

	return line1W >= line2W;
}

function getWeights(sorting) {
	return sorting.reduce((map, item, i) => {
		map[item] = sorting.length - i + 1;
		return map;
	}, {});
}

check(['ba', 'bc', 'aa', 'ac', 'cb'], ['b', 'a', 'c']);