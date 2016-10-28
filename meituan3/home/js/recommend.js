app.controller("recommendCtrl", function ($css) {

      $css.removeAll();
      $css.add('home/css/recommend.css')
      if ($('.recommend')) {
         $('nav').hide();
      }
});
