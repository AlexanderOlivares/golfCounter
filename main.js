"use strict";

var app = {};

app.Hole = Backbone.Model.extend({});
app.Total = Backbone.Model.extend({});
app.Strokes = Backbone.Model.extend({});

app.HoleView = Backbone.View.extend({
  initialize: function () {
    this.render();
  },
  add: function () {
    if (this.model.get("hole") < 18) {
      this.model.set("hole", this.model.get("hole") + 1);
    } else {
      this.model.set("hole", 1);
    }
    this.render();
  },
  subtract: function () {
    if (this.model.get("hole") > 1) {
      this.model.set("hole", this.model.get("hole") - 1);
    } else {
      this.model.set("hole", 18);
    }
    this.render();
  },
  render: function () {
    this.$el.html(this.model.get("hole"));
    return this;
  },
});
app.TotalView = Backbone.View.extend({
  initialize: function () {
    this.render();
  },
  add: function () {
    this.model.set("total", this.model.get("total") + 1);
    this.render();
  },
  subtract: function () {
    if (this.model.get("total") > 0) {
      this.model.set("total", this.model.get("total") - 1);
    }
    this.render();
  },
  reset: function () {
    this.model.set("total", 0);
    this.render();
  },
  render: function () {
    this.$el.html(this.model.get("total"));
    return this;
  },
});
app.StrokesView = Backbone.View.extend({
  initialize: function () {
    this.render();
  },
  add: function () {
    if (this.model.get("strokes") < 10) {
      this.model.set("strokes", this.model.get("strokes") + 1);
    } else {
      this.model.set("strokes", 1);
    }
    console.log("add");
    this.render();
  },
  subtract: function () {
    if (this.model.get("strokes") > 0) {
      this.model.set("strokes", this.model.get("strokes") - 1);
    } else {
      this.model.set("strokes", 10);
    }
    this.render();
  },
  reset: function () {
    this.model.set("strokes", 0);
    this.render();
  },
  render: function () {
    this.$el.html(this.model.get("strokes"));
    return this;
  },
});

$(document).ready(function () {
  var hole = new app.Hole({ hole: 1 });
  var holeView = new app.HoleView({
    el: "#hole",
    model: hole,
  });

  var total = new app.Total({ total: 0 });
  var totalView = new app.TotalView({
    el: "#total",
    model: total,
  });

  var strokes = new app.Strokes({ strokes: 0 });
  var strokesView = new app.StrokesView({
    el: "#strokes",
    model: strokes,
  });

  $("#countUpHoles").click(function () {
    holeView.add();
  });
  $("#countDownHoles").click(function () {
    holeView.subtract();
  });
  $("#countUpTotal").click(function () {
    totalView.add();
  });
  $("#countDownTotal").click(function () {
    totalView.subtract();
  });
  $("#countUpStrokes").click(function () {
    strokesView.add();
    totalView.add();
  });
  $("#countDownStrokes").click(function () {
    strokesView.subtract();
    totalView.subtract();
  });
  $("#reset").click(function () {
    strokesView.reset();
    holeView.add();
  });
  $("#resetTotal").click(function () {
    totalView.reset();
  });
});
