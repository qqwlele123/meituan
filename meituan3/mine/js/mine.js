app.controller('mineCtrl', function ($css) {
    // 添加css文件到页面中
    $css.removeAll();
    $css.add('./mine/css/mine.css');
    if ('#mine') {
       $('nav').show()
    }
});
