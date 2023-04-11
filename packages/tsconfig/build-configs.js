const fs = require("node:fs");

const baseFileNames = process.argv.slice(2);

if (!baseFileNames.length) {
	throw new Error("Missing base file name");
}

for (const baseFileName of baseFileNames) {
	const config = require(`./${baseFileName}`);
	fs.writeFileSync(
		`${baseFileName}.json`,
		JSON.stringify(config, null, 2),
		"utf8"
	);
}
