$$MC.Controllers.UserController = $$MC.Controllers.UserController || function UserController() {};
$$MCUserController = $$MC.Controllers.UserController;

/**
 * Get a form suitable for editing a user. 
 * @param {Object} user Optional - a user object that can be provided to pre-populate the form fields.
 */
$$MCUserController.getEditor$ = function UserController$getEditor(user) {
	var userForm, userFields;
	user = user || {};
	userFields = Handlebars.templates.user_form(user);
	userForm = Handlebars.templates.form_create({ 
		content: userFields,
		id: 'user_form',
		submit_label: 'Submit',
		cancel_label: 'Cancel' });
	return $(userForm);
};
