/* ==================================================================
 * View Controllers
 * ==================================================================
 */
(function(){

/**
 * Base controller for a page that shows a list of items (a collection-based page)
 */
$MC.ListPageView = Backbone.View.extend({

	//Both of these should be overriden by the subclass.
	collection: null,
	template: null,
	
	initialize: function() {
    	_.bindAll(this, "render", "hide", "show");
        this.collection.fetch({ success: this.show });
        this.template.collection = this.collection;
	},
	
    render: function() {
        console.debug(this.collection);
        this.$el.html(this.template.getHtml());
    },
    
    hide: function() {
    	console.debug('hiding');
    	//Noop. TODO: What would this even be?
    },
    
    show: function() {
    	this.render();
    	console.debug('showing');
    	$MC.layout_content.html(this.$el.html()); //TODO: This double-buffering is not actually neede right now.
    }
});


})();
