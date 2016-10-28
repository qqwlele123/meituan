app.controller('movieCtrl', function ($css, $scope, $http) {

    $css.removeAll();
    $css.add('home/css/movie.css');

           $http.get("http://localhost:8888/libs/home.json").success(function(data){

                $scope.data = data.movie;
           })
    //  轮播图
   var mySwiper = new Swiper ('.swiper-container', {
         direction: 'horizontal',
         loop: true,
         autoplay: 3000,
         autoplayDisableOnInteraction : false,
         autoplayStopOnLast : true,
        //  virtualTranslate: true,
         // 如果需要分页器
         pagination: '.swiper-pagination',
       })
       if ($('#movie')) {
     		 	$('nav').hide()
       }


});
