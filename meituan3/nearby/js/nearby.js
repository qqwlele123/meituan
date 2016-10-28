app.controller("nearbyCtrl", function ($scope, $css, $http) {

       $css.removeAll();
       $css.add('../../nearby/css/nearby.css')

       $http.get("http://localhost:8888/libs/home.json").success(function(data){

            $scope.data = data.record;
            $scope.data2 = data.room;
            $('.contented .wrap-1 .hot ul li').eq(0).addClass('item');
       });
       $scope.list = ["热门", "小吃快餐", "面包甜点", "川菜", "北京菜", "东北菜", "韩国料理", "江浙菜"]
       $scope.click = function(i){

          $(".contented .wrap-1 .hot ul li").removeClass('item').eq(i).addClass('item')
       }
  
       $(function () {

            var index = 0;

            // 把所有li的宽度调整为和wrapper一样大小
            $('.container .wrap div').width($('.wrap').width());

            // 给tab按钮绑定事件
            $('.container .header ul li').on('tap', function (e) {

                // 调用move函数，传递当前点击按钮的下标
                index = $(this).index();
                move();
            });

            // 编写函数，实现ul的位移
            function move() {
                // 使用li的宽度乘以点击的tab按钮的下标
                var x = -$('.content .contented div').width() * index + "px";
                // 修改ul的位移值
                $('.content .contented').css({
                    transform: "translateX("+ x +")"
                });

                // 处理Tab按钮效果
                $('.content .header ul li').removeClass('active');
                $('.content .header ul li').eq(index).addClass('active');
            }

            // 给ul添加滑动事件
            $('.content .contented').on('swipeleft swiperight', function (e) {
              console.log(e.type);
              console.log(index);
                if (e.type == 'swipeleft') {
                     index++;
                    if (index >= 3) {
                        index = 3;
                    }
                } else if (e.type == 'swiperight') {
                    index--;
                    if (index < 0) {
                        index = 0;
                    }
                }

                move();
            });


        });
});
