/*

  Usage:
  
    // Make elements unselectable
    $(...).selectable(false);
    
    // Make them selectable again
    $(...).selectable(true);

*/

(function($) {
	
// Values used for making an element (un)selectable
	
	var selectableValues = {
		selectable: {
			userSelect: 'auto',
			onselectstart: function() { return true; },
			unselectable: 'off'
		},
		unselectable: {
			userSelect: 'none',
			onselectstart: function() { return false },
			unselectable: 'on'
		}
	};

// Plugin for making elements (un)selectable
	
	$.fn.selectable = function(isSelectable) {
		if (isSelectable === void(0)) {
			isSelectable = true;
		}
		var values = selectableValues[( isSelectable ? 'selectable' : 'unselectable' )];
		return this.each(function() {
			this.onselectstart = values.onselectstart;
			$(this).attr('unselectable', values.unselectable)
				.css({
					'-moz-user-select':     values.userSelect,
					'-khtml-user-select':   values.userSelect
					'-webkit-user-select':  values.userSelect,
					'user-select':          values.userSelect,
					'-ms-user-select':      values.userSelect
				});
		});
	};
	
}(jQuery));
