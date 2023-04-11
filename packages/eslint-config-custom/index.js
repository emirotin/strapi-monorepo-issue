module.exports = {
	extends: ["next", "turbo", "prettier"],
	plugins: ["simple-import-sort"],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		// simple-import-sort is superior when it comes to auto-fixing code.
		"sort-imports": "off",
		"import/order": "off",
		"simple-import-sort/imports": "warn",
		"simple-import-sort/exports": "warn",
	},
};
