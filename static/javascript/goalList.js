var BaseGoalList = function() {
	//change tab
	var changeTab = function() {
		var tab = $('#tab').children('.col');
		
		tab.on('click', function(event) {
			event.preventDefault();
			var i = $(this).index();

			$(this).addClass('active').siblings().removeClass('active');

			switch(i) {
				case 0:
					// do sth
					break;
				case 1:
					// do sth
					break;
				case 3:
					// do sth
					break;
				default: 
					return i;
			}
			
		});
	};


	return {
		init: function() {
			changeTab();
		}
	};
}();

jQuery(function() { BaseGoalList.init() });