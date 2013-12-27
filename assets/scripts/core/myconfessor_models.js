/* ==================================================================
 * Models and collections
 * ==================================================================
 */
(function(){

/**
 * Generic Model to serialize and submit a form as JSON.
 */
$MC.Form = Backbone.Model.extend();
$MC.Form.prototype.serialize = function($form) {
	this.$form = $form;
	this.urlRoot = $form.attr("action");
	this.set($form.serializeToJSON());
};


/**
 * Base collection for everything fetched as JSON. For now, it's just used to construct the URL.
 */
$MC.JSONCollection = Backbone.Collection.extend({
    server_url: $MC.settings.server_url + "/",
    url_suffix: ".json",
    url: function() {
        if(!this.cached_url) {
             this.cached_url = this.server_url + this.data_url + this.url_suffix;   
        }
        return this.cached_url;
    }   
});

$MC.collections = {};
/**
 * The collection of states
 */
$MC.StateCollection = $MC.JSONCollection.extend({
    data_url: "states"
});
$MC.collections.states = new $MC.StateCollection();

/**
 * The collection of dioceses
 */
$MC.DioceseCollection = $MC.JSONCollection.extend({
    data_url: "dioceses"
});
$MC.collections.dioceses = new $MC.DioceseCollection();

/**
 * The collection of confessor requests
 */
$MC.ConfessorRequestCollection = $MC.JSONCollection.extend({
    data_url: "confessor_requests"
});
$MC.collections.confessor_requests = new $MC.ConfessorRequestCollection();

/**
 * The collection of user accounts
 */
$MC.UserAccountCollection = $MC.JSONCollection.extend({
    data_url: "user_accounts"
});
$MC.collections.user_accounts = new $MC.UserAccountCollection();

})(); //End closure

