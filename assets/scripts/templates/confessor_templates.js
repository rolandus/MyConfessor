(function() {
  var template = Handlebars.template, templates = Templates.confessor = Templates.confessor || {};
templates['main_page'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['request_account_page'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>Please fill out the information below. We'll get in touch with you to verify your identity and then we'll email you an invitation to create your account. This usually takes about three days.</p>\n\n<form accept-charset=\"UTF-8\" action=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.server_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/confessor_requests\" id=\"new_confessor_request\" method=\"post\">\n    <fieldset>\n        <label for=\"confessor_request_first_name\">First name</label>\n        <input id=\"confessor_request_first_name\" name=\"confessor_request[first_name]\" type=\"text\" />\n        <label for=\"confessor_request_last_name\">Last name</label>\n        <input id=\"confessor_request_last_name\" name=\"confessor_request[last_name]\" type=\"text\" />\n        <label for=\"confessor_request_email\">Email</label>\n        <input id=\"confessor_request_email\" name=\"confessor_request[email]\" type=\"email\" />       \n        <label for=\"confessor_request_diocese\">Diocese</label>\n        ";
  if (stack2 = helpers.diocese_select) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.diocese_select; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </fieldset>     \n</form>\n";
  return buffer;
  });
})();