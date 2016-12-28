var BaseLogin = function() {

	// toggle login || register
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

	// toast
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

	// validate from
	var initValidate = function() {
		var login_btn = $('#login_btn');
		var register_btn = $('#register_btn');
		var login_form = $('.login-form');
		var register_form = $('.register-form')
		// reg
		var re_phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
		var re_email = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/; 
		// login
		login_btn.on('click', function(e) {
			e.preventDefault();
			
			var login_username = $('#login_username').val();
			var login_password = $('#login_password').val();
			var len = login_password.length;
			
			if (login_username == '') {
				notify('帐号不能为空！');
			} else if (!re_phone.test(login_username) || re_email.test(login_username)) {
				notify('帐号格式不正确！');
			} else if (len == 0) {
				notify('密码不能为空！');
			} else if (len < 6 || len > 16) {
				notify('密码为 6 至 16 位');
			}else {
				login_form.submit();	
			}
		});

		// register
		register_btn.on('click', function(e) {
			e.preventDefault();

			var nickname = $('#nickname').val();
			var email = $('#email').val();
			var phone = $('#phone').val();
			var pwd = $('#pwd').val();
			var repeat_pwd = $('#repeat-pwd').val();
			var len = pwd.length;

			if (nickname == '' || email == '' || phone == '' || pwd == '' || repeat_pwd == '') {
				notify('必填项不能为空！');
			} else if (!re_phone.test(phone)) {
				notify('手机格式不正确！');
			} else if (!re_email.test(email)) {
				notify('邮箱格式不正确！');
			} else if (len < 6 || len > 16) {
				notify('密码为 6 至 16 位');
			} else if (pwd !== repeat_pwd) {
				notify('两次输入密码不一致');
			} else {
				register_form.submit();
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
