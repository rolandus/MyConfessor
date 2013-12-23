/* ==================================================================
 * Controllers for the Admin app. 
 * ==================================================================
 */
(function(){

/**
 * Main application controller
 */
$MC.MainView = Backbone.View.extend({
    
    //======================================
    // Properties
    //======================================

    //All the stuff that needs to be fetched from the server at app startup.
    static_collections: {
        states: new $MC.StateCollection(),
        dioceses: new $MC.DioceseCollection()
    },
    
    
    //======================================
    // Functions
    //======================================
    
    initialize: function() {
        this.fetchStaticCollections();
        this.startStaticCollectionsListener();
    },
    
    start: function() {
        console.debug(this.static_collections.states);
        console.debug(this.static_collections.dioceses);
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
