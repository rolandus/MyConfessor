//Declare namespaces
var $MC = {};

(function(){
	
/* ==================================================================
 * App-level settings
 * ==================================================================
 */
$MC.settings = {
    server_url: "http://localhost:3000",
    are_templates_precompiled: false,
    data_polling_interval: 300
};
	
/* ==================================================================
 * Hacks and fixes
 * ==================================================================
 */
if(!window.console) { 
	window.console = {
		log: function(a){}, 
		info: function(a){}, 
		warn: function(a){}, 
		debug: function(a){}, 
		error: function(a){} 
	}; 
}

/* ==================================================================
 * Handlebars helpers
 * ==================================================================
 */

/**
 * Handlebars helper used to convert a record ID into something useful (like a name or abbreviation)
 * 
 * Parameters
 *  @param {String} id The id of the record to dereferenced
 *  @param {Backbone.Collection} collection The collection to select the record from
 *  @param {String} property The property whose value will be returned
 */
Handlebars.registerHelper("deref", function(id, collection, property) {
	return $MC[collection].get(id).attributes[property];
});

/**
 * Template helper - abstracts the fact that the templates may
 * or may not be precompiled. If the scripts are not precompiled,
 * it assumes that each template lives in its own script tag
 * with an ID of the format "<template name>-template".
 * 
 * Parameters
 *  @param {String} name The name of the template. Convention is for the name to NOT end with "-template"
 *  @param {Backbone.Collection} collection The collection of models being passed into the template.
 */
$MC.Template = function(name, collection) {
	this.name = name;
	this.collection = collection;
	if ($MC.settings.are_templates_precompiled) {
		this.template = Handlebars.templates[name];
	} else {
		this.template = Handlebars.compile($("#" + this.name + "-template").html());
	}
};
$MC.Template.prototype = {
	/**
	 * Get the template HTML for the collection that was passed in at creation.
	 * @return The HTML for this template.
	 */
	getHtml: function() {
		var 
			json = this.collection.toJSON(),
			context = { items: json }
		;
		return this.template(context);
	},
	
	/**
	 * Get the template HTML for an arbitrary context object.
 	 * @param {Object} context
 	 * @return The HTML for this template.
	 */
	getHtmlFor: function(context) {
		return this.template(context);
	}
};

})(); //End closure

