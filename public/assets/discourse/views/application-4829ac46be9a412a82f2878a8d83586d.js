define("discourse/views/application",["exports"],function(e){"use strict";e["default"]=Ember.View.extend({_appendCategoryClass:function(e,o){var r=Em.get(e,o);r&&$("body").addClass("category-"+r)}.observes("controller.styleCategory.id"),_removeOldClass:function(e,o){var r=Em.get(e,o);r&&$("body").removeClass("category-"+r)}.observesBefore("controller.styleCategory.id")})});
//# sourceMappingURL=/assets/discourse/views/application-4829ac46be9a412a82f2878a8d83586d.js.map