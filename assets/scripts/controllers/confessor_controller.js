$$Controllers.ConfessorController = $$Controllers.ConfessorController ||  {};

/**
 * "Static" main function. Kicks off the program. No 'this' context.
 */
$$Controllers.ConfessorController.main = function $$ConfessorController$main() {
	$$Utils.getHtmlForJSON('dioceses', Templates.shared.form_select, function(diocesesHtml) {
		var page_id, $body, header, footer, page, pages, dioceses;
		header = "";
		footer = "";
		pages = {
			request_account: Templates.confessor.request_account_page({ settings: $$Settings, diocese_select: diocesesHtml}),
		};
		
		$body = $('body');
		for (page_id in pages) {
			page = Templates.shared.page({
				id: page_id,
				header: header,
				footer: footer,
				content: pages[page_id]
			});
			$body.prepend($(page).trigger('create'));
		}
		$.mobile.changePage('#request_account');
	}, true, { model: 'confessor_request', property: 'diocese'}, 'items');
};

$(document).ready(function() {
    $$Controllers.ConfessorController.main();
});
