$$MC.Controllers.ConfessorController = $$MC.Controllers.ConfessorController || function ConfessorController() {};
$$MCConfessorController = $$MC.Controllers.ConfessorController;

/**
 * "Static" main function. Kicks off the program. No 'this' context.
 */
$$MCConfessorController.main = function ConfessorController$main() {
	var page_id, $body, header, footer, page, pages, dioceses;
	
	header = "";
	footer = "";
	pages = {
		request_account: MCTemplates.confessor.content_request_account({}),
	};
	
	$body = $('body');
	for (page_id in pages) {
		page = MCTemplates.shared.page({
			id: page_id,
			header: header,
			footer: footer,
			content: pages[page_id]
		});
		$body.prepend($(page).trigger('create'));
	}
	$.mobile.changePage('#request_account');
};

$(document).ready(function() {
    $$MC.Controllers.ConfessorController.main();
});
