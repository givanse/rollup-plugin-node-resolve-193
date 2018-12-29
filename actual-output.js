var Foobar = (function () {
	'use strict';

	var somethingExternal = 'I am something external.';

	var fizzbuzz = 'I am fizzbuzz.';

	var index = `I am the entry point. I have ${fizzbuzz} and ${somethingExternal}`;

	return index;

}());
