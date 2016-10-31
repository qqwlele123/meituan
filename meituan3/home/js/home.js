app.controller('homeCtrl', function ($css, $scope, $http) {
    // 添加css文件到页面中
    $css.removeAll();
    $css.add('home/css/home.css');
    if ($('#')) {
       $('nav').show()
    };
    $scope.click = function(){
        $('body,html').animate({ scrollTop: 0 }, 200);
    }
    $http.get("http://localhost:8888/libs/home.json").success(function(data){

          $scope.data = data.data;
    })
    
     $(function(){
            // 记录当前下标
            var index = 0;

            // 把所有li的宽度调整为和wrapper一样大小
            // $('.container div').width($('.wrapper').width());


            // 编写函数，实现ul的位移
            function move() {
                // 使用li的宽度乘以点击的tab按钮的下标
                var x = -$('.container ul').width() * index + "px";
                // 修改ul的位移值
                $('.container .wrap').css({
                    transform: "translateX("+ x +")"
                });

            };

            // 给ul添加滑动事件

            $('.container .wrap').on('swipeleft swiperight', function (e) {
              console.log($('.container .wrap ul').length);
                if (e.type == 'swipeleft') {
                    index++;
                    if (index >= $('.container .wrap ul').length) {
                        index = $('.container .wrap ul').length - 1;
                    }
                }
                console.log(e.type);
                 if (e.type == 'swiperight') {
                    index--;
                    console.log(index);
                    if (index < 0) {
                        index = 0;
                    }
                }

                move();
            });

            })
});
