$$MC.Controllers.AdminController = $$MC.Controllers.AdminController || function AdminController() {};
$$MCAdminController = $$MC.Controllers.AdminController;

/**
 * "Static" main function. Kicks off the program. No 'this' context.
 */
$$MCAdminController.main = function AdminController$main() {
	var $userEditor = $$MCUserController.getEditor$();
	$$MCUtilities.setMainContent($userEditor);
};
