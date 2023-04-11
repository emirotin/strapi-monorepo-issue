const base = require("./base.json");
const reactLibraryOverrides = require("./react-library.json");
const strapiOverride = require("@strapi/typescript-utils/tsconfigs/admin");

module.exports = {
	...base,
	compilerOptions: {
		...base.compilerOptions,
		...reactLibraryOverrides.compilerOptions,
		...strapiOverride.compilerOptions,
		verbatimModuleSyntax: undefined,
	},
	display: strapiOverride.display ?? "Strapi Admin",
};
