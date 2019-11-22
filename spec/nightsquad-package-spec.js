'use babel';

import NightsquadPackage from '../lib/nightsquad-package';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe ('NightsquadPackage', function() {
	beforeEach(function(){
		console.log("Nique ta mere");
		waitsForPromise(() => atom.workspace.open());
		waitsForPromise(() => atom.packages.activatePackage('tabs'));
		waitsForPromise(() => atom.packages.activatePackage('tree-view'));
	});
});
