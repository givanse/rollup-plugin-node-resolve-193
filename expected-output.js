var Foobar = (function (fizzbuzz, somethingExternal) {
	'use strict';

	fizzbuzz = fizzbuzz && fizzbuzz.hasOwnProperty('default') ? fizzbuzz['default'] : fizzbuzz;

	somethingExternal = somethingExternal && somethingExternal.hasOwnProperty('default') ? somethingExternal['default'] : somethingExternal;

	var index = `I am the entry point. I have ${fizzbuzz} and ${somethingExternal}`;

	return index;

}(fizzbuzz));
