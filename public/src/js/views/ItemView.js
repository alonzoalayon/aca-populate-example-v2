var _ = require('underscore');
var Backbone = require('backbone');

var ItemView = Backbone.View.extend({
  el: '<li></li>',
  template: _.template([
    '<span> <%= name %> </span>',
    '<div> <%= tags %> </div>'
  ].join('')),

  render: function() {
    this.$el.append(this.template({
      name: this.model.get('name'),
    }));

    var tagsView = new TagsView({collection: this.model.get('tags')});

    this.$el.append(tagsView.render().el);

    return this;
  }
});

module.exports = ItemView;
