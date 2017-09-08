const toSnakeCase = (text) => {
	return text.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
}

export {toSnakeCase}
