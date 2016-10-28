app.controller("cityCtrl", function ($css) {

      $css.removeAll();

      $css.add('home/css/city.css')

     if ($('#city')) {
   		 	$('nav').hide()
     }
});
