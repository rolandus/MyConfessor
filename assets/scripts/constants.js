//TODO Rename/repurpose this file to core.js

var $$MyConfessor = $$MyConfessor || {};
var $$MC = $$MyConfessor;
$$MC.Controllers = $$MC.Controllers || {};
$$MC.Constants = $$MC.Constants || {};

//TODO In this case, it might be better to have utility functions to update the contents of these sections.
$$MC.Constants.Selectors = $$MC.Constants.Selectors || {};
var $$MCSelect = $$MC.Constants.Selectors;

$$MCSelect.mainContainer = '#main_container';
$$MCSelect.footerContainer = '#footer_container';
$$MCSelect.headerContainer = '#header_container';

$$MC.Utilities = $$MC.Utilities || {};
var $$MCUtilities = $$MC.Utilities;

var MCTemplates = MCTemplates || {};

$$MCUtilities.Private = $$MCUtilities.Private || {};
/**
 * Clear out the contents of the given section (and clear event listeners) and replace it with $content
 * @param {Object} section Selector of the given section
 * @param {Object} $content Content to put in the section
 */
$$MCUtilities.Private.setSectionContent = function Utilities$setSectionContent(section, $content) {
	var $section = $(section);
	$section.find('*').off(); //remove all event listeners
	$section.empty();
	$section.append($content);
};

$$MCUtilities.setMainContent = function Utilities$setMainContent($content) {
	$$MCUtilities.Private.setSectionContent($$MCSelect.mainContainer, $content);
};

$$MCUtilities.setFooterContent = function Utilities$setMainContent($content) {
	$$MCUtilities.Private.setSectionContent($$MCSelect.footerContainer, $content);
};

