//Declare namespaces
var $$Cache = $$Cache || {};
var $$Constants = $$Constants || {};
var $$Controllers = $$Controllers || {};
var $$Settings = $$Settings || {};
var Templates = Templates || {};
var $$Utils = $$Utils || {};


/* ==================================================================
 * Settings
 * ==================================================================
 */
var $$DBG = $$Settings.debug = true; 				//Determine whether the app is in debug mode or not
$$Settings.server_url = "http://localhost:3000";    //The base URL for the web services


/* ==================================================================
 * Hacks and fixes
 * ==================================================================
 */
if(!window.console){ window.console = {
		log: function(a){}, 
		info: function(a){}, 
		warn: function(a){}, 
		debug: function(a){}, 
		error: function(a){} 
	}; 
} //Fake console functions for older IE browsers


/* ==================================================================
 * Utility functions
 * ==================================================================
 */

/*
 * Get JSON from the given URL and populate the given template with it. Then execute the callback.
 */
$$Utils.getHtmlForJSON = function $$Utils$getHtmlForJSON(dataQuery, template, callback, isCacheable, dataWrapper, dataProperty) {
	if (!dataQuery) { throw('dataQuery is null.'); }
	if (!template) { throw('template is null.'); }
	if (!callback) { throw('callback is null.'); }
	
	var cacheKey, cachedHtml;
	cacheKey = dataQuery + '$html';
	cachedHtml = $$Cache[cacheKey];
	if (isCacheable && cachedHtml) {
		callback(cachedHtml);
		if ($$DBG) { console.debug('$$Utils$getHtmlForJSON: Got html from cache and executed callback for: ' + url); }
	}
	else {
		$$Utils.getJSON(dataQuery, function(data) {		
			var templateHtml;
			if (dataWrapper && dataProperty) { 
				dataWrapper[dataProperty] = data; 
			}
			else dataWrapper = data;
			try {
				templateHtml = template(dataWrapper);
				if (isCacheable) { $$Cache[cacheKey] = templateHtml; }
				callback(templateHtml);
				if ($$DBG) { console.debug('$$Utils$getHtmlForJSON: Got html from template and executed callback for: ' + dataQuery); }
			}
			catch(ex) {
				console.error('$$Utils$getHtmlForJSON: Problem populating template for: ' + dataQuery + '. ' + ex.message);
			}
		}, isCacheable);
	}
};

/*
 * Get JSON from the given URL and execute the callback.
 */
$$Utils.getJSON = function $$Utils$getJSON(dataQuery, callback, isCacheable) {
	if (!dataQuery) { throw('dataQuery is null.'); }
	if (!callback) { throw('callback is null.'); }

	var url, jqXHR;	
	if (isCacheable && $$Cache[dataQuery]) {
		callback($$Cache[dataQuery]);
		if ($$DBG) { console.debug('$$Utils$getJSON: Got json data from cache and executed callback for: ' + url); }
	}
	else {
		url = $$Settings.server_url + '/' + dataQuery + '.json';
		jqXHR = $.getJSON(url, function(data) {		
			if (isCacheable) { $$Cache[dataQuery] = data; }
			callback(data);
			if ($$DBG) { console.debug('$$Utils$getJSON: Got json data from server and executed callback for: ' + url); }
		}).fail(function() {
	    	console.error('$$Utils$getJSON: Failed to get data for: ' + url + '.');
	  	});
  	}
};


/* ==================================================================
 * Handlebars helpers
 * ==================================================================
 */

/*
 * Select
 */
/*
Handlebars.registerHelper('select', function(context, options) {
  var ret = '<select id="' + context.model + '_' + context.property + '_id" name="' + context.model + '[' + context.property + '_id]">';
  for(var i = 0; i < context.items.length; i++) {
    ret = ret + '<option value="' + context.items[i].id + '">' + options.fn(context.items[i]) + '</option>';
  }
  return ret + '</select>';
});*/

