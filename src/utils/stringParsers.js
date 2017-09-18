const toSnakeCase = (text) => {
	return text.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
}

const toCamelCase = (text) => {
	return text.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export { toSnakeCase, toCamelCase };
