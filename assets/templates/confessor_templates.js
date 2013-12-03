(function() {
  var template = Handlebars.template, templates = MCTemplates.confessor = MCTemplates.confessor || {};
templates['content_main'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['content_request_account'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>Please fill out the information below. We'll get in touch with you to verify your identity and then we'll email you an invitation to create your account. This usually takes about three days.</p>\n\n<form accept-charset=\"UTF-8\" action=\"";
  if (stack1 = helpers.app_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/confessor_requests\" id=\"new_confessor_request\" method=\"post\">\n    <fieldset>\n        <label for=\"confessor_request_first_name\">First name</label>\n        <input id=\"confessor_request_first_name\" name=\"confessor_request[first_name]\" type=\"text\">\n        <label for=\"confessor_request_last_name\">Last name</label><br>\n        <input id=\"confessor_request_last_name\" name=\"confessor_request[last_name]\" type=\"text\" />\n        <label for=\"confessor_request_email\">Email</label><br>\n        <input id=\"confessor_request_email\" name=\"confessor_request[email]\" type=\"email\" />\n        <label for=\"confessor_request_diocese\">Diocese</label><br>\n        <select id=\"confessor_request_diocese_id\" name=\"confessor_request[diocese_id]\">";
  if (stack1 = helpers.dioceses) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dioceses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</select>                   \n    </fieldset>     \n</form>\n";
  return buffer;
  });
})();