$("#submit").click(function(){
	$.ajax({
	type: "POST",
	url: "login.php",
	data: "name="+$("#login").val()+"&pass="+$("#pass").val(),
	success: function(reply){
		if (reply == 'Ok') {
			window.location.href = "http://example.com/index.html";
		} else {
			window.alert(reply);
		}
	}
})
});