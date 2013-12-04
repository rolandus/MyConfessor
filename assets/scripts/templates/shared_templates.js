(function() {
  var template = Handlebars.template, templates = Templates.shared = Templates.shared || {};
templates['form_create'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"create_form\">\n	";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<input type=\"button\" class=\"submit_button\" value=\"";
  if (stack1 = helpers.submit_label) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.submit_label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<input type=\"button\" class=\"cancel_button\" value=\"";
  if (stack1 = helpers.cancel_label) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cancel_label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</form>";
  return buffer;
  });
templates['form_select'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "   \n    <option value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n";
  return buffer;
  }

  buffer += "<select id=\"";
  if (stack1 = helpers.model) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.model; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_";
  if (stack1 = helpers.property) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.property; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_id\" name=\"";
  if (stack1 = helpers.model) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.model; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "[";
  if (stack1 = helpers.property) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.property; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_id]\">\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  \n</select>";
  return buffer;
  });
templates['page'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-role=\"page\" id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n\n	<div data-role=\"header\">\n        ";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div><!-- /header -->\n\n	<div data-role=\"content\">\n	    ";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div><!-- /content -->\n\n	<div data-role=\"footer\">\n		";
  if (stack1 = helpers.footer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.footer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>		\n</div><!-- /page -->\n";
  return buffer;
  });
})();