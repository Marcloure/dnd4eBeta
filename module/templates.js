/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/dnd4eAltus/templates/actors/parts/actor-attributes.html",
    "systems/dnd4eAltus/templates/actors/parts/actor-inventory.html",
	
	// Item Sheet Partials
	"systems/dnd4eAltus/templates/items/parts/item-action.html",
	"systems/dnd4eAltus/templates/items/parts/item-activation.html",
	"systems/dnd4eAltus/templates/items/parts/item-description.html",
	"systems/dnd4eAltus/templates/items/parts/item-mountable.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
