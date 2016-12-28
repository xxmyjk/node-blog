var BaseLogin = function() {
	
	// 控制登录注册的切换
	var initToggler = function() {
		var login = jQuery('.login-form');
		var register  = jQuery('.register-form');
			
		jQuery('#register').on('click', function(e) {
			e.preventDefault();
			login.hide();
			register.show();
		});

		jQuery('#login').on('click', function(e) {
			e.preventDefault();
			register.hide();
			login.show();
		});
	};

	// 表单的验证提交
	var initValidate = function() {

	};

	return {
		init: function() {
			initToggler();
			initValidate();		
		}
	}

}();

jQuery(function() {	BaseLogin.init() });
