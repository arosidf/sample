'use strict';

// =============================================================================
// var declaration
// =============================================================================

// =============================================================================
// helper function declaration
// =============================================================================

// =============================================================================
// exported function declaration
// =============================================================================
exports.do = function(req, res) {
	req.logout();
	res.redirect('/');
};
