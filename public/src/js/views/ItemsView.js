var _ = require('underscore');
var Backbone = require('backbone');
var ItemView = require('./ItemView');

var ItemsView = Backbone.View.extend({
  el: '<ul></ul>',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var _this = this;
    this.collection.each(function(item) {
      var itemView = new ItemView({model: item});
      _this.$el.append(itemView.render().el);
    });

    return this;
  }
});

module.exports = ItemsView;
