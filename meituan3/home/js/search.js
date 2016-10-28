app.controller("searchCtrl", function ($css) {

      $css.removeAll();
      $css.add('home/css/search.css')
      if ($('#search')) {
         $('nav').hide()
      }
});
