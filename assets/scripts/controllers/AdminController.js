$$MC.Controllers.AdminController = $$MC.Controllers.AdminController || function AdminController() {};
$$MCAdminController = $$MC.Controllers.AdminController;

/**
 * "Static" main function. Kicks off the program. No 'this' context.
 */
$$MCAdminController.main = function AdminController$main() {
	var page_id, $body, header, footer, page, pages = [];
	
	header = MCTemplates.admin.header({ title: "MyConfessor Admin" });
	footer = MCTemplates.admin.footer({});
	pages = {
		account_requests: MCTemplates.admin.account_requests_content({}),
		account_search: MCTemplates.admin.account_search_content({}),
		edit_account: MCTemplates.admin.edit_account_content({})
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
	$.mobile.changePage('#account_requests');
};

$(document).ready(function() {
    $$MC.Controllers.AdminController.main();
});
