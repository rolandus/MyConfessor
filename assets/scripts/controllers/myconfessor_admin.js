/* ==================================================================
 * Controllers for the Admin app. 
 * ==================================================================
 */
(function(){
	
/**
 * Confessor request list view controller
 */
$MC.ConfessorRequestsView = $MC.ListPageView.extend({
	//List of current confessor requests
    collection: $MC.collections.confessor_requests,
    template: new $MC.Template("confessor_requests")
});

/**
 * User account list view controller
 */
$MC.UserAccountsView = $MC.ListPageView.extend({
	//List of current confessor requests
    collection: $MC.collections.user_accounts,
    template: new $MC.Template("user_accounts")
});

/**
 * Main application controller
 */
$MC.MainView = Backbone.View.extend({
    
    //======================================
    // Properties
    //======================================

    //All the stuff that needs to be fetched from the server at app startup.
    static_collections: {
        states: $MC.collections.states,
        dioceses: $MC.collections.dioceses
    },
    
    controllers: {
    	constructors: {
    		confessor_requests: $MC.ConfessorRequestsView,
    		user_accounts: $MC.UserAccountsView
    	},
    	confessor_requests: null,
    	user_accounts: null
    },
    
    
    //======================================
    // Functions
    //======================================
    
    initialize: function() {
        this.fetchStaticCollections();
        this.startStaticCollectionsListener();
        this.activateLinks();  //Wire up the page links to be all crazy-like.
    },
    
    start: function() {
        console.debug(this.static_collections.states);
        console.debug(this.static_collections.dioceses);
    },
    
    /**
     * Attach listeners to all links with a 'data-page' attribute, which will cause
     * them to render pages using DOM injection rather than postbacks.
     */
    activateLinks: function() {
		$("a[data-page]").bind("click", $.proxy(function(event) {
			var page = event.currentTarget.getAttribute('data-page'); //The event target is only being the link when you click in a very specific spot;
			event.preventDefault();
			event.stopPropagation();
			this.navigateToPage(page);
		}, this));
    },
    
    /**
     * Called to change to a specific page within the app.
     *  @param page - The name of the page to navigate to.
     */
    navigateToPage: function(page) {
    	var controller = this.getControllerFor(page);
    	if (this.current_controller) {
    		this.current_controller.hide();
    	}
    	this.current_controller = controller;
    	this.current_controller.show();
    },
    
    /**
     * Get the specfied controller and create it if it doesn't exist.
     *  @param page - The name of the page to get the controller for.
     *  @return - The controller for the specified page.
     */
    getControllerFor: function(page) {
    	var controller = this.controllers[page];    	
    	if (!this.controller) {
    		controller = this.controllers[page] = new this.controllers.constructors[page]();
    	}
    	return controller;
    },
    
    /**
     * Starts polling to figure out when the static data is loaded.
     */
    startStaticCollectionsListener: function() {
        this.static_collections_timer = window.setInterval($.proxy(function() {
            if (this.staticCollectionsAreReady()) {
                window.clearInterval(this.static_collections_timer);
                this.start();
            } 
        }, this), $MC.settings.data_polling_interval);
    },
    
    /**
     * @return True if all the static data is loaded; False otherwise.
     */
    staticCollectionsAreReady: function() {
        var ready = true;
        $.each(this.static_collections, function() {
            ready = ready && this.length > 0;
        });
        return ready;
    },
    
    /**
     * Fetch the data for all the collections listed as "static" data.
     */
    fetchStaticCollections: function() {
        $.each(this.static_collections, function() {
            this.fetch();
        });
    }
});


})(); //End closure
