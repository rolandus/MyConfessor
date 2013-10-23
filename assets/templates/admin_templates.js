(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
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
