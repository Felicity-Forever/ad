var ab = new Vue({
    el: '#myNews',
    data: {
        message: '0',
    },
});

$(function(){
	$("#campusDynamics li").hover(function() {
		$(this).find(".jnNav").show(); 
	}, function() {
		$(this).find(".jnNav").hide();
	});
})