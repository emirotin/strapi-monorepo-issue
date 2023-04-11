const base = require("./base.json");
const strapiOverride = require("@strapi/typescript-utils/tsconfigs/server");

module.exports = {
	...base,
	compilerOptions: {
		...base.compilerOptions,
		...strapiOverride.compilerOptions,
		verbatimModuleSyntax: undefined,
	},
	display: strapiOverride.display ?? "Strapi",
};
