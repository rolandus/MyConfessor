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
 * DOM helpers
 * ==================================================================
 */
$MC.layout_header = $("#header");
$MC.layout_content = $("#content");
$MC.layout_footer = $("#footer");

/* ==================================================================
 * Handlebars helpers
 * ==================================================================
 */

/**
 * Handlebars helper used to convert an "enum" value into something useful (like a name or abbreviation)
 * 
 * Parameters
 *  @param {Integer} value The value to be dereferenced
 *  @param {String} enumName The enum name
 *  @param {String} property The property of the enum that will be returned. Default is "name".
 */
Handlebars.registerHelper("enum", function(value, enumName, property) {
	if (typeof property !== "string") { property = "name"; }
	return $MC.enums[enumName].get(value).attributes[property];
});

/**
 * Handlebars helper used to convert a record ID into something useful.
 * 
 * Parameters
 *  @param {Integer} id The id of the record to dereferenced
 *  @param {String} collection The name of the collection to select the record from
 *  @param {String} property The property that will be returned from the selected record
 */
Handlebars.registerHelper("record", function(id, collection, property) {
	if (typeof property !== "string") { throw "You must provide a property for the 'record' helper."; }
	return $MC.data[collection].get(id).attributes[property];
});

/**
 * Template helper - abstracts the fact that the templates may
 * or may not be precompiled. If the scripts are not precompiled,
 * it assumes that each template lives in its own script tag
 * with an ID of the format "<template name>_tpl".
 * 
 * Parameters
 *  @param {String} name The name of the template.
 *  @param {Backbone.Collection} collection The (optional) collection of models being passed into the template.
 *  @param {Integer} record_id The (optional) record ID of the model we are rendering
 */
$MC.Template = function(name, collection, record_id) {
	this.name = name;
	this.collection = collection;
	this.record_id = record_id;
	if ($MC.settings.are_templates_precompiled) {
		this.template = Handlebars.templates[name];
	} else {
		this.template = Handlebars.compile($("#" + this.name + "_tpl").html());
	}
};
$MC.Template.prototype = {

	name: null,
	collection: null,
	record_id: null,
	
	/**
	 * Get the template HTML for the collection/model ID that was passed in at creation.
	 * If only a collection is passed in, it puts the whole collection into a context for a list view.
	 * If a collection and a record ID are passed in, it just renders that one model.
	 *  @return The HTML for this template.
	 */
	getHtml: function() {
		var context;
		if (this.collection) {
			if (this.record_id) {
				context = this.collection.get(this.record_id).attributes;
			} else {
				context = { items: this.collection.toJSON() };
			}
		} else {
			throw "No collection specified for this template.";
		}
		return this.template(context);
	},
	
	/**
	 * Get the template HTML for an arbitrary context object.
 	 *  @param {Object} context
 	 *  @return The HTML for this template.
	 */
	getHtmlFor: function(context) {
		return this.template(context);
	}
};

})(); //End closure

