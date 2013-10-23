$(document).ready(function() {
	var data, template;
	data = { title: "Roland's Book", body: "This is the best one ever" };
	template = $(Handlebars.templates.test(data));
	$('body').append(template);
	
	$.ajax({
			url : 'http://localhost:3000/users/2.json',
			success : function(data) {
				var template = $(Handlebars.templates.user(data));
				$('body').append(template);
			}
		});
});
