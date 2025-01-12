$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({pageNotFound : 'error_404'}); // initialize

  // define routes
  app.route({
    view: 'view_1',
    onCreate: function() { $("#view_1").append($.now()+': Written on create<br/>'); },
    onReady: function() { $("#view_1").append($.now()+': Written when ready<br/>'); }
  });
  app.route({view: 'view_2', load: 'view_2.html' });
  app.route({view: 'view_3', load: 'view_3.html' });
  app.route({view: 'view_4', load: 'view_4.html' });
  app.route({view: 'view_5', load: 'view_5.html' });
  app.route({view: 'view_6', load: 'view_6.html' });

  // run app
  app.run();

});