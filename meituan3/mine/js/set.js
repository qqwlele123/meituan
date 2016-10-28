app.controller('setCtrl', function ($css) {
    // 添加css文件到页面中
    $css.removeAll();
    $css.add('./mine/css/set.css');
    if ($('.set-header')) {
       $('nav').hide()
    }
});
