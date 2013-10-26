(function() {
  var template = Handlebars.template, templates = MCTemplates.admin = MCTemplates.admin || {};
templates['account_requests_content'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-primary\">\n    <ul data-role=\"listview\" class=\"ui-listview\">\n        <li data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c\">\n            <div class=\"ui-btn-inner ui-li\">\n                <div class=\"ui-btn-text\">\n                    <a href=\"#edit_account\" class=\"ui-link-inherit\"> <h3 class=\"ui-li-heading\">Fr. Richard Heilman - Diocese of Madison</h3>\n                    <p class=\"ui-li-desc\">\n                        requested on 8/7/2013 (42 days)\n                    </p>\n                    Mobile: (906) 555-6789\n                    Home: (960) 555-1234\n                    Address: 1234 Country Lane\n                    </a>\n                </div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span>\n            </div>\n        </li>\n        <li data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c\">\n            <div class=\"ui-btn-inner ui-li\">\n                <div class=\"ui-btn-text\">\n                    <a href=\"index.html\" class=\"ui-link-inherit\"> <h3 class=\"ui-li-heading\">Ep. Robert Morlino - Diocese of Madison</h3>\n                    <p class=\"ui-li-desc\">\n                        requested on 8/1/2013 (45 days)\n                    </p> </a>\n                </div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span>\n            </div>\n        </li>\n        <li data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c\">\n            <div class=\"ui-btn-inner ui-li\">\n                <div class=\"ui-btn-text\">\n                    <a href=\"index.html\" class=\"ui-link-inherit\"> <h3 class=\"ui-li-heading\">Fr. Larry van der Hoest - Diocese of Marquette</h3>\n                    <p class=\"ui-li-desc\">\n                        requested on 7/15/2013 (50 days)\n                    </p> </a>\n                </div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span>\n            </div>\n        </li>\n    </ul>\n</div>\n";
  });
templates['account_search_content'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content-primary\">\n    <ul data-role=\"listview\" data-filter=\"true\" class=\"ui-listview\">\n        <li data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c\">\n            <div class=\"ui-btn-inner ui-li\">\n                <div class=\"ui-btn-text\">\n                    <a href=\"index.html\" class=\"ui-link-inherit\"> <img src=\"http://stmarypb.com/files/images/pastor.jpg\" class=\"ui-li-thumb\"> <h3 class=\"ui-li-heading\">Ep. James Smith - Diocese of LaCrosse</h3>\n                    <p class=\"ui-li-desc\">\n                        jsmith@gmail.com\n                    </p> </a>\n                </div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span>\n            </div>\n        </li>\n        <li data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c\">\n            <div class=\"ui-btn-inner ui-li\">\n                <div class=\"ui-btn-text\">\n                    <a href=\"index.html\" class=\"ui-link-inherit\"> <img src=\"http://stmarypb.com/files/images/pastor.jpg\" class=\"ui-li-thumb\"> <h3 class=\"ui-li-heading\">Fr. William Smitth - Diocese of Marquette</h3>\n                    <p class=\"ui-li-desc\">\n                        father_william@gmail.com\n                    </p> </a>\n                </div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span>\n            </div>\n        </li>\n        <li data-corners=\"false\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"c\" class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c\">\n            <div class=\"ui-btn-inner ui-li\">\n                <div class=\"ui-btn-text\">\n                    <a href=\"index.html\" class=\"ui-link-inherit\"> <img src=\"http://stmarypb.com/files/images/pastor.jpg\" class=\"ui-li-thumb\"> <h3 class=\"ui-li-heading\">Fr. Kevin Smith - Diocese of Madison</h3>\n                    <p class=\"ui-li-desc\">\n                        ks1979@yahoo.com\n                    </p> </a>\n                </div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span>\n            </div>\n        </li>\n    </ul>\n</div>\n";
  });
templates['edit_account_content'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form action=\"#\" method=\"post\">\n    <h2>Account</h2>\n        <fieldset data-role=\"controlgroup\" data-type=\"horizontal\" >\n            <legend>Account Status:</legend>\n            <input type=\"radio\" name=\"account_status\" id=\"account_status_1\" value=\"1\" checked=\"checked\" />\n            <label for=\"account_status_1\">Active</label>\n            \n            <input type=\"radio\" name=\"account_status\" id=\"account_status_2\" value=\"2\" />\n            <label for=\"account_status_2\">Inactive</label>\n        </fieldset>\n        <fieldset data-role=\"controlgroup\" data-type=\"horizontal\" >\n           <legend>Account Role:</legend>\n           <input type=\"checkbox\" name=\"account_role_1\" id=\"account_role_1\" class=\"custom\" />\n           <label for=\"account_role_1\">Priest</label>\n\n           <input type=\"checkbox\" name=\"account_role_2\" id=\"account_role_2\" class=\"custom\" />\n           <label for=\"account_role_2\">Administrator</label>\n        </fieldset>\n        <fieldset data-role=\"controlgroup\" data-type=\"horizontal\" >\n            <legend>Password:</legend>\n            <button type=\"button\">Reset</button>\n        </fieldset>\n    \n    <h2>Name</h2>\n            <label for=\"name\">First:</label>\n            <input type=\"text\" name=\"name\" id=\"name\" value=\"\"  />\n            <label for=\"name\">Last:</label>\n            <input type=\"text\" name=\"name\" id=\"name\" value=\"\"  />\n           <label for=\"select-choice-1\" class=\"select\">Office:</label>\n           <select name=\"select-choice-1\" id=\"select-choice-1\">\n              <option value=\"standard\">Priest</option>\n              <option value=\"rush\">Bishop</option>\n              <option value=\"express\">Cardinal</option>\n              <option value=\"overnight\">Pope</option>\n           </select>\n            <label for=\"name\">Salutation:</label>\n            <input type=\"text\" name=\"name\" id=\"name\" value=\"\"  />\n    \n    <h2>Contact Info</h2>\n            <label for=\"home-phone\">Home phone:</label>\n            <input type=\"tel\" name=\"name\" id=\"home-phone\" value=\"\"  />\n            \n            <label for=\"mobile-phone\">Mobile phone:</label>\n            <input type=\"tel\" name=\"name\" id=\"mobile-phone\" value=\"\"  />\n            \n            <label for=\"email\">Email:</label>\n            <input type=\"email\" name=\"name\" id=\"email\" value=\"\"  />\n            \n            <label for=\"street\">Street address:</label>\n            <textarea name=\"street\" id=\"street\"></textarea>\n            \n            <label for=\"diocese\">Diocese:</label>\n            <input type=\"text\" name=\"diocese\" id=\"diocese\" value=\"\"  />\n\n            <label for=\"diocese\">Parish:</label>\n            <input type=\"text\" name=\"parish\" id=\"parish\" value=\"\"  />\n\n    \n    <h2>About Me</h2>\n        <textarea name=\"about-me\" id=\"about-me\"></textarea>\n</form>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a href=\"#account_requests\" data-role=\"button\" >Verify Account Requests</a>\n<a href=\"#account_search\" data-role=\"button\" >Manage Existing Accounts</a>";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>";
  return buffer;
  });
templates['menu_bar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['user_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>Account</h3>\n<h3>Name & Office</h3>\n<div class=\"field\">\n	<label for=\"user_first_name\">First name</label><br>\n	<input id=\"user_first_name\" name=\"user[first_name]\" type=\"text\" value=\"";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"field\">\n	<label for=\"user_last_name\">Last name</label><br>\n	<input id=\"user_last_name\" name=\"user[last_name]\" type=\"text\" value=\"";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"field\">\n  <label for=\"user_salutation\">Salutation</label><br>\n  <input id=\"user_salutation\" name=\"user[salutation]\" type=\"text\" value=\"";
  if (stack1 = helpers.salutation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.salutation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n<h3>Contact Info</h3>\n<div class=\"field\">\n	<label for=\"user_home_phone\">Home phone</label><br>\n	<input id=\"user_home_phone\" name=\"user[home_phone]\" type=\"text\" value=\"";
  if (stack1 = helpers.home_phone) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.home_phone; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"field\">\n	<label for=\"user_mobile_phone\">Mobile phone</label><br>\n	<input id=\"user_mobile_phone\" name=\"user[mobile_phone]\" type=\"text\" value=\"";
  if (stack1 = helpers.mobile_phone) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mobile_phone; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n<div class=\"field\">\n	<label for=\"user_email\">Email</label><br>\n	<input id=\"user_email\" name=\"user[email]\" type=\"text\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"field\">\n	<label for=\"user_street_address\">Street address</label><br>\n	<input id=\"user_street_address\" name=\"user[street_address]\" type=\"text\" value=\"";
  if (stack1 = helpers.street_address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.street_address; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"field\">\n	<label for=\"user_city\">City</label><br>\n	<input id=\"user_city\" name=\"user[city]\" type=\"text\" value=\"";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"field\">\n	<label for=\"user_parish\">Parish</label><br>\n	<input id=\"user_parish\" name=\"user[parish]\" type=\"text\" value=\"";
  if (stack1 = helpers.parish) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.parish; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<h3>About Me</h3>\n<div class=\"field\">\n	<label for=\"user_about_me\">About me</label><br>\n	<textarea id=\"user_about_me\" name=\"user[about_me]\">";
  if (stack1 = helpers.about_me) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about_me; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</textarea>\n</div>\n";
  return buffer;
  });
})();
