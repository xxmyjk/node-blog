var BaseLogin = function() {

	// 控制登录注册的切换
	var initToggler = function() {
		var login = $('.login-form');
		var register  = $('.register-form');
			
		$('#register').on('click', function(e) {
			e.preventDefault();
			login.hide();
			register.show();
		});

		$('#login').on('click', function(e) {
			e.preventDefault();
			register.hide();
			login.show();
		});
	};

	// 弹窗
	var notify = function(text) {
		var notifys = $('.notifys');
		var notify = $('<li />').html(text);
		if(notifys.length == 0){
			notifys = $('<ul />').addClass('notifys').appendTo('body');
		}
		if(notifys.children('li').length > 0)
			notifys.html('');

		notifys.append(notify);

		notifys.fadeIn(300, function(){
			$(this).delay(3000).fadeOut(300, function(){
				$(this).remove();
			});
		});
	};

	// 表单的验证提交
	var initValidate = function() {
		// 登录
		var login_btn = $('#login_btn');
		var login_form = $('.login-form');

		login_btn.on('click', function(e) {
			e.preventDefault();
			
			var login_username = $('#login_username').val();
			var login_password = $('#login_password').val();
			var re = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
			var len = login_password.length;
			
			if (login_username == '') {
				notify('帐号不能为空！');
			} else if (!re.test(login_username)) {
				notify('帐号格式不正确！');
			} else if (len == 0) {
				notify('密码不能为空！');
			} else if (len < 6 || len > 16) {
				notify('密码为 6 至 16 位');
			}else {
				login_form.submit();	
			}

		});

	};

	return {
		init: function() {
			initToggler();
			initValidate();		
		}
	}

}();

jQuery(function() {	BaseLogin.init() });
